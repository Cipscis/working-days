import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { DayOfWeek } from '../util/DayOfWeek.js';
import { Month } from '../util/Month.js';

const aucklandAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Auckland Anniversary Day is observed for a given year.
 */
export function getAucklandAnniversaryDay(year: number): DateTuple {
	const cachedAucklandAnniversary = aucklandAnniversaries.get(year);
	if (cachedAucklandAnniversary) {
		return cachedAucklandAnniversary;
	}

	// TODO: Get better citations

	// Actual Auckland anniversary date: 29 January
	// https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/
	const anniversary = new Date(year, Month.JANUARY, 29);

	// Auckland anniversary is observed on the closest Monday to the actual anniversary
	// https://publicholidays.co.nz/auckland-anniversary-day/
	const closestMonday = new Date(anniversary);
	const dayOfWeek = anniversary.getDay();
	switch (dayOfWeek) {
		case DayOfWeek.FRIDAY:
			closestMonday.setDate(closestMonday.getDate() + 3);
			break;
		case DayOfWeek.SATURDAY:
			closestMonday.setDate(closestMonday.getDate() + 2);
			break;
		case DayOfWeek.SUNDAY:
			closestMonday.setDate(closestMonday.getDate() + 1);
			break;
		case DayOfWeek.MONDAY:
			// We already know the closest Monday
			break;
		case DayOfWeek.TUESDAY:
			closestMonday.setDate(closestMonday.getDate() - 1);
			break;
		case DayOfWeek.WEDNESDAY:
			closestMonday.setDate(closestMonday.getDate() - 2);
			break;
		case DayOfWeek.THURSDAY:
			closestMonday.setDate(closestMonday.getDate() - 3);
			break;
	}

	const aucklandAnniversaryTuple = makeDateTuple(closestMonday);

	// Cache determined Auckland anniversary date for later quick retrieval
	aucklandAnniversaries.set(year, aucklandAnniversaryTuple);
	return aucklandAnniversaryTuple;
}

/**
 * Returns if a given date is the day Auckland Anniversary Day is observed.
 */
export function isAucklandAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const aucklandAnniversary = getAucklandAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(aucklandAnniversary, dateTuple);
}
