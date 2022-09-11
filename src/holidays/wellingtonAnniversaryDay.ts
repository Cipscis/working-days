import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { DayOfWeek } from '../util/DayOfWeek.js';
import { Month } from '../util/Month.js';

const wellingtonAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Wellington Anniversary Day is observed for a given year.
 */
export function getWellingtonAnniversaryDay(year: number): DateTuple {
	const cachedWellingtonAnniversary = wellingtonAnniversaries.get(year);
	if (cachedWellingtonAnniversary) {
		return cachedWellingtonAnniversary;
	}

	// TODO: Get better citations

	// Actual Wellington anniversary date: 22 January
	// https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/
	const anniversary = new Date(year, Month.JANUARY, 22);

	// Wellington anniversary is observed on the closest Monday to the actual anniversary
	// https://publicholidays.co.nz/wellington-anniversary-day/
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

	const wellingtonAnniversaryTuple = makeDateTuple(closestMonday);

	// Cache determined Wellington anniversary date for later quick retrieval
	wellingtonAnniversaries.set(year, wellingtonAnniversaryTuple);
	return wellingtonAnniversaryTuple;
}

/**
 * Returns if a given date is the day Wellington Anniversary Day is observed.
 */
export function isWellingtonAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const wellingtonAnniversary = getWellingtonAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(wellingtonAnniversary, dateTuple);
}
