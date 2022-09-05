import { isEasterMonday } from '../dist/holidays/easterMonday.js';

describe('isEasterMonday', () => {
	it(`correctly identifies Easter Monday`, () => {
		/**
		 * Easter dates looked up manually for each year. There are more than 19 tests, so more than a complete Metonic cycle is tested.
		 */
		const easterDates = [
			[2022, 3, 18],
			[2023, 3, 10],
			[2024, 3, 1],
			[2025, 3, 21],
			[2026, 3, 6],
			[2027, 2, 29],
			[2028, 3, 17],
			[2029, 3, 2],
			[2030, 3, 22],
			[2031, 3, 14],
			[2032, 2, 29],
			[2033, 3, 18],
			[2034, 3, 10],
			[2035, 2, 26],
			[2036, 3, 14],
			[2037, 3, 6],
			[2038, 3, 26],
			[2039, 3, 11],
			[2040, 3, 2],
			[2041, 3, 22],
			[2042, 3, 7],
		];

		for (const easterParts of easterDates) {
			const easter = new Date(...easterParts);
			expect(isEasterMonday(easter)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Easter Monday`, () => {
		/**
		 * Easter dates looked up manually for each year, then offset arbitrarily by a few days. There are more than 19 tests, so more than a complete Metonic cycle is tested.
		 */
		 const notEasterDates = [
			[2022, 3, 19],
			[2023, 3, 12],
			[2024, 2, 27],
			[2025, 3, 23],
			[2026, 3, 3],
			[2027, 2, 28],
			[2028, 3, 18],
			[2029, 2, 27],
			[2030, 3, 23],
			[2031, 3, 11],
			[2032, 2, 31],
			[2033, 3, 19],
			[2034, 3, 11],
			[2035, 2, 24],
			[2036, 3, 12],
			[2037, 3, 4],
			[2038, 3, 23],
			[2039, 3, 14],
			[2040, 3, 6],
			[2041, 3, 21],
			[2042, 3, 6],
		];

		for (const easterParts of notEasterDates) {
			const easter = new Date(...easterParts);
			expect(isEasterMonday(easter)).toBe(false);
		}

		// Check a second time to verify that cache retrieval method works
		for (const easterParts of notEasterDates) {
			const easter = new Date(...easterParts);
			expect(isEasterMonday(easter)).toBe(false);
		}
	});
});
