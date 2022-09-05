import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Westland Anniversary Day is observed for a given year.
 */
export function getWestlandAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Westland Anniversary Day is observed.
 */
export function isWestlandAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const westlandAnniversary = getWestlandAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(westlandAnniversary, dateTuple);
}
