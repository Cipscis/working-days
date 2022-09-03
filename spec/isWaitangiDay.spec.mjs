import {
	isWaitangiDay,
	isMondayAfterWaitangiDay,
} from '../dist/holidays/isWaitangiDay.js';

describe('isWaitangiDay', () => {
	it(`correctly identifies Waitangi Day`, () => {
		for (let year = 2020; year < 2050; year++) {
			expect(isWaitangiDay(new Date(year, 1, 6))).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Waitangi Day`, () => {
		for (let year = 2020; year < 2050; year++) {
			const month = Math.floor(Math.random() * 12);
			let date = Math.ceil(Math.random() * 31);

			if (month === 1) {
				while (date === 6) {
					date = Math.ceil(Math.random() * 28);
				}
			}

			expect(isWaitangiDay(new Date(year, month, date))).toBe(false);
		}
	});
});

describe('isMondayAfterWaitangiDay', () => {
	it(`correctly identifies Mondayised Waitangi Day`, () => {
		// Dates looked up manually for each year.
		const mondayDates = [
			[2021, 1, 8],
			[2022, 1, 7],
			[2027, 1, 8],
			[2028, 1, 7],
			[2033, 1, 7],
			[2038, 1, 8],
		];

		for (const mondayParts of mondayDates) {
			const anzacMonday = new Date(...mondayParts);
			expect(isMondayAfterWaitangiDay(anzacMonday)).toBe(true);
		}
	});

	it(`correctly identifies when dates are not Mondayised Waitangi Day`, () => {
		for (let year = 2020; year < 2050; year++) {
			expect(isMondayAfterWaitangiDay(new Date(year, 1, 6))).toBe(false);
		}
	});
});
