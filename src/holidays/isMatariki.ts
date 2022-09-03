import { Month } from '../util/Month.js';

/**
 * These dates have been transcribed from [Te Kāhui o Matariki Public Holiday Act 2022 Schedule 1](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557893) on 2022-09-02
*/
const MatarikiSchedule: Record<number, [Month, number]> = {
	2022: [Month.JUNE, 24],
	2023: [Month.JULY, 14],
	2024: [Month.JUNE, 28],
	2025: [Month.JUNE, 20],
	2026: [Month.JULY, 10],
	2027: [Month.JUNE, 25],
	2028: [Month.JULY, 14],
	2029: [Month.JULY,  6],
	2030: [Month.JUNE, 21],
	2031: [Month.JULY, 11],
	2032: [Month.JULY,  2],
	2033: [Month.JUNE, 24],
	2034: [Month.JULY,  7],
	2035: [Month.JUNE, 29],
	2036: [Month.JULY, 18],
	2037: [Month.JULY, 10],
	2038: [Month.JUNE, 25],
	2039: [Month.JULY, 15],
	2040: [Month.JULY,  6],
	2041: [Month.JULY, 19],
	2042: [Month.JULY, 11],
	2043: [Month.JULY,  3],
	2044: [Month.JUNE, 24],
	2045: [Month.JULY,  7],
	2046: [Month.JUNE, 29],
	2047: [Month.JULY, 19],
	2048: [Month.JULY,  3],
	2049: [Month.JUNE, 25],
	2050: [Month.JULY, 15],
	2051: [Month.JUNE, 30],
	2052: [Month.JUNE, 21],
};

/**
 * Returns if a given date is Matariki.
 *
 * Definition taken from [Te Kāhui o Matariki Public Holiday Act 2022 section 5](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557846)
 *
 * @throws {RangeError} At the time of writing, dates for Matariki following 2052 have not been defined. This function will throw a `RangeError` for years after 2052.
 */
export function isMatariki(date: Date): boolean {
	// [Te Kāhui o Matariki Public Holiday Act 2022 section 5](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557846)
	// > a public holiday is to be observed on each date specified in [Schedule 1](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557893)

	const year = date.getFullYear();
	const month = date.getMonth();
	const dayOfMonth = date.getDate();

	const firstYear = 2022;

	if (year < firstYear) {
		return false;
	} else if (MatarikiSchedule[year]) {
		const [matarikiMonth, matarikiDate] = MatarikiSchedule[year];

		if (
			matarikiMonth === month &&
			matarikiDate === dayOfMonth
		) {
			return true;
		}
	} else {
		// [Te Kāhui o Matariki Public Holiday Act 2022 section 6](https://www.legislation.govt.nz/act/public/2022/0014/latest/whole.html#LMS557847)
		// > The Governor-General may, by Order in Council made on the recommendation of the Minister, make regulations adding to Schedule 1 a date in a year on which the public holiday will be observed to acknowledge Matariki in that year.
		throw new RangeError(`The date for Matariki in the year ${year} is unknown`);
	}

	return false;
}
