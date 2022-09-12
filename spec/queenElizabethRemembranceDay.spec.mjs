import { isQueenElizabethIIRemembranceDay } from '../dist/holidays/queenElizabethIIRemembranceDay.js';

describe('isQueenElizabethIIRemembranceDay', () => {
	it(`correctly identifies Queen Elizabeth II Remembrance Day`, () => {
		expect(isQueenElizabethIIRemembranceDay(new Date(2022, 8, 26))).toBe(true);
	});

	it(`correctly identifies when dates are not Queen Elizabeth II Remembrance Day`, () => {
		for (let year = 2020; year < 2050; year++) {
			const month = Math.floor(Math.random() * 12);
			let date = Math.ceil(Math.random() * 31);

			if (year === 2022 && month === 8) {
				while (date === 26) {
					date = Math.ceil(Math.random() * 31);
				}
			}

			expect(isQueenElizabethIIRemembranceDay(new Date(year, month, date))).toBe(false);
		}
	});
});
