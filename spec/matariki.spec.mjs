import { isMatariki } from '../dist/holidays/matariki.js';

describe('isMatariki', () => {
	it(`correctly identifies Matariki`, () => {
		/**
		 * Matariki dates specified in legislation
		 */
		const matarikiDates = [
			[2022, 5, 24],
			[2023, 6, 14],
			[2024, 5, 28],
			[2025, 5, 20],
			[2026, 6, 10],
			[2027, 5, 25],
			[2028, 6, 14],
			[2029, 6, 6],
			[2030, 5, 21],
			[2031, 6, 11],
			[2032, 6, 2],
			[2033, 5, 24],
			[2034, 6, 7],
			[2035, 5, 29],
			[2036, 6, 18],
			[2037, 6, 10],
			[2038, 5, 25],
			[2039, 6, 15],
			[2040, 6, 6],
			[2041, 6, 19],
			[2042, 6, 11],
			[2043, 6, 3],
			[2044, 5, 24],
			[2045, 6, 7],
			[2046, 5, 29],
			[2047, 6, 19],
			[2048, 6, 3],
			[2049, 5, 25],
			[2050, 6, 15],
			[2051, 5, 30],
			[2052, 5, 21],
		];

		for (const matarikiParts of matarikiDates) {
			const matariki = new Date(...matarikiParts);
			expect(isMatariki(matariki)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Matariki`, () => {
		/**
		 * Matariki dates looked up manually for each year, then offset arbitrarily.
		 */
		 const notMatarikiDates = [
			[2021, 5, 26],
			[2022, 5, 26],
			[2023, 6, 11],
			[2024, 5, 21],
			[2025, 5, 27],
			[2026, 6, 12],
			[2027, 5, 18],
			[2028, 6, 21],
			[2029, 6, 13],
			[2030, 5, 22],
			[2031, 6, 9],
			[2032, 6, 1],
			[2033, 5, 4],
			[2034, 6, 8],
			[2035, 5, 21],
			[2036, 6, 11],
			[2037, 6, 17],
			[2038, 5, 28],
			[2039, 6, 18],
			[2040, 6, 3],
			[2041, 6, 12],
			[2042, 6, 18],
			[2043, 6, 4],
			[2044, 5, 25],
			[2045, 6, 9],
			[2046, 5, 25],
			[2047, 6, 12],
			[2048, 6, 10],
			[2049, 5, 30],
			[2050, 6, 14],
			[2051, 5, 29],
			[2052, 5, 22],
		];

		for (const matarikiParts of notMatarikiDates) {
			const matariki = new Date(...matarikiParts);
			expect(isMatariki(matariki)).toBe(false);
		}
	});

	it(`throws a RangeError when passed a date after 2052`, () => {
		expect(() => isMatariki(new Date(2053, 5, 2))).toThrowError(RangeError);
		expect(() => isMatariki(new Date(2054, 5, 2))).toThrowError(RangeError);
		expect(() => isMatariki(new Date(2055, 5, 2))).toThrowError(RangeError);
	});
});
