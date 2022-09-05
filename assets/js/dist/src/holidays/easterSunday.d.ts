import { DateTuple } from '../util/DateTuple.js';
/**
 * Returns Easter Sunday for a given year.
 *
 * As far as I can find, there is no definition of when Easter Sunday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Using the Gregorian calendar, which aligns with common practice in New Zealand, Easter Sunday is calculated as falling on the Sunday following the "Paschal Full Moon".
 *
 * The method of calculating this date used here was taken from [Easter Dating Method - Astronomical Society of South Australia](https://web.archive.org/web/20220902043829/https://www.assa.org.au/edm)
 *
 * @throws {RangeError} This function can only calculate Easter for dates from 1900-2199.
 */
export declare function getEasterSunday(year: number): DateTuple;
/**
 * Returns if a given date is Easter Sunday.
 *
 * As far as I can find, there is no definition of when Easter Sunday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Using the Gregorian calendar, which aligns with common practice in New Zealand, Easter Sunday is calculated as falling on the Sunday following the "Paschal Full Moon".
 *
 * The method of calculating this date used here was taken from [Easter Dating Method - Astronomical Society of South Australia](https://web.archive.org/web/20220902043829/https://www.assa.org.au/edm)
 *
 * @throws {RangeError} This function can only calculate Easter for dates from 1900-2199.
 */
export declare function isEasterSunday(date: Date): boolean;
