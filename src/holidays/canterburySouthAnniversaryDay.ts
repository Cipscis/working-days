import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Canterbury (South) Anniversary Day is observed for a given year.
 */
export function getCanterburySouthAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Canterbury (South) Anniversary Day is observed.
 */
export function isCanterburySouthAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const canterburySouthAnniversary = getCanterburySouthAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(canterburySouthAnniversary, dateTuple);
}
