import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns Good Friday for a given year.
 *
 * As far as I can find, there is no definition of when Good Friday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Good Friday is the Friday before Easter Sunday.
 */
export declare function getGoodFriday(year: number): DateTuple;
/**
 * Returns if a given date is Good Friday.
 *
 * As far as I can find, there is no definition of when Good Friday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Good Friday is the Friday before Easter Sunday.
 */
export declare function isGoodFriday(date: Date): boolean;
