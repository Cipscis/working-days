import { Month } from './util/Month.js';

import { isAnzacDay, isMondayAfterAnzacDay } from './holidays/isAnzacDay.js';
import { isEasterMonday } from './holidays/isEasterMonday.js';
import { isGoodFriday } from './holidays/isGoodFriday.js';
import { isMatariki } from './holidays/isMatariki.js';
import { isSovereignsBirthday } from './holidays/isSovereignsBirthday.js';
import { isMondayAfterWaitangiDay, isWaitangiDay } from './holidays/isWaitangiDay.js';
import { isWeekend } from './holidays/isWeekend.js';

export enum WorkingDayDefinition {
	/** Official Information Act 1982 */
	OIA = 'OIA',
}

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
	if (isWeekend(date)) { return false; }
	if (isWaitangiDay(date)) { return false; }
	if (isGoodFriday(date)) { return false; }
	if (isEasterMonday(date)) { return false; }
	if (isAnzacDay(date)) { return false; }
	if (isSovereignsBirthday(date)) { return false; }
	if (isMatariki(date)) { return false; }

	// (ab)
	if (isMondayAfterAnzacDay(date)) { return false; }
	if (isMondayAfterWaitangiDay(date)) { return false; }

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
 * Returns if a date is a working day under a given legislative definition of *working day*.
 *
 * @param {Date} date - The date to be tested.
 * @param {WorkingDayDefinition} definition - The definition of *working day* to be used.
 */
export function isWorkingDay(date: Date, definition: WorkingDayDefinition = WorkingDayDefinition.OIA): boolean {
	if (definition === WorkingDayDefinition.OIA) {
		return isWorkingDayOia(date);
	} else {
		throw new TypeError(`Unrecognised working day definition ${JSON.stringify(definition)}`);
	}
}
