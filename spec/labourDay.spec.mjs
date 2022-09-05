import { isLabourDay } from '../dist/holidays/labourDay.js';

describe('isLabourDay', () => {
	it(`correctly identifies Labour Day`, () => {
		/**
		 * Labour Day dates looked up manually for each year.
		 */
		const labourDayDates = [
			[2022, 9, 24],
			[2023, 9, 23],
			[2024, 9, 28],
			[2025, 9, 27],
			[2026, 9, 26],
			[2027, 9, 25],
			[2028, 9, 23],
			[2029, 9, 22],
			[2030, 9, 28],
			[2031, 9, 27],
			[2032, 9, 25],
			[2033, 9, 24],
			[2034, 9, 23],
			[2035, 9, 22],
			[2036, 9, 27],
			[2037, 9, 26],
			[2038, 9, 25],
			[2039, 9, 24],
			[2040, 9, 22],
			[2041, 9, 28],
			[2042, 9, 27],
		];

		for (const labourDayParts of labourDayDates) {
			const labourDay = new Date(...labourDayParts);
			expect(isLabourDay(labourDay)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Labour Day`, () => {
		/**
		 * Labour Day dates looked up manually for each year, then offset arbitrarily.
		 */
		 const notLabourDayDates = [
			[2022, 9, 17],
			[2023, 9, 30],
			[2024, 9, 29],
			[2025, 9, 25],
			[2026, 9, 24],
			[2027, 9, 30],
			[2028, 9, 22],
			[2029, 9, 17],
			[2030, 9, 29],
			[2031, 8, 27],
			[2032, 10, 22],
			[2033, 9, 23],
			[2034, 9, 31],
			[2035, 9, 15],
			[2036, 9, 19],
			[2037, 9, 27],
			[2038, 9, 27],
			[2039, 9, 27],
			[2040, 9, 20],
			[2041, 9, 21],
			[2042, 9, 23],
		];

		for (const labourDayParts of notLabourDayDates) {
			const labourDay = new Date(...labourDayParts);
			expect(isLabourDay(labourDay)).toBe(false);
		}
	});
});
