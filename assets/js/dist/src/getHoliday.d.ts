import { Holiday } from './util/Holiday.js';
import { getAnzacDay, getAnzacDayMondayised } from './holidays/anzacDay.js';
import { getWaitangiDay, getWaitangiDayMondayised } from './holidays/waitangiDay.js';
import { getGoodFriday } from './holidays/goodFriday.js';
import { getEasterSunday } from './holidays/easterSunday.js';
import { getEasterMonday } from './holidays/easterMonday.js';
import { getLabourDay } from './holidays/labourDay.js';
import { getMatariki } from './holidays/matariki.js';
import { getSovereignsBirthday } from './holidays/sovereignsBirthday.js';
import { getQueenElizabethIIMemorialDay } from './holidays/queenElizabethIIMemorialDay.js';
declare const holidayFunctions: {
    readonly 0: typeof getAnzacDay;
    readonly 1: typeof getAnzacDayMondayised;
    readonly 2: typeof getWaitangiDay;
    readonly 3: typeof getWaitangiDayMondayised;
    readonly 4: typeof getGoodFriday;
    readonly 5: typeof getEasterSunday;
    readonly 6: typeof getEasterMonday;
    readonly 7: typeof getLabourDay;
    readonly 8: typeof getMatariki;
    readonly 9: typeof getSovereignsBirthday;
    readonly 10: typeof getQueenElizabethIIMemorialDay;
};
/**
 * Returns the specified holiday for the specified year.
 */
export declare function getHoliday<T extends Holiday>(holiday: T, year: number): ReturnType<(typeof holidayFunctions)[T]>;
export {};
