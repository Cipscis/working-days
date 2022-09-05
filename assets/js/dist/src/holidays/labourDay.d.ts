import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns Labour Day for a given year.
 *
 * Definition taken from [Holidays Act 2003 section 44(1)(j)](https://www.legislation.govt.nz/act/public/2003/0129/latest/whole.html#DLM237120)
 */
export declare function getLabourDay(year: number): DateTuple;
/**
 * Returns if a given date is Labour Day.
 *
 * Definition taken from [Holidays Act 2003 section 44(1)(j)](https://www.legislation.govt.nz/act/public/2003/0129/latest/whole.html#DLM237120)
 */
export declare function isLabourDay(date: Date): boolean;
