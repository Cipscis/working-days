import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Hawke's Bay Anniversary Day is observed for a given year.
 */
export function getHawkesBayAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Hawke's Bay Anniversary Day is observed.
 */
export function isHawkesBayAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const hawkesBayAnniversary = getHawkesBayAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(hawkesBayAnniversary, dateTuple);
}
