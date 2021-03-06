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

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  
  return s4() + s4() + s4() + s4() + s4();
}