import { DayOfWeek } from '../util/DayOfWeek';

import { isEasterSunday } from './isEasterSunday';

/**
 * Returns if a given date is Easter Monday.
 */
export function isEasterMonday(date: Date): boolean {
	// TODO: Citation needed
	// Easter Monday is the Monday after Easter Sunday

	const dayOfWeek = date.getDay();
	if (dayOfWeek === DayOfWeek.MONDAY) {
		const lastSunday = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate() - 1
		);

		if (isEasterSunday(lastSunday)) {
			return true;
		}
	}

	return false;
}
