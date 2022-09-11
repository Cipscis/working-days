import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

import { DayOfWeek } from '../util/DayOfWeek.js';
import { Month } from '../util/Month.js';

const canterburyAnniversaries = new Map<number, DateTuple>();

/**
 * Returns the day Canterbury Anniversary Day is observed for a given year.
 */
export function getCanterburyAnniversaryDay(year: number): DateTuple {
	const cachedCanterburyAnniversary = canterburyAnniversaries.get(year);
	if (cachedCanterburyAnniversary) {
		return cachedCanterburyAnniversary;
	}

	// TODO: Get better citations

	// Canterbury anniversary is observed on the second Friday after the first Tuesday in November
	// https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-and-anniversary-dates/

	// Start with the earliest possible first Tuesday in November
	const canterburyAnniversary = new Date(year, Month.NOVEMBER, 1);

	// If it's not Tuesday yet, find the next Tuesday
	const dayOfWeek = canterburyAnniversary.getDay();
	if (dayOfWeek !== DayOfWeek.TUESDAY) {
		const daysUntilTuesday = (DayOfWeek.TUESDAY + 7 - dayOfWeek) % 7;
		canterburyAnniversary.setDate(canterburyAnniversary.getDate() + daysUntilTuesday);
	}

	// Skip ahead 10 days to get the second Friday after the first Tuesday in November
	canterburyAnniversary.setDate(canterburyAnniversary.getDate() + 10);

	const canterburyAnniversaryTuple = makeDateTuple(canterburyAnniversary);

	// Cache determined Canterbury anniversary date for later quick retrieval
	canterburyAnniversaries.set(year, canterburyAnniversaryTuple);
	return canterburyAnniversaryTuple;
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
