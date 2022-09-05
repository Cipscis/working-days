import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { getEasterSunday } from './easterSunday.js';

/**
 * A cache of Easter Monday dates for quick retrieval.
 */
const easterMondays = new Map<number, DateTuple>();

/**
 * Returns Easter Monday for a given year.
 *
 * As far as I can find, there is no definition of when Easter Monday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Easter Monday is the Monday after Easter Sunday.
 */
export function getEasterMonday(year: number): DateTuple {
	if (
		year < 1900 ||
		year > 2199
	) {
		throw new RangeError(`Dates for Easter outside the years 1900-2199 have not been defined.`);
	}

	const cachedEaster = easterMondays.get(year);
	if (cachedEaster) {
		return cachedEaster;
	}

	const easterSunday = getEasterSunday(year);
	const easterMonday: DateTuple = [
		easterSunday[0],
		easterSunday[1],
		easterSunday[2] + 1,
	];

	// Easter Sunday is always in late March or early April. If it's on March 31, we need to tick over to April.
	if (easterMonday[2] === 32) {
		easterMonday[1] += 1;
		easterMonday[2] = 1;
	}

	// Cache determined Easter date for later quick retrieval
	easterMondays.set(year, easterMonday);

	return easterMonday;
}

/**
 * Returns if a given date is Easter Monday.
 *
 * As far as I can find, there is no definition of when Easter Monday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Easter Monday is the Monday after Easter Sunday.
 */
export function isEasterMonday(date: Date): boolean {
	const year = date.getFullYear();

	if (
		year < 1900 ||
		year > 2199
	) {
		throw new RangeError(`Dates for Easter outside the years 1900-2199 have not been defined.`);
	}

	const easterMonday = getEasterMonday(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(easterMonday, dateTuple);
}
