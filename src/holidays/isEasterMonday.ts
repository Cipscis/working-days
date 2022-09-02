import { DayOfWeek } from '../util/DayOfWeek.js';

import { isEasterSunday } from './isEasterSunday.js';

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
