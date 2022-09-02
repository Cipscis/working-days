import { DayOfWeek } from '../util/DayOfWeek';

import { isEasterSunday } from './isEasterSunday';

/**
 * Returns if a given date is Good Friday.
 */
export function isGoodFriday(date: Date): boolean {
	// TODO: Citation needed
	// Good Friday is the Friday before Easter Sunday

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
