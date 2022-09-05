import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * A cache of Mondayised Waitangi Day dates for quick retrieval.
 */
const mondayisedWaitangiDays = new Map<number, DateTuple | null>();

/**
 * Returns Waitangi Day for a given year.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export function getWaitangiDay(year: number): DateTuple {
	// [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
	// > 6 February in each year shall be known as Waitangi Day.
	return [year, Month.FEBRUARY, 6];
}

/**
 * Returns if a given date is the Monday following Waitangi Day, if Waitangi Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export function getWaitangiDayMondayised(year: number): DateTuple | null {
	const cachedMondayisedWaitangiDay = mondayisedWaitangiDays.get(year);
	if (typeof cachedMondayisedWaitangiDay !== 'undefined') {
		return cachedMondayisedWaitangiDay;
	}

	let mondayisedWaitangiDay: DateTuple | null = getWaitangiDay(year);
	const dayOfWeek = new Date(...mondayisedWaitangiDay).getDay();

	if (dayOfWeek === DayOfWeek.SATURDAY) {
		mondayisedWaitangiDay[2] += 2;
	} else if (dayOfWeek === DayOfWeek.SUNDAY) {
		mondayisedWaitangiDay[2] += 1;
	} else {
		mondayisedWaitangiDay = null;
	}

	// Cache determined Mondayised Waitangi Day for later quick retrieval
	mondayisedWaitangiDays.set(year, mondayisedWaitangiDay);
	return mondayisedWaitangiDay;
}

/**
 * Returns if a given date is Waitangi Day.
 *
 * Definition taken from [Waitangi Day Act 1976 section 3](https://www.legislation.govt.nz/act/public/1976/0033/latest/whole.html#DLM439055)
 */
export function isWaitangiDay(date: Date): boolean {
	const waitangiDay = getWaitangiDay(date.getFullYear());

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(waitangiDay, dateTuple);
}

/**
 * Returns if a date is the Monday following Anzac Day, if Anzac Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export function isWaitangiDayMondayised(date: Date): boolean {
	const waitangiMonday = getWaitangiDayMondayised(date.getFullYear());

	if (waitangiMonday) {
		return compareDateTuple(waitangiMonday, makeDateTuple(date));
	} else {
		// No Mondayised Waitangi day in this year
		return false;
	}
}
