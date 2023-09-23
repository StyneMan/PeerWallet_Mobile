import error from '../assets/images/arrow_error.png';
import success from '../assets/images/arrow_success.png';

export interface TransactionModel {
  name: string;
  status: string;
  image: any;
  summary: string;
  amount: string;
}

export const dummyRecentTransnactions: TransactionModel[] = [
  {
    amount: '+$1,436.00',
    image: success,
    name: 'P2P Auto Funding',
    status: 'success',
    summary: '12:29PM, July 10',
  },
  {
    amount: '-$436.00',
    image: error,
    name: 'P2P Auto Funding',
    status: 'error',
    summary: '12:29PM, July 10',
  },
  {
    amount: '+$1,4366.00',
    image: success,
    name: 'P2P Auto Funding',
    status: 'success',
    summary: '12:29PM, July 10',
  },
  {
    amount: '-$336.00',
    image: error,
    name: 'P2P Auto Funding',
    status: 'success',
    summary: '12:29PM, July 10',
  },
  {
    amount: '$1,4366.00',
    image: success,
    name: 'P2P Auto Funding',
    status: 'success',
    summary: '12:29PM, July 10',
  },
];
