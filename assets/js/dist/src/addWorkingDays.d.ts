import { WorkingDayDefinition } from './WorkingDayDefinition.js';
/**
 * Determines what the date will be after a specified number of working days from a start date, for a given definition of working day.
 *
 * @param {Date} startDate - The `Date` from which to start.
 * @param {number} numWorkingDays - The number of working days to count after the starting date.
 * @param {WorkingDayDefinition} [definition=WorkingDayDefinition.OIA] - The definition of **working day** to use in the determination. If this argument is ommitted, the definition used by the Official Information Act 1982 will be used.
 */
export declare function addWorkingDays(startDate: Date, numWorkingDays: number, definition?: WorkingDayDefinition): Date;
