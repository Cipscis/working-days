import { Month } from '../util/Month.js';

import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * These dates have been transcribed from [Te Kāhui o Matariki Public Holiday Act 2022 Schedule 1](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557893) on 2022-09-02
*/
const matarikiDates = new Map<number, DateTuple>([
	[2022, [2022, Month.JUNE, 24]],
	[2023, [2023, Month.JULY, 14]],
	[2024, [2024, Month.JUNE, 28]],
	[2025, [2025, Month.JUNE, 20]],
	[2026, [2026, Month.JULY, 10]],
	[2027, [2027, Month.JUNE, 25]],
	[2028, [2028, Month.JULY, 14]],
	[2029, [2029, Month.JULY,  6]],
	[2030, [2030, Month.JUNE, 21]],
	[2031, [2031, Month.JULY, 11]],
	[2032, [2032, Month.JULY,  2]],
	[2033, [2033, Month.JUNE, 24]],
	[2034, [2034, Month.JULY,  7]],
	[2035, [2035, Month.JUNE, 29]],
	[2036, [2036, Month.JULY, 18]],
	[2037, [2037, Month.JULY, 10]],
	[2038, [2038, Month.JUNE, 25]],
	[2039, [2039, Month.JULY, 15]],
	[2040, [2040, Month.JULY,  6]],
	[2041, [2041, Month.JULY, 19]],
	[2042, [2042, Month.JULY, 11]],
	[2043, [2043, Month.JULY,  3]],
	[2044, [2044, Month.JUNE, 24]],
	[2045, [2045, Month.JULY,  7]],
	[2046, [2046, Month.JUNE, 29]],
	[2047, [2047, Month.JULY, 19]],
	[2048, [2048, Month.JULY,  3]],
	[2049, [2049, Month.JUNE, 25]],
	[2050, [2050, Month.JULY, 15]],
	[2051, [2051, Month.JUNE, 30]],
	[2052, [2052, Month.JUNE, 21]],
]);

const years = matarikiDates.keys();
const lastYear = Math.max(...years);

/**
 * Returns the date of Matariki for a given year.
 *
 * Definition taken from [Te Kāhui o Matariki Public Holiday Act 2022 section 5](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557846)
 *
 * @throws {RangeError} At the time of writing, dates for Matariki following 2052 have not been defined. This function will throw a `RangeError` for years after 2052.
 */
export function getMatariki(year: number): DateTuple | null {
	if (year > lastYear) {
		// [Te Kāhui o Matariki Public Holiday Act 2022 section 6](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557847)
		// > The Governor-General may, by Order in Council made on the recommendation of the Minister, make regulations adding to Schedule 1 a date in a year on which the public holiday will be observed to acknowledge Matariki in that year.
		throw new RangeError(`The date for Matariki in the year ${year} is unknown`);
	}

	// [Te Kāhui o Matariki Public Holiday Act 2022 section 5](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557846)
	// > a public holiday is to be observed on each date specified in [Schedule 1](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557893)
	const matariki = matarikiDates.get(year) ?? null;
	return matariki;
}

/**
 * Returns if a given date is Matariki.
 *
 * Definition taken from [Te Kāhui o Matariki Public Holiday Act 2022 section 5](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557846)
 *
 * @throws {RangeError} At the time of writing, dates for Matariki following 2052 have not been defined. This function will throw a `RangeError` for years after 2052.
 */
export function isMatariki(date: Date): boolean {
	const matariki = getMatariki(date.getFullYear());

	if (!matariki) {
		return false;
	}

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(matariki, dateTuple);
}
