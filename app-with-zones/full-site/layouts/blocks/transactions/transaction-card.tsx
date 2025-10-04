'use client';

import TransactionsCardLayout from './transaction-card-layout';
import TransactionForm from './transaction-form';
import { transactionsData } from '@/data/global-data';

import Graphism from '@/assets/images/graphism-blue.svg';
import BgImage from '@/assets/images/transaction-image.svg';
import { ITransaction } from '@/types/types';

const TransactionCard = () => {
  const { title, placeholderInput, placeholderSelect, transactionType } =
    transactionsData as ITransaction;

  return (
    <TransactionsCardLayout>
      <h2 className="font-bold text-white text-[25px] mb-6 text-center md:text-left z-2">
        {title}
      </h2>
      <Graphism className="absolute bottom-0 right-0 md:right-auto md:left-0 w-[9rem] md:w-[11.25rem] h-auto" />
      <Graphism className="absolute top-0 left-0 md:left-auto md:right-0 w-[9rem] md:w-[11.25rem] h-auto rotate-180" />
      <TransactionForm
        transactionType={transactionType}
        placeholderInput={placeholderInput}
        placeholderSelect={placeholderSelect}
      />
      <BgImage className="absolute bottom-6 right-6 w-[17.5rem] md:w-[20.625rem] h-auto md:h-[14.375rem] lg:hidden" />
    </TransactionsCardLayout>
  );
};

export default TransactionCard;
