import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { DayOfWeek } from '../util/DayOfWeek.js';
import { Month } from '../util/Month.js';

const nelsonAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Nelson Anniversary Day is observed for a given year.
 */
export function getNelsonAnniversaryDay(year: number): DateTuple {
	const cachedNelsonAnniversary = nelsonAnniversaries.get(year);
	if (cachedNelsonAnniversary) {
		return cachedNelsonAnniversary;
	}

	// TODO: Get better citations

	// Actual Nelson anniversary date: 1 February
	// https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/
	const anniversary = new Date(year, Month.FEBRUARY, 1);

	// Nelson anniversary is observed on the closest Monday to the actual anniversary
	// https://publicholidays.co.nz/nelson-anniversary-day/
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

	const nelsonAnniversaryTuple = makeDateTuple(closestMonday);

	// Cache determined Nelson anniversary date for later quick retrieval
	nelsonAnniversaries.set(year, nelsonAnniversaryTuple);
	return nelsonAnniversaryTuple;
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
