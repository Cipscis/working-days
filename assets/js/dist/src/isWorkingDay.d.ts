export declare enum WorkingDayDefinition {
    /** Official Information Act 1982 */
    OIA = "OIA"
}
/**
 * Returns if a date is a working day under a given legislative definition of *working day*.
 *
 * @param {Date} date - The date to be tested.
 * @param {WorkingDayDefinition} definition - The definition of *working day* to be used.
 */
export declare function isWorkingDay(date: Date, definition?: WorkingDayDefinition): boolean;
