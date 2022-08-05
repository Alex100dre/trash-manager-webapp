import {dayList} from "../constants/date";
import {Day} from "../types/trash.type";
import {getNextArrayIndex} from "./array";

/**
 * Get day name of a given date. Today's date is used if none is provided. A local parameter can be provided aswell.
 * @param date {Date} Date to get the day name from. Today is used by default.
 * @param locale {string} Locale to choose in which language should the day name be returned. 'en-US' is used by default.
 * @return dayName {string} Name of the day.
 */
export const getDayName = (date: Date = new Date(), locale: string = 'en-US') => (
    date.toLocaleDateString(locale, {weekday: 'long'}).toUpperCase() as Day
);

/**
 * Get name of the day coming right after a given date. Today's date is used if none is provided. A local parameter can be provided aswell.
 * @param date {Date} Date to get the day name from. Today is used by default.
 * @param locale {string} Locale to choose in which language should the day name be returned. 'en-US' is used by default.
 * @return nextDayName {string} Name of the day coming right after.
 */
export const getNextDayName = (date: Date = new Date(), locale: string = 'en-US') => {
    const dateDayName = getDayName(date);
    const dateDayIndex = dayList.indexOf(dateDayName);
    const nextDayIndex = getNextArrayIndex(dayList, dateDayIndex)
    return dayList[nextDayIndex];
};