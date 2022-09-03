import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

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
	const year = date.getFullYear();
	const month = date.getMonth();

	if (year < 1952) {
		throw new RangeError(`The Sovereign's Birthday prior to the year 1952 is not defined.`);
	}

	if (year === 1952) {
		// [Sovereign's Birthday Observance Act 1952 section 2(a)](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
		// > in respect of the year 1952, [the Sovereign's birthday shall] be deemed to be... 2 June
		if (
			month === Month.JUNE &&
			date.getDate() === 2
		) {
			return true;
		} else {
			return false;
		}
	}

	if (year === 1953) {
		// [Sovereign's Birthday Observance Act 1952 section 2(b)](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
		// > in respect of the year 1953, [the Sovereign's birthday shall] be deemed to be... a day to be appointed in that behalf by the Governor-General by Proclamation

		// I haven't been able to find this proclamation, nor any information about when the Sovereign's Birthday was observed in 1953.

		throw new RangeError(`The date of the Sovereign's Birthday in 1953 is unknown.`);
	}

	if (month === Month.JUNE) {
		const dayOfMonth = date.getDate();
		const dayOfWeek = date.getDay();

		// [Sovereign's Birthday Observance Act 1952 section 2(c)](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
		// > in respect of every year of the reign of Her Majesty Queen Elizabeth the Second after the year 1953, [the Sovereign's birthday shall] be deemed to be... the first Monday in June.
		if (
			dayOfWeek === DayOfWeek.MONDAY &&
			dayOfMonth <= 7
		) {
			return true;
		}
	}

	return false;
}
