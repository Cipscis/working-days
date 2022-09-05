import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns the date of Matariki for a given year.
 *
 * Definition taken from [Te Kāhui o Matariki Public Holiday Act 2022 section 5](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557846)
 *
 * @throws {RangeError} At the time of writing, dates for Matariki following 2052 have not been defined. This function will throw a `RangeError` for years after 2052.
 */
export declare function getMatariki(year: number): DateTuple | null;
/**
 * Returns if a given date is Matariki.
 *
 * Definition taken from [Te Kāhui o Matariki Public Holiday Act 2022 section 5](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557846)
 *
 * @throws {RangeError} At the time of writing, dates for Matariki following 2052 have not been defined. This function will throw a `RangeError` for years after 2052.
 */
export declare function isMatariki(date: Date): boolean;
