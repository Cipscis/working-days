import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns Easter Monday for a given year.
 *
 * As far as I can find, there is no definition of when Easter Monday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Easter Monday is the Monday after Easter Sunday.
 */
export declare function getEasterMonday(year: number): DateTuple;
/**
 * Returns if a given date is Easter Monday.
 *
 * As far as I can find, there is no definition of when Easter Monday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Easter Monday is the Monday after Easter Sunday.
 */
export declare function isEasterMonday(date: Date): boolean;
