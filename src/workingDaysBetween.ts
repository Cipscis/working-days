import { WorkingDayDefinition } from './WorkingDayDefinition.js';
import { isWorkingDay } from './isWorkingDay.js';

export function workingDaysBetween(startDate: Date, endDate: Date, definition: WorkingDayDefinition = WorkingDayDefinition.OIA): number {
	if (startDate > endDate) {
		[startDate, endDate] = [endDate, startDate];
	}

	// Strip down to date portion only
	startDate = new Date(
		startDate.getFullYear(),
		startDate.getMonth(),
		startDate.getDate(),
	);

	// Strip down to date portion only
	endDate = new Date(
		endDate.getFullYear(),
		endDate.getMonth(),
		endDate.getDate(),
	);

	let numWorkingDays = 0;

	const cursor = new Date(startDate);
	while (cursor < endDate) {
		cursor.setDate(cursor.getDate() + 1);

		// Count a new working day when it starts, not when one ends
		if (isWorkingDay(cursor, definition)) {
			numWorkingDays += 1;
		}
	}

	return numWorkingDays;
}
