import { Month } from '../util/Month';
import { DayOfWeek } from '../util/DayOfWeek';

/**
 * Returns if a given date is Waitangi Day.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export function isWaitangiDay(date: Date): boolean {
	const month = date.getMonth();
	if (month === Month.FEBRUARY) {
		const dayOfMonth = date.getDate();

		if (dayOfMonth === 6) {
			// [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
			// > 6 February in each year shall be known as Waitangi Day.
			return true;
		}
	}

	return false;
}

/**
 * Returns if a given date is the Monday following Waitangi Day, if Waitangi Day for that year falls on a Saturday or a Sunday.
 */
export function isMondayAfterWaitangiDay(date: Date): boolean {
	const month = date.getMonth();
	if (month === Month.FEBRUARY) {
		const dayOfMonth = date.getDate();
		const dayOfWeek = date.getDay();

		if (
			(dayOfWeek === DayOfWeek.MONDAY) &&
			(dayOfMonth === 7 || dayOfMonth === 8)
		) {
			return true;
		}
	}

	return false;
}
