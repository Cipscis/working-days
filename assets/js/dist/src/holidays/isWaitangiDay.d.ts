/**
 * Returns if a given date is Waitangi Day.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export declare function isWaitangiDay(date: Date): boolean;
/**
 * Returns if a given date is the Monday following Waitangi Day, if Waitangi Day for that year falls on a Saturday or a Sunday.
 */
export declare function isMondayAfterWaitangiDay(date: Date): boolean;
