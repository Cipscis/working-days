import {
	isWorkingDay,
	WorkingDayDefinition
} from '../dist/index.js';

describe('isWorkingDay', () => {
	it(`correctly identifies working days according to the OIA definition`, () => {
		const date = new Date(2022, 1, 1);

		let numWorkingDays = 0;

		// Test by counting up all working days in 2022
		while (date.getFullYear() === 2022) {
			if (isWorkingDay(date)) {
				numWorkingDays += 1;
			}

			date.setDate(date.getDate() + 1);
		}

		expect(numWorkingDays).toBe(227);
	});

	it(`correctly identifies non-working days according to the OIA definition`, () => {
		// Test by checking each non-working day that isn't a weekend in 2022
		const holidays = [
			[2022, 1, 7], // Waitangi Day (Mondayised)
			[2022, 3, 15], // Good Friday
			[2022, 3, 18], // Easter Monday
			[2022, 3, 25], // Anzac Day
			[2022, 5, 6], // Queen's Birthday
			[2022, 5, 24], // Matariki
			[2022, 9, 24], // Labour Day
		];

		for (const holidayParts of holidays) {
			expect(isWorkingDay(new Date(...holidayParts))).toBe(false);
		}
	});
});
