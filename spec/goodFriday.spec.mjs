import { isGoodFriday } from '../dist/holidays/goodFriday.js';

describe('isGoodFriday', () => {
	it(`correctly identifies Good Friday`, () => {
		/**
		 * Easter dates looked up manually for each year. There are more than 19 tests, so more than a complete Metonic cycle is tested.
		 */
		const easterDates = [
			[2022, 3, 15],
			[2023, 3, 7],
			[2024, 2, 29],
			[2025, 3, 18],
			[2026, 3, 3],
			[2027, 2, 26],
			[2028, 3, 14],
			[2029, 2, 30],
			[2030, 3, 19],
			[2031, 3, 11],
			[2032, 2, 26],
			[2033, 3, 15],
			[2034, 3, 7],
			[2035, 2, 23],
			[2036, 3, 11],
			[2037, 3, 3],
			[2038, 3, 23],
			[2039, 3, 8],
			[2040, 2, 30],
			[2041, 3, 19],
			[2042, 3, 4],
		];

		for (const easterParts of easterDates) {
			const easter = new Date(...easterParts);
			expect(isGoodFriday(easter)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Good Friday`, () => {
		/**
		 * Easter dates looked up manually for each year, then offset arbitrarily by a few days. There are more than 19 tests, so more than a complete Metonic cycle is tested.
		 */
		 const notEasterDates = [
			[2022, 3, 16],
			[2023, 3, 9],
			[2024, 2, 24],
			[2025, 3, 20],
			[2026, 2, 31],
			[2027, 2, 25],
			[2028, 3, 15],
			[2029, 2, 24],
			[2030, 3, 20],
			[2031, 3, 8],
			[2032, 2, 28],
			[2033, 3, 16],
			[2034, 3, 8],
			[2035, 2, 21],
			[2036, 3, 9],
			[2037, 3, 1],
			[2038, 3, 20],
			[2039, 3, 11],
			[2040, 3, 3],
			[2041, 3, 18],
			[2042, 3, 3],
		];

		for (const easterParts of notEasterDates) {
			const easter = new Date(...easterParts);
			expect(isGoodFriday(easter)).toBe(false);
		}

		// Check a second time to verify that cache retrieval method works
		for (const easterParts of notEasterDates) {
			const easter = new Date(...easterParts);
			expect(isGoodFriday(easter)).toBe(false);
		}
	});
});
