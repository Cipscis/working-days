import { DayOfWeek } from '../util/DayOfWeek';

/**
 * Returns if a given date is a Saturday or a Sunday.
 */
export function isWeekend(date: Date): boolean {
	const dayOfWeek = date.getDay();

	if (
		dayOfWeek === DayOfWeek.SATURDAY ||
		dayOfWeek === DayOfWeek.SUNDAY
	) {
		return true;
	}

	return false;
}
