import { WorkingDayDefinition } from './WorkingDayDefinition.js';
import { isWorkingDay } from './isWorkingDay.js';

/**
 * Counts the number of working days between two dates, for a given definition.
 *
 * @param {Date} startDate - The first `Date` in a range to count working days between.
 * @param {Date} endDate - The last `Date` in a range to count working days between.
 * @param {WorkingDayDefinition} [definition=WorkingDayDefinition.OIA] - The definition of **working day** to use in the determination. If this argument is ommitted, the definition used by the Official Information Act 1982 will be used.
 */
export function workingDaysBetween(startDate: Date, endDate: Date, definition: WorkingDayDefinition = WorkingDayDefinition.OIA): number {
	// TODO: Update to allow LGOIMA definition
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
