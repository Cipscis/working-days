import { isWeekend } from '../dist/holidays/isWeekend.js';

describe('isWeekend', () => {
	it(`correctly identifies weekends`, () => {
		const date = new Date(2020, 1, 1);

		while (date.getFullYear() === 2020) {
			const dayOfWeek = date.getDay();
			if (
				dayOfWeek === 6 || // Saturday
				dayOfWeek === 0 // Sunday
			) {
				expect(isWeekend(date)).toBe(true);
			}

			date.setDate(date.getDate() + 1);
		}
	});

	it(`correctly identifies weekdays`, () => {
		const date = new Date(2020, 1, 1);

		while (date.getFullYear() === 2020) {
			const dayOfWeek = date.getDay();
			if (!(
				dayOfWeek === 6 || // Saturday
				dayOfWeek === 0 // Sunday
			)) {
				expect(isWeekend(date)).toBe(false);
			}

			date.setDate(date.getDate() + 1);
		}
	});
});
