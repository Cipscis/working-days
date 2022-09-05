import { compareDateTuple, DateTuple, makeDateTuple } from '../util/DateTuple.js';
import { Province } from '../util/Province.js';

import { getAucklandAnniversaryDay } from './aucklandAnniversaryDay.js';
import { getTaranakiAnniversaryDay } from './taranakiAnniversaryDay.js';
import { getHawkesBayAnniversaryDay } from './hawkesBayAnniversaryDay.js';
import { getWellingtonAnniversaryDay } from './wellingtonAnniversaryDay.js';
import { getMarlboroughAnniversaryDay } from './marlboroughAnniversaryDay.js';
import { getNelsonAnniversaryDay } from './nelsonAnniversaryDay.js';
import { getCanterburyAnniversaryDay } from './canterburyAnniversaryDay.js';
import { getCanterburySouthAnniversaryDay } from './canterburySouthAnniversaryDay.js';
import { getWestlandAnniversaryDay } from './westlandAnniversaryDay.js';
import { getOtagoAnniversaryDay } from './otagoAnniversaryDay.js';
import { getSouthlandAnniversaryDay } from './southlandAnniversaryDay.js';
import { getChathamIslandsAnniversaryDay } from './chathamIslandsAnniversaryDay.js';

/**
 * Returns the observed provincial anniversary date for a specified province and year.
 */
export function getProvincialAnniversaryDay(province: Province, year: number): DateTuple {
	if (province === Province.AUCKLAND) {
		return getAucklandAnniversaryDay(year);
	} else if (province === Province.TARANAKI) {
		return getTaranakiAnniversaryDay(year);
	} else if (province === Province.HAWKES_BAY) {
		return getHawkesBayAnniversaryDay(year);
	} else if (province === Province.WELLINGTON) {
		return getWellingtonAnniversaryDay(year);
	} else if (province === Province.MARLBOROUGH) {
		return getMarlboroughAnniversaryDay(year);
	} else if (province === Province.NELSON) {
		return getNelsonAnniversaryDay(year);
	} else if (province === Province.CANTERBURY) {
		return getCanterburyAnniversaryDay(year);
	} else if (province === Province.CANTERBURY_SOUTH) {
		return getCanterburySouthAnniversaryDay(year);
	} else if (province === Province.WESTLAND) {
		return getWestlandAnniversaryDay(year);
	} else if (province === Province.OTAGO) {
		return getOtagoAnniversaryDay(year);
	} else if (province === Province.SOUTHLAND) {
		return getSouthlandAnniversaryDay(year);
	} else if (province === Province.CHATHAM_ISLANDS) {
		return getChathamIslandsAnniversaryDay(year);
	}

	throw new RangeError(`Unrecognised Province ${province}`);
}

/**
 * Returns if a specified date is the observed provincial anniversary date for the specified province.
 */
export function isProvincialAnniversaryDay(province: Province, date: Date): boolean {
	const dateTuple = makeDateTuple(date);
	const [year] = dateTuple;

	const provincialAnniversaryDate = getProvincialAnniversaryDay(province, year);

	return compareDateTuple(provincialAnniversaryDate, dateTuple);
}
