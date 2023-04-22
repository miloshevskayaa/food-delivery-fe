import dayjs from 'dayjs';
import { DateFormat } from './models';

export const format = (date: Date, formatTo: DateFormat) =>
  dayjs(date).format(formatTo);

export const toDate = (date: string, formatFrom: string = 'YYYY-MM-DD') =>
  dayjs(date, formatFrom);
