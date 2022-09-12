import { Month } from '../util/Month.js';

import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns Queen Elizabeth Remembrance Day for a given year.
 *
 * TODO: Add citation once legislation has been passed
 */
export function getQueenElizabethIIRemembranceDay(year: number): DateTuple | null {
	// TODO: Get citation from legislation directly
	// https://www.beehive.govt.nz/release/public-holiday-26-september-mark-passing-queen-elizabeth-ii
	// > It will be a one-off holiday held on 26 September 2022 only
	if (year === 2022) {
		return [2022, Month.SEPTEMBER, 26];
	} else {
		return null;
	}
}

/**
 * Returns if a given date is Queen Elizabeth II Remembrance Day.
 *
 * TODO: Add citation once legislation has been passed
 */
export function isQueenElizabethIIRemembranceDay(date: Date): boolean {
	const dateTuple = makeDateTuple(date);
	const [year] = dateTuple;

	const queenElizabethIIRemembranceDay = getQueenElizabethIIRemembranceDay(year);

	if (queenElizabethIIRemembranceDay) {
		return compareDateTuple(dateTuple, queenElizabethIIRemembranceDay);
	} else {
		return false;
	}
}
