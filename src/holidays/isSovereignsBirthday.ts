import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

/**
 * Returns if a given date is the sovereign's birthday.
 *
 * Definition taken from [Sovereign's Birthday Observance Act 1952 section 2](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
 *
 * **Warning**: This function will no longer return a correct result once Queen Elizabeth the Second is no longer the Queen of New Zealand.
 */
export function isSovereignsBirthday(date: Date): boolean {
	const month = date.getMonth();
	if (month === Month.JUNE) {
		const dayOfMonth = date.getDate();
		const dayOfWeek = date.getDay();

		// [Sovereign's Birthday Observance Act 1952 section 2](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
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
