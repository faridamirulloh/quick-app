import dayjs from 'dayjs';

export const getDateHour = (date) => dayjs(date).format('DD/MM/YYYY HH:mm');
