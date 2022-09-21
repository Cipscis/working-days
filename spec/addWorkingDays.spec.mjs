import {
	addWorkingDays,
	WorkingDayDefinition
} from '../dist/index.js';

describe('addWorkingDays', () => {
	it(`correctly adds or subtracts working days, according to the OIA definition`, () => {
		expect(
			addWorkingDays(
				new Date(2022, 5, 1),
				15
			)
		).toEqual(new Date(2022, 5, 23));

		expect(
			addWorkingDays(
				new Date(2022, 5, 23),
				-15
			)
		).toEqual(new Date(2022, 5, 1));

		expect(
			addWorkingDays(
				new Date(2022, 8, 3),
				0
			)
		).toEqual(new Date(2022, 8, 3));

		expect(
			addWorkingDays(
				new Date(2022, 8, 3),
				20
			)
		).toEqual(new Date(2022, 9, 3));

		expect(
			addWorkingDays(
				new Date(2022, 8, 30),
				-20
			)
		).toEqual(new Date(2022, 8, 1));
	});
});
