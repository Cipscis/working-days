import { WorkingDayDefinition } from './WorkingDayDefinition.js';
/**
 * Counts the number of working days between two dates, for a given definition.
 *
 * @param {Date} startDate - The first `Date` in a range to count working days between.
 * @param {Date} endDate - The last `Date` in a range to count working days between.
 * @param {WorkingDayDefinition} [definition=WorkingDayDefinition.OIA] - The definition of **working day** to use in the determination. If this argument is ommitted, the definition used by the Official Information Act 1982 will be used.
 */
export declare function workingDaysBetween(startDate: Date, endDate: Date, definition?: WorkingDayDefinition): number;
