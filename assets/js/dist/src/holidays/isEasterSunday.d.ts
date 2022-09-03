/**
 * Returns if a given date is Easter Sunday.
 *
 * **Warning**: This function's results are only correct for dates from 1900-2199.
 *
 * As far as I can find, there is no definition of when Easter Sunday occurs in New Zealand law.
 *
 * If it isn't defined, common law fills the gap, and it would likely be interpreted based on "ordinary usage".
 *
 * Using the Gregorian calendar, which aligns with common practice in New Zealand, Easter Sunday is calculated as falling on the Sunday following the "Paschal Full Moon".
 *
 * The method of calculating this date used here was taken from [Easter Dating Method - Astronomical Society of South Australia](https://web.archive.org/web/20220902043829/https://www.assa.org.au/edm)
 */
export declare function isEasterSunday(date: Date): boolean;
