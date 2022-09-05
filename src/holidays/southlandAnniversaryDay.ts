import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Southland Anniversary Day is observed for a given year.
 */
export function getSouthlandAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Southland Anniversary Day is observed.
 */
export function isSouthlandAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const southlandAnniversary = getSouthlandAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(southlandAnniversary, dateTuple);
}
