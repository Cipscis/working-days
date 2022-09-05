import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Auckland Anniversary Day is observed for a given year.
 */
export function getAucklandAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Auckland Anniversary Day is observed.
 */
export function isAucklandAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const aucklandAnniversary = getAucklandAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(aucklandAnniversary, dateTuple);
}
