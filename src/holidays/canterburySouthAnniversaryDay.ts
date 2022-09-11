import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { DayOfWeek } from '../util/DayOfWeek.js';
import { Month } from '../util/Month.js';

const canterburySouthAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Canterbury (South) Anniversary Day is observed for a given year.
 */
export function getCanterburySouthAnniversaryDay(year: number): DateTuple {
	const cachedCanterburySouthAnniversary = canterburySouthAnniversaries.get(year);
	if (cachedCanterburySouthAnniversary) {
		return cachedCanterburySouthAnniversary;
	}

	// TODO: Get better citations

	// Canterbury (South) Anniversary Day is observed on the fourth Monday of September
	// https://publicholidays.co.nz/south-canterbury-anniversary-day/

	const canterburySouthAnniversary = new Date(year, Month.SEPTEMBER, 22);

	const dayOfWeek = canterburySouthAnniversary.getDay();
	if (dayOfWeek !== DayOfWeek.MONDAY) {
		const daysUntilMonday = (DayOfWeek.MONDAY + 7 - dayOfWeek) % 7;
		canterburySouthAnniversary.setDate(canterburySouthAnniversary.getDate() + daysUntilMonday);
	}

	const canterburySouthAnniversaryTuple = makeDateTuple(canterburySouthAnniversary);

	// Cache determined Canterbury (South) anniversary date for later quick retrieval
	canterburySouthAnniversaries.set(year, canterburySouthAnniversaryTuple);
	return canterburySouthAnniversaryTuple;
}

/**
 * Returns if a given date is the day Canterbury (South) Anniversary Day is observed.
 */
export function isCanterburySouthAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const canterburySouthAnniversary = getCanterburySouthAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(canterburySouthAnniversary, dateTuple);
}
