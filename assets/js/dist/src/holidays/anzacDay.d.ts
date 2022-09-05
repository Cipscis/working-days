import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns Anzac Day for a given year.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export declare function getAnzacDay(year: number): DateTuple;
/**
 * Returns the Monday following Anzac Day for a given year, if Anzac Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export declare function getAnzacDayMondayised(year: number): DateTuple | null;
/**
 * Returns if a given date is Anzac Day.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export declare function isAnzacDay(date: Date): boolean;
/**
 * Returns if a date is the Monday following Anzac Day, if Anzac Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export declare function isAnzacDayMondayised(date: Date): boolean;
