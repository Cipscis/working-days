import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Wellington Anniversary Day is observed for a given year.
 */
export function getWellingtonAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Wellington Anniversary Day is observed.
 */
export function isWellingtonAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const wellingtonAnniversary = getWellingtonAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(wellingtonAnniversary, dateTuple);
}
