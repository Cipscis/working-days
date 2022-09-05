import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns Waitangi Day for a given year.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export declare function getWaitangiDay(year: number): DateTuple;
/**
 * Returns if a given date is the Monday following Waitangi Day, if Waitangi Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export declare function getWaitangiDayMondayised(year: number): DateTuple | null;
/**
 * Returns if a given date is Waitangi Day.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export declare function isWaitangiDay(date: Date): boolean;
/**
 * Returns if a date is the Monday following Anzac Day, if Anzac Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export declare function isWaitangiDayMondayised(date: Date): boolean;
