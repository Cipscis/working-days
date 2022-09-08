import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns the sovereign's birthday for a given year.
 *
 * Definition taken from [Sovereign's Birthday Observance Act 1952 section 2](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
 *
 * **Warning**: This function will no longer return a correct result once Queen Elizabeth the Second is no longer the Queen of New Zealand.
 *
 * @throws {RangeError} This function only defines the Sovereign's Birthday for 1952 and for years after 1953. A `RangeError` will be thrown if dates on non-supported years are used.
 */
export declare function getSovereignsBirthday(year: number): DateTuple | null;
/**
 * Returns if a given date is the sovereign's birthday.
 *
 * Definition taken from [Sovereign's Birthday Observance Act 1952 section 2](https://www.legislation.govt.nz/act/public/1952/0013/latest/whole.html#DLM265809)
 *
 * **Warning**: This function will no longer return a correct result once Queen Elizabeth the Second is no longer the Queen of New Zealand.
 *
 * @throws {RangeError} This function only defines the Sovereign's Birthday for 1952 and for years after 1953. A `RangeError` will be thrown if dates on non-supported years are used.
 */
export declare function isSovereignsBirthday(date: Date): boolean;
