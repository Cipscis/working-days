import { Holiday } from './util/Holiday.js';

import {
	getAnzacDay,
	getAnzacDayMondayised,
} from './holidays/anzacDay.js';
import {
	getWaitangiDay,
	getWaitangiDayMondayised,
} from './holidays/waitangiDay.js';

import { getGoodFriday } from './holidays/goodFriday.js';
import { getEasterSunday } from './holidays/easterSunday.js';
import { getEasterMonday } from './holidays/easterMonday.js';

import { getLabourDay } from './holidays/labourDay.js';
import { getMatariki } from './holidays/matariki.js';
import { getSovereignsBirthday } from './holidays/sovereignsBirthday.js';

const holidayFunctions = {
	[Holiday.ANZAC_DAY]: getAnzacDay,
	[Holiday.ANZAC_DAY_MONDAYISED]: getAnzacDayMondayised,
	[Holiday.WAITANGI_DAY]: getWaitangiDay,
	[Holiday.WAITANGI_DAY_MONDAYISED]: getWaitangiDayMondayised,

	[Holiday.GOOD_FRIDAY]: getGoodFriday,
	[Holiday.EASTER_SUNDAY]: getEasterSunday,
	[Holiday.EASTER_MONDAY]: getEasterMonday,

	[Holiday.LABOUR_DAY]: getLabourDay,
	[Holiday.MATARIKI]: getMatariki,
	[Holiday.SOVEREIGNS_BIRTHDAY]: getSovereignsBirthday,
} as const;

/**
 * Returns the specified holiday for the specified year.
 */
export function getHoliday<T extends Holiday>(holiday: T, year: number): ReturnType<(typeof holidayFunctions)[T]> {
	const getHolidayForYear = holidayFunctions[holiday];

	// This type assertion is necessary to stop TypeScript from collapsing the type to `DateTuple | null`,
	// and it's safe because we're just saying "This function returns the type this function returns"
	const holidayDate = getHolidayForYear(year) as ReturnType<typeof getHolidayForYear>;

	return holidayDate;
}
