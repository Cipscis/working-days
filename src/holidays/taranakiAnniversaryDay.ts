import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Taranaki Anniversary Day is observed for a given year.
 */
export function getTaranakiAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Taranaki Anniversary Day is observed.
 */
export function isTaranakiAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const taranakiAnniversary = getTaranakiAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(taranakiAnniversary, dateTuple);
}
