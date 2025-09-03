/* eslint-disable react-hooks/exhaustive-deps */
import { bankStatementData } from '@/data/global-data';
import useLocalStorage from '@/hooks/use-local-storage';
import { IBankStatement, IBankStatementItem } from '@/types/types';
import React, { useState } from 'react';

import EditIcon from '@/assets/icons/edit.svg';
import DeleteIcon from '@/assets/icons/delete.svg';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const BankStatement = () => {
  const { title, transactions } = bankStatementData as IBankStatement;
  const { storedValue } = useLocalStorage('statement', transactions);
  useState<IBankStatementItem[]>(storedValue);

  const transactionsStore = useSelector(
    (state: RootState) => state.transactions.transactions,
  );

  return (
    <section className="group relative lg:col-span-3 rounded-lg bg-white px-6 py-8">
      <Link
        className="absolute top-5 right-[3.25rem] lg:opacity-0 lg:group-hover:opacity-100 duration-200 transition-all"
        href="/transfers"
      >
        <EditIcon className="w-6 h-6" />
      </Link>
      <Link
        className="absolute top-5 right-5 lg:opacity-0 lg:group-hover:opacity-100 duration-200 transition-all"
        href="/transfers"
      >
        <DeleteIcon className="w-6 h-6" />
      </Link>
      <h2 className="text-[1.5625rem] font-semibold">{title}</h2>
      <ul>
        {transactionsStore.map((transaction: IBankStatementItem, index) => (
          <li
            key={`transaction-${index}`}
            className="flex flex-col gap-2 pt-6 pb-2 border-b border-green"
          >
            <span className="text-xs text-green font-semibold">
              {transaction.month}
            </span>
            <div className="flex items-center justify-between">
              <p className="!leading-none">
                {transaction.type === 'deposit' ? 'Depósito' : 'Transferência'}
              </p>
              <span className="text-xs text-[#8B8B8B]">{transaction.date}</span>
            </div>
            <span className="font-semibold">
              {`${transaction.type !== 'deposit' ? '-' : ''}R$ ${transaction.amount}`}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BankStatement;
