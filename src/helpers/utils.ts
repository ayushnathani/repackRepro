import dayjs, {Dayjs} from 'dayjs';

export const toDateString = (date: Date | Dayjs) =>
  dayjs(date).format('YYYY-MM-DD');
