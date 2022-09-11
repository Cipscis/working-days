import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { getLabourDay } from './labourDay.js';

const marlboroughAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Marlborough Anniversary Day is observed for a given year.
 */
export function getMarlboroughAnniversaryDay(year: number): DateTuple {
	const cachedMarlboroughAnniversary = marlboroughAnniversaries.get(year);
	if (cachedMarlboroughAnniversary) {
		return cachedMarlboroughAnniversary;
	}

	// TODO: Get better citations

	// Marlborough Anniversary Day is observed on the Monday after Labour Day.
	// https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/
	const labourDay = getLabourDay(year);

	const marlboroughAnniversary = new Date(...labourDay);
	marlboroughAnniversary.setDate(marlboroughAnniversary.getDate() + 7);

	const marlboroughAnniversaryTuple = makeDateTuple(marlboroughAnniversary);

	// Cache determined Marlborough anniversary date for later quick retrieval
	marlboroughAnniversaries.set(year, marlboroughAnniversaryTuple);
	return marlboroughAnniversaryTuple;
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
