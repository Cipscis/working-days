import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * A cache of Labour Day dates for quick retrieval.
 */
const labourDays = new Map<number, DateTuple>();

/**
 * Returns Labour Day for a given year.
 *
 * Definition taken from [Holidays Act 2003 section 44(1)(j)](https://www.legislation.govt.nz/act/public/2003/0129/latest/whole.html#DLM237120)
 */
export function getLabourDay(year: number): DateTuple {
	const cachedLabourDay = labourDays.get(year);
	if (cachedLabourDay) {
		return cachedLabourDay;
	}

	// [Holidays Act 2003 section 44(1)(j)](https://www.legislation.govt.nz/act/public/2003/0129/latest/whole.html#DLM237120)
	// > Labour Day (being the fourth Monday in October)
	const labourDay = new Date(year, Month.OCTOBER, 22);

	const dayOfWeek = labourDay.getDay();
	if (dayOfWeek !== DayOfWeek.MONDAY) {
		const daysUntilMonday = (DayOfWeek.MONDAY + 7 - dayOfWeek) % 7;
		labourDay.setDate(labourDay.getDate() + daysUntilMonday);
	}

	const labourDayTuple = makeDateTuple(labourDay);

	// Cache determined Labour Day date for later quick retrieval
	labourDays.set(year, labourDayTuple);
	return labourDayTuple;
}

/**
 * Returns if a given date is Labour Day.
 *
 * Definition taken from [Holidays Act 2003 section 44(1)(j)](https://www.legislation.govt.nz/act/public/2003/0129/latest/whole.html#DLM237120)
 */
export function isLabourDay(date: Date): boolean {
	const labourDay = getLabourDay(date.getFullYear());

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(labourDay, dateTuple);
}
