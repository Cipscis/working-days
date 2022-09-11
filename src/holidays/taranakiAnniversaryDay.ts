import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { DayOfWeek } from '../util/DayOfWeek.js';
import { Month } from '../util/Month.js';

const taranakiAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Taranaki Anniversary Day is observed for a given year.
 */
export function getTaranakiAnniversaryDay(year: number): DateTuple {
	const cachedTaranakiAnniversary = taranakiAnniversaries.get(year);
	if (cachedTaranakiAnniversary) {
		return cachedTaranakiAnniversary;
	}

	// TODO: Get better citations

	// Taranaki Anniversary Day is observed on the second Monday in March.
	// https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/

	const taranakiAnniversary = new Date(year, Month.MARCH, 8);

	const dayOfWeek = taranakiAnniversary.getDay();
	if (dayOfWeek !== DayOfWeek.MONDAY) {
		const daysUntilMonday = (DayOfWeek.MONDAY + 7 - dayOfWeek) % 7;
		taranakiAnniversary.setDate(taranakiAnniversary.getDate() + daysUntilMonday);
	}

	const taranakiAnniversaryTuple = makeDateTuple(taranakiAnniversary);

	// Cache determined Taranaki anniversary date for later quick retrieval
	taranakiAnniversaries.set(year, taranakiAnniversaryTuple);
	return taranakiAnniversaryTuple;
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
