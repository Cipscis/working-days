import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Canterbury Anniversary Day is observed for a given year.
 */
export function getCanterburyAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Canterbury Anniversary Day is observed.
 */
export function isCanterburyAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const canterburyAnniversary = getCanterburyAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(canterburyAnniversary, dateTuple);
}
