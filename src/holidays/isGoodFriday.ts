import { DayOfWeek } from '../util/DayOfWeek.js';

import { isEasterSunday } from './isEasterSunday.js';

/**
 * Returns if a given date is Good Friday.
 *
 * As far as I can find, there is no definition of when Good Friday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Good Friday is the Friday before Easter Sunday.
 */
export function isGoodFriday(date: Date): boolean {
	const dayOfWeek = date.getDay();
	if (dayOfWeek === DayOfWeek.FRIDAY) {
		const nextSunday = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate() + 2,
		);

		if (isEasterSunday(nextSunday)) {
			return true;
		}
	}

	return false;
}
