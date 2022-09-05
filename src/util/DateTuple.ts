import { Month } from './Month.js';

/**
 * A simple tuple representing the date portion of a `Date` in the following form:
 * [year, month, day]
 */
export type DateTuple = [number, Month, number];

/**
 * Convert a `Date` to a `DateTuple`.
 */
export function makeDateTuple(date: Date): DateTuple {
	return [
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
	];
}

/**
 * Compare two `DateTuple` objects to see if they represent the same date.
 */
export function compareDateTuple(dateA: DateTuple, dateB: DateTuple): boolean {
	return dateA[0] === dateB[0] &&
		dateA[1] === dateB[1] &&
		dateA[2] === dateB[2];
}
