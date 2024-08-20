import {toDateString} from '../helpers/utils';
import dayjs from 'dayjs';

export enum FILTER_ENUMS {
  ALL = 'ALL',
  ALL_BANKS = 'ALL',
  ALL_CC = 'ALL_CREDIT_CARDS',
}

const today = toDateString(dayjs());
console.log({today});
