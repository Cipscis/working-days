import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Otago Anniversary Day is observed for a given year.
 */
export function getOtagoAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Otago Anniversary Day is observed.
 */
export function isOtagoAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const otagoAnniversary = getOtagoAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(otagoAnniversary, dateTuple);
}
