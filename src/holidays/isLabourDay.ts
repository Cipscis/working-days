import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

/**
 * Returns if a given date is Labour Day.
 *
 * Definition taken from [Holidays Act 2003 section 44(1)(j)](https://www.legislation.govt.nz/act/public/2003/0129/latest/whole.html#DLM237120)
 */
export function isLabourDay(date: Date): boolean {
	const month = date.getMonth();
	if (month === Month.OCTOBER) {
		const dayOfMonth = date.getDate();
		const dayOfWeek = date.getDay();

		if (
			dayOfWeek === DayOfWeek.MONDAY &&
			dayOfMonth >= 22 &&
			dayOfMonth < 29
		) {
			// [Holidays Act 2003 section 44(1)(j)](https://www.legislation.govt.nz/act/public/2003/0129/latest/whole.html#DLM237120)
			// > Labour Day (being the fourth Monday in October)
			return true;
		}
	}

	return false;
}
