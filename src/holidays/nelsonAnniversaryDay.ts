import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Nelson Anniversary Day is observed for a given year.
 */
export function getNelsonAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Nelson Anniversary Day is observed.
 */
export function isNelsonAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const nelsonAnniversary = getNelsonAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(nelsonAnniversary, dateTuple);
}
