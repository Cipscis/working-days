import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { getLabourDay } from './labourDay.js';

const hawkesBayAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Hawke's Bay Anniversary Day is observed for a given year.
 */
export function getHawkesBayAnniversaryDay(year: number): DateTuple {
	const cachedHawkesBayAnniversary = hawkesBayAnniversaries.get(year);
	if (cachedHawkesBayAnniversary) {
		return cachedHawkesBayAnniversary;
	}

	// TODO: Get better citations

	// Hawke's Bay Anniversary Day is observed on the Friday before Labour Day.
	// https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/
	const labourDay = getLabourDay(year);

	// Labour Day always falls on a Monday, and never the
	// first Monday of the month, so we can safely find the
	// Friday before it by subtracting `3` from the date
	// portion, without constructing a new `Date`
	const hawkesBayAnniversary: DateTuple = [labourDay[0], labourDay[1], labourDay[2] - 3];

	// Cache determined Hawke's Bay anniversary date for later quick retrieval
	hawkesBayAnniversaries.set(year, hawkesBayAnniversary);
	return hawkesBayAnniversary;
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
