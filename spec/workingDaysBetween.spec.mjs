import {
	workingDaysBetween,
	WorkingDayDefinition
} from '../dist/index.js';

describe('workingDaysBetween', () => {
	it(`correctly counts working days between two dates according to the OIA definition`, () => {
		expect(
			workingDaysBetween(
				new Date(2014, 7, 13),
				new Date(2014, 8, 3),
			)
		).toBe(15);

		expect(
			workingDaysBetween(
				new Date(2015, 7, 13),
				new Date(2015, 9, 16),
			)
		).toBe(46);

		expect(
			workingDaysBetween(
				new Date(2015, 9, 23),
				new Date(2015, 10, 23),
			)
		).toBe(20);

		expect(
			workingDaysBetween(
				new Date(2016, 2, 6),
				new Date(2016, 3, 6),
			)
		).toBe(21);

		expect(
			workingDaysBetween(
				new Date(2022, 3, 23),
				new Date(2022, 5, 8),
			)
		).toBe(31);

		expect(
			workingDaysBetween(
				new Date(2022, 4, 29),
				new Date(2022, 5, 26),
			)
		).toBe(18);

		expect(
			workingDaysBetween(
				new Date(2022, 6, 29),
				new Date(2022, 7, 26),
			)
		).toBe(20);
	});
});
