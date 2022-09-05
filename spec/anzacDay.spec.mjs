import {
	isAnzacDay,
	isAnzacDayMondayised,
} from '../dist/holidays/anzacDay.js';

describe('isAnzacDay', () => {
	it(`correctly identifies Anzac Day`, () => {
		for (let year = 2020; year < 2050; year++) {
			expect(isAnzacDay(new Date(year, 3, 25))).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Anzac Day`, () => {
		for (let year = 2020; year < 2050; year++) {
			const month = Math.floor(Math.random() * 12);
			let date = Math.ceil(Math.random() * 31);

			if (month === 3) {
				while (date === 25) {
					date = Math.ceil(Math.random() * 28);
				}
			}

			expect(isAnzacDay(new Date(year, month, date))).toBe(false);
		}
	});
});

describe('isAnzacDayMondayised', () => {
	it(`correctly identifies Mondayised Anzac Day`, () => {
		// Dates looked up manually for each year.
		const mondayDates = [
			[2020, 3, 27],
			[2021, 3, 26],
			[2026, 3, 27],
			[2027, 3, 26],
			[2032, 3, 26],
			[2037, 3, 27],
			[2038, 3, 26],
		];

		for (const mondayParts of mondayDates) {
			const anzacMonday = new Date(...mondayParts);
			expect(isAnzacDayMondayised(anzacMonday)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Mondayised Anzac Day`, () => {
		for (let year = 2020; year < 2050; year++) {
			expect(isAnzacDayMondayised(new Date(year, 3, 25))).toBe(false);
		}

		// Check a second time to verify that cache retrieval method works
		for (let year = 2020; year < 2050; year++) {
			expect(isAnzacDayMondayised(new Date(year, 3, 25))).toBe(false);
		}
	});
});
