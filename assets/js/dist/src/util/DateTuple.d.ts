import { Month } from './Month.js';
/**
 * A simple tuple representing the date portion of a `Date` in the following form:
 * [year, month, day]
 */
export declare type DateTuple = [number, Month, number];
/**
 * Convert a `Date` to a `DateTuple`.
 */
export declare function makeDateTuple(date: Date): DateTuple;
/**
 * Compare two `DateTuple` objects to see if they represent the same date.
 */
export declare function compareDateTuple(dateA: DateTuple, dateB: DateTuple): boolean;
