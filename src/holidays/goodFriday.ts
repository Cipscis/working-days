import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { getEasterSunday } from './easterSunday.js';

/**
 * A cache of Good Friday dates for quick retrieval.
 */
const goodFridays = new Map<number, DateTuple>();

/**
 * Returns Good Friday for a given year.
 *
 * As far as I can find, there is no definition of when Good Friday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Good Friday is the Friday before Easter Sunday.
 */
export function getGoodFriday(year: number): DateTuple {
	if (
		year < 1900 ||
		year > 2199
	) {
		throw new RangeError(`Dates for Easter outside the years 1900-2199 have not been defined.`);
	}

	const cachedEaster = goodFridays.get(year);
	if (cachedEaster) {
		return cachedEaster;
	}

	const easterSunday = getEasterSunday(year);
	const goodFriday: DateTuple = [
		easterSunday[0],
		easterSunday[1],
		easterSunday[2] - 2,
	];

	// Easter Sunday is always in late March or early April. If it's on April 1 or April 2, we need to tick over to March.
	if (goodFriday[2] <= 0) {
		goodFriday[1] -= 1;
		goodFriday[2] += 31;
	}

	// Cache determined Easter date for later quick retrieval
	goodFridays.set(year, goodFriday);

	return goodFriday;
}

/**
 * Returns if a given date is Good Friday.
 *
 * As far as I can find, there is no definition of when Good Friday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Good Friday is the Friday before Easter Sunday.
 */
export function isGoodFriday(date: Date): boolean {
	const year = date.getFullYear();

	if (
		year < 1900 ||
		year > 2199
	) {
		throw new RangeError(`Dates for Easter outside the years 1900-2199 have not been defined.`);
	}

	const goodFriday = getGoodFriday(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(goodFriday, dateTuple);
}
