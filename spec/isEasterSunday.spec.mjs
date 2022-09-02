import { isEasterSunday } from '../dist/holidays/isEasterSunday.js';

describe('isEasterSunday', () => {
	it('correctly identifies only Easter Sunday', () => {
		/**
		 * Easter dates looked up manually for each year. There are 19 tests to align with the length of the Metonic cycle.
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
		];

		for (const easterParts of easterDates) {
			const easter = new Date(...easterParts);
			expect(isEasterSunday(easter)).toBe(true);
		}
	});
});
