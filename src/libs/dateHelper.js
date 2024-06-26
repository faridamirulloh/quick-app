import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getDate = (date) => dayjs(date).format('DD/MM/YYYY');

export const getDateHour = (date) => dayjs(date).format('DD/MM/YYYY HH:mm');

export const getHour = (date) => dayjs(date).format('HH:mm');

export const dateFromNow = (date) =>
  dayjs(date)
    .fromNow()
    .replace('in ', '')
    .replace('a day', 'a Day left')
    .replace('days', 'Days left')
    .replace('hours', 'Hours left')
    .replace('left ago', 'ago');

export const getDateLong = (date) =>
  date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
