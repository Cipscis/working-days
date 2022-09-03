import { isSovereignsBirthday } from '../dist/holidays/isSovereignsBirthday.js';

describe('isSovereignsBirthday', () => {
	it(`correctly identifies the Sovereign's Birthday`, () => {
		/**
		 * The Sovereign's Birthday dates looked up manually for each year.
		 */
		const sovereignsBirthdayDates = [
			[1952, 5, 2],
			[2022, 5, 6],
			[2023, 5, 5],
			[2024, 5, 3],
			[2025, 5, 2],
			[2026, 5, 1],
			[2027, 5, 7],
			[2028, 5, 5],
			[2029, 5, 4],
			[2030, 5, 3],
			[2031, 5, 2],
			[2032, 5, 7],
			[2033, 5, 6],
			[2034, 5, 5],
			[2035, 5, 4],
			[2036, 5, 2],
			[2037, 5, 1],
			[2038, 5, 7],
			[2039, 5, 6],
			[2040, 5, 4],
			[2041, 5, 3],
			[2042, 5, 2],
		];

		for (const sovereignsBirthdayParts of sovereignsBirthdayDates) {
			const sovereignsBirthday = new Date(...sovereignsBirthdayParts);
			expect(isSovereignsBirthday(sovereignsBirthday)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not the Sovereign's Birthday`, () => {
		/**
		 * The Sovereign's Birthday dates looked up manually for each year, then offset arbitrarily.
		 */
		 const SovereignsBirthdayDates = [
			[2022, 5, 5],
			[2023, 5, 4],
			[2024, 5, 6],
			[2025, 5, 1],
			[2026, 5, 7],
			[2027, 5, 14],
			[2028, 5, 3],
			[2029, 5, 1],
			[2030, 5, 2],
			[2031, 5, 5],
			[2032, 5, 6],
			[2033, 5, 7],
			[2034, 5, 6],
			[2035, 5, 8],
			[2036, 5, 1],
			[2037, 5, 8],
			[2038, 5, 1],
			[2039, 5, 5],
			[2040, 5, 3],
			[2041, 5, 4],
			[2042, 5, 4],
		];

		for (const SovereignsBirthdayParts of SovereignsBirthdayDates) {
			const SovereignsBirthday = new Date(...SovereignsBirthdayParts);
			expect(isSovereignsBirthday(SovereignsBirthday)).toBe(false);
		}
	});

	it(`throws a RangeError when passed a date from 1953 or prior to 1952`, () => {
		expect(() => isSovereignsBirthday(new Date(1953, 5, 2))).toThrowError(RangeError);
		expect(() => isSovereignsBirthday(new Date(1951, 5, 2))).toThrowError(RangeError);
		expect(() => isSovereignsBirthday(new Date(1900, 5, 2))).toThrowError(RangeError);
	});
});
