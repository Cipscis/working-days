import { Month } from '../util/Month.js';

import {
	compareDateTuple,
	DateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns Queen Elizabeth Memorial Day for a given year.
 *
 * Definition taken from Queen Elizabeth II Memorial Day Bill following royal assent (Act not yet loaded on legislation website)
 */
export function getQueenElizabethIIMemorialDay(year: number): DateTuple | null {
	/*
	[Queen Elizabeth II Memorial Day Bill Section 6](https://www.legislation.govt.nz/bill/government/2022/0168/latest/whole.html#LMS757115)

	(1) In acknowledgement of the long and dedicated service of Her Majesty Queen Elizabeth II to New Zealand, 26 September 2022 is to be observed as a day of commemoration in New Zealand.

	(2) The day of commemoration is to be known as Queen Elizabeth II Memorial Day.
	*/
	if (year === 2022) {
		return [2022, Month.SEPTEMBER, 26];
	} else {
		return null;
	}
}

/**
 * Returns if a given date is Queen Elizabeth II Memorial Day.
 *
 * Definition taken from Queen Elizabeth II Memorial Day Bill following royal assent (Act not yet loaded on legislation website)
 */
export function isQueenElizabethIIMemorialDay(date: Date): boolean {
	const dateTuple = makeDateTuple(date);
	const [year] = dateTuple;

	const queenElizabethIIMemorialDay = getQueenElizabethIIMemorialDay(year);

	if (queenElizabethIIMemorialDay) {
		return compareDateTuple(dateTuple, queenElizabethIIMemorialDay);
	} else {
		return false;
	}
}
