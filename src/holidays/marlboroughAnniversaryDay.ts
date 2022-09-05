import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Marlborough Anniversary Day is observed for a given year.
 */
export function getMarlboroughAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Marlborough Anniversary Day is observed.
 */
export function isMarlboroughAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const marlboroughAnniversary = getMarlboroughAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(marlboroughAnniversary, dateTuple);
}
