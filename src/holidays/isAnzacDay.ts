import { Month } from '../util/Month';
import { DayOfWeek } from '../util/DayOfWeek';

/**
 * Returns if a given date is Anzac Day.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export function isAnzacDay(date: Date): boolean {
	const month = date.getMonth();
	if (month === Month.APRIL) {
		const dayOfMonth = date.getDate();

		if (dayOfMonth === 25) {
			// [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
			// > 25 April in each year... shall be known as Anzac Day.
			return true;
		}
	}

	return false;
}

/**
 * Returns if a date is the Monday following Anzac Day, if Anzac Day for that year falls on a Saturday or a Sunday.
 */
export function isMondayAfterAnzacDay(date: Date): boolean {
	const month = date.getMonth();
	if (month === Month.APRIL) {
		const dayOfMonth = date.getDate();
		const dayOfWeek = date.getDay();

		if (
			(dayOfWeek === DayOfWeek.MONDAY) &&
			(dayOfMonth === 26 || dayOfMonth === 27)
		) {
			return true;
		}
	}

	return false;
}
