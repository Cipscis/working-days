import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

/**
 * A table of "Paschal Full Moon" dates for years 1900-2199, indexed by `year % 19`
 *
 * Source: [Easter Dating Method - Astronomical Society of South Australia](https://web.archive.org/web/20220902043829/https://www.assa.org.au/edm)
 */
const PaschalFullMoonDates: Record<number, [Month, number]> = {
	0: [Month.APRIL, 14],
	1: [Month.APRIL, 3],
	2: [Month.MARCH, 23],
	3: [Month.APRIL, 11],
	4: [Month.MARCH, 31],
	5: [Month.APRIL, 18],
	6: [Month.APRIL, 8],
	7: [Month.MARCH, 28],
	8: [Month.APRIL, 16],
	9: [Month.APRIL, 5],
	10: [Month.MARCH, 25],
	11: [Month.APRIL, 13],
	12: [Month.APRIL, 2],
	13: [Month.MARCH, 22],
	14: [Month.APRIL, 10],
	15: [Month.MARCH, 30],
	16: [Month.APRIL, 17],
	17: [Month.APRIL, 7],
	18: [Month.MARCH, 27],
};

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
export function isEasterSunday(date: Date): boolean {
	const year = date.getFullYear();

	if (
		year < 1900 ||
		year > 2199
	) {
		throw new RangeError(`Dates for Easter outside the years 1900-2199 have not been defined.`);
	}

	const month = date.getMonth();

	// Easter Sunday is always in March or April
	if (
		month !== Month.MARCH &&
		month !== Month.APRIL
	) {
		return false;
	}

	const dayOfMonth = date.getDate();

	const yearMod = year % 19;
	const pfm = PaschalFullMoonDates[yearMod];

	const pfmDate = new Date(year, pfm[0], pfm[1]);

	const pfmDayOfWeek = pfmDate.getDay();

	// Easter is the next Sunday after the "Paschal Full Moon"
	const daysSinceLastSunday = DayOfWeek.SUNDAY - pfmDayOfWeek;
	const daysUntilNextSunday = daysSinceLastSunday + 7;

	const easterDate = new Date(pfmDate);
	easterDate.setDate(easterDate.getDate() + daysUntilNextSunday);

	const isEaster = month === easterDate.getMonth() && dayOfMonth === easterDate.getDate();

	return isEaster;
}
