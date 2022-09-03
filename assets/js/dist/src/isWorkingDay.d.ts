import { WorkingDayDefinition } from './WorkingDayDefinition.js';
/**
 * Determines whether or not a given date qualifies as a working day, for a given definition.
 *
 * @param {Date} date - A `Date` that may or may not be a working day. Only the year, month, and day portion of the `Date` will be used.
 * @param {WorkingDayDefinition} [definition=WorkingDayDefinition.OIA] - The definition of **working day** to use in the determination. If this argument is ommitted, the definition used by the Official Information Act 1982 will be used.
 */
export declare function isWorkingDay(date: Date, definition?: WorkingDayDefinition): boolean;
