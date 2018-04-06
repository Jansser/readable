import { DateTime } from 'luxon';

export function capitalize(str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function formatTimeStamp(timestamp) {
  return DateTime
    .fromMillis(timestamp)
    .toLocaleString(DateTime.DATETIME_MED);
}