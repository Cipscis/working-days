import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * A cache of sovereign's birthday dates for quick retrieval.
 */
const sovereignsBirthdays = new Map<number, DateTuple>();

/**
 * Returns the sovereign's birthday for a given year.
 *
 * Definition taken from [Sovereign's Birthday Observance Act 1952 section 2](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
 *
 * **Warning**: This function will no longer return a correct result once Queen Elizabeth the Second is no longer the Queen of New Zealand.
 *
 * @throws {RangeError} This function only defines the Sovereign's Birthday for 1952 and for years after 1953. A `RangeError` will be thrown if dates on non-supported years are used.
 */
export function getSovereignsBirthday(year: number): DateTuple {
	const cachedSovereignsBirthday = sovereignsBirthdays.get(year);
	if (cachedSovereignsBirthday) {
		return cachedSovereignsBirthday;
	}

	if (year < 1952) {
		throw new RangeError(`The Sovereign's Birthday prior to the year 1952 is not defined.`);
	}

	if (year === 1952) {
		// [Sovereign's Birthday Observance Act 1952 section 2(a)](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
		// > in respect of the year 1952, [the Sovereign's birthday shall] be deemed to be... 2 June
		return [year, Month.JUNE, 2];
	}

	if (year === 1953) {
		// [Sovereign's Birthday Observance Act 1952 section 2(b)](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
		// > in respect of the year 1953, [the Sovereign's birthday shall] be deemed to be... a day to be appointed in that behalf by the Governor-General by Proclamation

		// I haven't been able to find this proclamation, nor any information about when the Sovereign's Birthday was observed in 1953.

		throw new RangeError(`The date of the Sovereign's Birthday in 1953 is unknown.`);
	}

	const sovereignsBirthday = new Date(year, Month.JUNE, 1);

	const dayOfWeek = sovereignsBirthday.getDay();
	if (dayOfWeek !== DayOfWeek.MONDAY) {
		const daysUntilMonday = (DayOfWeek.MONDAY + 7 - dayOfWeek) % 7;
		sovereignsBirthday.setDate(sovereignsBirthday.getDate() + daysUntilMonday);
	}

	const sovereignsBirthdayTuple = makeDateTuple(sovereignsBirthday);

	// Cache determined sovereign's birthday date for later quick retrieval
	sovereignsBirthdays.set(year, sovereignsBirthdayTuple);
	return sovereignsBirthdayTuple;
}

/**
 * Returns if a given date is the sovereign's birthday.
 *
 * Definition taken from [Sovereign's Birthday Observance Act 1952 section 2](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
 *
 * **Warning**: This function will no longer return a correct result once Queen Elizabeth the Second is no longer the Queen of New Zealand.
 *
 * @throws {RangeError} This function only defines the Sovereign's Birthday for 1952 and for years after 1953. A `RangeError` will be thrown if dates on non-supported years are used.
 */
export function isSovereignsBirthday(date: Date): boolean {
	const sovereignsBirthday = getSovereignsBirthday(date.getFullYear());

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(sovereignsBirthday, dateTuple);
}
