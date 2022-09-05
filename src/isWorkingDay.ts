import { Month } from './util/Month.js';
import { Province } from './util/Province.js';

import { isAnzacDay, isAnzacDayMondayised } from './holidays/anzacDay.js';
import { isEasterMonday } from './holidays/easterMonday.js';
import { isGoodFriday } from './holidays/goodFriday.js';
import { isMatariki } from './holidays/matariki.js';
import { isSovereignsBirthday } from './holidays/sovereignsBirthday.js';
import { isWaitangiDay, isWaitangiDayMondayised } from './holidays/waitangiDay.js';
import { isWeekend } from './holidays/isWeekend.js';
import { isLabourDay } from './holidays/labourDay.js';

import { isAucklandAnniversaryDay } from './holidays/aucklandAnniversaryDay.js';

import { WorkingDayDefinition } from './WorkingDayDefinition.js';

/**
 * Returns if a date is a working day according to the Official Information Act 1982.
 */
function isWorkingDayOia(date: Date): boolean {
	/* [Official Information Act 1982 section 2, definition of **working day**](https://www.legislation.govt.nz/act/public/1982/0156/latest/whole.html#DLM64790)

	**working day** means any day of the week other than—
		(a)
		a Saturday, a Sunday, Waitangi Day, Good Friday, Easter Monday, Anzac Day, the Sovereign’s birthday, Te Rā Aro ki a Matariki/Matariki Observance Day, and Labour Day; and
		(ab)
		if Waitangi Day or Anzac Day falls on a Saturday or a Sunday, the following Monday; and
		(b)
		a day in the period commencing with 25 December in any year and ending with 15 January in the following year.
	*/

	// (a)
	if (
		isWeekend(date) ||
		isWaitangiDay(date) ||
		isGoodFriday(date) ||
		isEasterMonday(date) ||
		isAnzacDay(date) ||
		isSovereignsBirthday(date) ||
		isMatariki(date) ||
		isLabourDay(date)
	) {
		return false;
	}

	// (ab)
	if (
		isAnzacDayMondayised(date) ||
		isWaitangiDayMondayised(date)
	) {
		return false;
	}

	// (b)
	if (
		(
			date.getMonth() === Month.DECEMBER &&
			date.getDate() >= 25
		) ||
		(
			date.getMonth() === Month.JANUARY &&
			date.getDate() <= 15
		)
	) {
		return false;
	}

	return true;
}

/**
 * Returns if a date is a working day according to the Local Government Official Information and Meetings Act 1987.
 */
function isWorkingDayLgoima(date: Date, province: Province): boolean {
	/* [Local Government Official Information and Meetings Act 1987 section 2, definition of **working day**](https://www.legislation.govt.nz/act/public/1987/0174/latest/DLM122247.html)

	**working day** means any day of the week other than—
		(a)
		a Saturday, a Sunday, Waitangi Day, Good Friday, Easter Monday, Anzac Day, the Sovereign’s birthday, Te Rā Aro ki a Matariki/Matariki Observance Day, and Labour Day; and
		(ab)
		if Waitangi Day or Anzac Day falls on a Saturday or a Sunday, the following Monday; and
		(b)
		the day observed in the appropriate area as the anniversary of the province of which the area forms a part; and
		(c)
		a day in the period commencing with 20 December in any year and ending with 10 January in the following year.
	*/

	// (a)
	if (
		isWeekend(date) ||
		isWaitangiDay(date) ||
		isGoodFriday(date) ||
		isEasterMonday(date) ||
		isAnzacDay(date) ||
		isSovereignsBirthday(date) ||
		isMatariki(date) ||
		isLabourDay(date)
	) {
		return false;
	}

	// (ab)
	if (
		isAnzacDayMondayised(date) ||
		isWaitangiDayMondayised(date)
	) {
		return false;
	}

	// (b)
	if (
		isProvincialAnniversaryDay(province, date)
	) {
		return false;
	}

	// (c)
	if (
		(
			date.getMonth() === Month.DECEMBER &&
			date.getDate() >= 20
		) ||
		(
			date.getMonth() === Month.JANUARY &&
			date.getDate() <= 10
		)
	) {
		return false;
	}

	return true;
}

/**
 * Determines whether or not a given date qualifies as a working day, for a given definition.
 *
 * @param {Date} date - A `Date` that may or may not be a working day. Only the year, month, and day portion of the `Date` will be used.
 * @param {WorkingDayDefinition} [definition=WorkingDayDefinition.OIA] - The definition of **working day** to use in the determination. If this argument is ommitted, the definition used by the Official Information Act 1982 will be used.
 */
export function isWorkingDay(date: Date, definition?: WorkingDayDefinition.OIA): boolean
export function isWorkingDay(date: Date, definition: WorkingDayDefinition.LGOIMA, province: Province): boolean
export function isWorkingDay(date: Date, definition: WorkingDayDefinition = WorkingDayDefinition.OIA, province?: Province): boolean {
	if (definition === WorkingDayDefinition.OIA) {
		return isWorkingDayOia(date);
	} else if (
		definition === WorkingDayDefinition.LGOIMA &&
		typeof province !== 'undefined'
	) {
		return isWorkingDayLgoima(date, province);
	} else {
		throw new TypeError(`Unrecognised working day definition ${JSON.stringify(definition)}`);
	}
}
