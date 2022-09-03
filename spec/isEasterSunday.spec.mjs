import { isEasterSunday } from '../dist/holidays/isEasterSunday.js';

describe('isEasterSunday', () => {
	it(`correctly identifies Easter Sunday`, () => {
		/**
		 * Easter dates looked up manually for each year. There are more than 19 tests, so more than a complete Metonic cycle is tested.
		 */
		const easterDates = [
			[2022, 3, 17],
			[2023, 3, 9],
			[2024, 2, 31],
			[2025, 3, 20],
			[2026, 3, 5],
			[2027, 2, 28],
			[2028, 3, 16],
			[2029, 3, 1],
			[2030, 3, 21],
			[2031, 3, 13],
			[2032, 2, 28],
			[2033, 3, 17],
			[2034, 3, 9],
			[2035, 2, 25],
			[2036, 3, 13],
			[2037, 3, 5],
			[2038, 3, 25],
			[2039, 3, 10],
			[2040, 3, 1],
			[2041, 3, 21],
			[2042, 3, 6],
		];

		for (const easterParts of easterDates) {
			const easter = new Date(...easterParts);
			expect(isEasterSunday(easter)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Easter Sunday`, () => {
		/**
		 * Easter dates looked up manually for each year, then offset arbitrarily by a few days. There are more than 19 tests, so more than a complete Metonic cycle is tested.
		 */
		 const notEasterDates = [
			[2022, 3, 18],
			[2023, 3, 11],
			[2024, 2, 26],
			[2025, 3, 22],
			[2026, 3, 2],
			[2027, 2, 27],
			[2028, 3, 17],
			[2029, 2, 26],
			[2030, 3, 22],
			[2031, 3, 10],
			[2032, 2, 30],
			[2033, 3, 18],
			[2034, 3, 10],
			[2035, 2, 23],
			[2036, 3, 11],
			[2037, 3, 3],
			[2038, 3, 22],
			[2039, 3, 13],
			[2040, 3, 5],
			[2041, 3, 20],
			[2042, 3, 5],
		];

		for (const easterParts of notEasterDates) {
			const easter = new Date(...easterParts);
			expect(isEasterSunday(easter)).toBe(false);
		}
	});
});
