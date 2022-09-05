import {
	DateTuple,
	compareDateTuple,
	makeDateTuple,
} from '../util/DateTuple.js';

/**
 * Returns the day Chatham Islands Anniversary Day is observed for a given year.
 */
export function getChathamIslandsAnniversaryDay(year: number): DateTuple {
	// TODO
}

/**
 * Returns if a given date is the day Chatham Islands Anniversary Day is observed.
 */
export function isChathamIslandsAnniversaryDay(date: Date): boolean {
	const year = date.getFullYear();

	const chathamIslandsAnniversary = getChathamIslandsAnniversaryDay(year);

	const dateTuple = makeDateTuple(date);

	return compareDateTuple(chathamIslandsAnniversary, dateTuple);
}
