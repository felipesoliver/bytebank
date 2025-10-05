'use client';

import { bankStatementData } from '@/data/global-data';
import { IBankStatementItem } from '@/types/types';

import EditIcon from '@/assets/icons/edit.svg';

import { currencyFormatedToReal } from '@/utils/currency';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { formatDate, formatMonth } from '@/utils/date';
import { getUser } from '@/app/api/user';

const BankStatement = () => {
  const { title } = bankStatementData;
  const [transactions, setTransactions] = useState<IBankStatementItem[]>([]);

  useEffect(() => {
    getUser()
    .then((res) => {
      setTransactions(res?.statement);
    })
    .catch((err) => {
      console.error('Error to verify user data', err)
    })
  }, []);

  return (
    <section className="group relative lg:col-span-3 rounded-lg bg-white px-6 py-8">
      <Link
        className="absolute top-5 right-5 lg:opacity-0 lg:group-hover:opacity-100 duration-200 transition-all"
        href="/transfers"
      >
        <EditIcon className="w-6 h-6" />
      </Link>

      <h2 className="text-[1.5625rem] font-semibold">{title}</h2>
      <ul>
        {transactions?.map((transaction: IBankStatementItem, index) => (
          <li
            key={`transaction-${index}`}
            className="flex flex-col gap-2 pt-6 pb-2 border-b border-green opacity-0 animate-fadein"
          >
            <span className="text-xs text-green font-semibold">
              {formatMonth(transaction.date)}
            </span>
            <div className="flex items-center justify-between">
              <p className="!leading-none">
                {transaction.type === 'Credit' ? 'Depósito' : 'Transferência'}
              </p>
              <span className="text-xs text-[#8B8B8B]">{formatDate(transaction.date)}</span>
            </div>
            <span className="font-semibold">{`${currencyFormatedToReal(
              transaction.value
            )}`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BankStatement;
