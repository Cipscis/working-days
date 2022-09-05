import { Month } from '../util/Month.js';
import { DayOfWeek } from '../util/DayOfWeek.js';

import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * A cache of Mondayised Anzac Day dates for quick retrieval.
 */
const mondayisedAnzacDays = new Map<number, DateTuple | null>();

/**
 * Returns Anzac Day for a given year.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export function getAnzacDay(year: number): DateTuple {
	// [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
	// > 25 April in each year... shall be known as Anzac Day.
	return [year, Month.APRIL, 25];
}

/**
 * Returns the Monday following Anzac Day for a given year, if Anzac Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export function getAnzacDayMondayised(year: number): DateTuple | null {
	const cachedMondayisedAnzacDay = mondayisedAnzacDays.get(year);
	if (typeof cachedMondayisedAnzacDay !== 'undefined') {
		return cachedMondayisedAnzacDay;
	}

	let mondayisedAnzacDay: DateTuple | null = getAnzacDay(year);
	const dayOfWeek = new Date(...mondayisedAnzacDay).getDay();

	if (dayOfWeek === DayOfWeek.SATURDAY) {
		mondayisedAnzacDay[2] += 2;
	} else if (dayOfWeek === DayOfWeek.SUNDAY) {
		mondayisedAnzacDay[2] += 1;
	} else {
		mondayisedAnzacDay = null;
	}

	// Cache determined Mondayised Anzac Day for later quick retrieval
	mondayisedAnzacDays.set(year, mondayisedAnzacDay);
	return mondayisedAnzacDay;
}

/**
 * Returns if a given date is Anzac Day.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export function isAnzacDay(date: Date): boolean {
	const dateTuple = makeDateTuple(date);
	const [year] = dateTuple;

	const anzacDay = getAnzacDay(year);

	return compareDateTuple(dateTuple, anzacDay);
}

/**
 * Returns if a date is the Monday following Anzac Day, if Anzac Day for that year falls on a Saturday or a Sunday.
 *
 * Definition taken from [Anzac Day Act 1966 section 2](https://www.legislation.govt.nz/act/public/1966/0044/latest/whole.html#DLM379811)
 */
export function isAnzacDayMondayised(date: Date): boolean {
	const anzacMonday = getAnzacDayMondayised(date.getFullYear());

	if (anzacMonday) {
		return compareDateTuple(anzacMonday, makeDateTuple(date));
	} else {
		// No Mondayised Anzac day in this year
		return false;
	}
}
