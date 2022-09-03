import { WorkingDayDefinition } from './WorkingDayDefinition.js';
import { workingDaysBetween } from './workingDaysBetween.js';

/**
 * Determines what the date will be after a specified number of working days from a start date, for a given definition of working day.
 *
 * @param {Date} startDate - The `Date` from which to start.
 * @param {number} numWorkingDays - The number of working days to count after the starting date.
 * @param {WorkingDayDefinition} [definition=WorkingDayDefinition.OIA] - The definition of **working day** to use in the determination. If this argument is ommitted, the definition used by the Official Information Act 1982 will be used.
 */
export function addWorkingDays(startDate: Date, numWorkingDays: number, definition: WorkingDayDefinition = WorkingDayDefinition.OIA): Date {
	numWorkingDays = Math.floor(numWorkingDays);

	// Strip down to date portion only
	startDate = new Date(
		startDate.getFullYear(),
		startDate.getMonth(),
		startDate.getDate(),
	);

	const endDate = new Date(startDate);
	endDate.setDate(endDate.getDate() + numWorkingDays);
	let workingDaysRemaining = Math.abs(numWorkingDays) - workingDaysBetween(startDate, endDate, definition);

	if (numWorkingDays > 0) {
		while (workingDaysBetween(startDate, endDate, definition) < numWorkingDays) {
			endDate.setDate(endDate.getDate() + workingDaysRemaining);
			workingDaysRemaining = Math.abs(numWorkingDays) - workingDaysBetween(startDate, endDate, definition);
		}
	} else {
		while (workingDaysBetween(startDate, endDate, definition) < -numWorkingDays) {
			endDate.setDate(endDate.getDate() - workingDaysRemaining);
			workingDaysRemaining = Math.abs(numWorkingDays) - workingDaysBetween(startDate, endDate, definition);
		}
	}

	return endDate;
}
