'use client';

import Eye from '@/assets/icons/eye.svg';
import { bankStatementData, dashboardHeroData } from '@/data/global-data';
import { getCurrentDate } from '@/utils/date';
import ManWithMoney from '@/assets/images/man-w-money-ilustration.svg';
import useLocalStorage from '@/hooks/use-local-storage';
import { getBalanceByBankStatement } from '@/utils/bank-statement-calc';
import Graphism from '@/assets/images/graphism.svg';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IBankStatement } from '@/types/types';

interface IDashboardHero {
  amountLabel: string;
  accountLabel: string;
}

const DashboardHero = () => {
  const { accountLabel, amountLabel } = dashboardHeroData as IDashboardHero;
  const { transactions } = bankStatementData as IBankStatement;
  const [isAmountVisible, setIsAmountVisible] = useState<boolean>(true);
  const [userName, setUserName] = useState('Usuário');

  const { getValue: storedBalance } = useLocalStorage(
    'statement',
    transactions
  );
  const calculatedBalance = getBalanceByBankStatement(storedBalance());

  const balanceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(calculatedBalance);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const parsedCookies = cookies.map((cookie) => cookie.trim());
    const userCookie = parsedCookies.find((cookie) =>
      cookie.startsWith('username=')
    );
    if (userCookie) {
      const value = userCookie.split('=')[1];
      setUserName(decodeURIComponent(value));
    }
  }, []);

  return (
    <section className="relative flex flex-col bg-primary p-8 pb-7 pr-30 rounded-lg min-h-100 md:items-start md:flex-row sm:items-center xs:items-center overflow-hidden">
      <Graphism className="lg:hidden absolute bottom-0 right-0 md:right-auto md:left-0 w-[9rem] md:w-[11.25rem] h-auto" />
      <Graphism className="lg:hidden absolute top-0 left-0 md:left-auto md:right-0 w-[9rem] md:w-[11.25rem] h-auto rotate-180" />
      <div className="flex-1">
        <h1 className="font-bold text-white text-2xl mb-6">{`Olá, ${userName}! :)`}</h1>
        <span className="text-white text-sm">{getCurrentDate}</span>
        <ManWithMoney className="hidden md:block lg:hidden w-[17.6875rem] h-auto mt-12" />
      </div>
      <div className="flex flex-col mt-10 lg:mt-24 min-w-[11.375rem]">
        <div className="flex items-center gap-6">
          <h2 className="font-semibold text-white text-xl">{amountLabel}</h2>
          <button
            className="relative"
            onClick={() => setIsAmountVisible(!isAmountVisible)}
            aria-label={
              isAmountVisible
                ? 'Ocultar saldo da conta'
                : 'Mostrar saldo da conta'
            }
            aria-pressed={!isAmountVisible}
          >
            <span
              className={twMerge(
                'absolute top-1/2 left-1/2 -translate-1/2 w-[0.125rem] h-8 rotate-45 bg-orange',
                isAmountVisible ? 'hidden' : 'block'
              )}
            />
            <Eye className="w-6" />
          </button>
        </div>
        <span className="w-full h-[0.125rem] bg-white lg:bg-orange my-4" />
        <span className="text-white text-base">{accountLabel}</span>
        <span className="font-bold text-white text-3xl mt-2">
          {isAmountVisible
            ? balanceFormatted
            : balanceFormatted.replaceAll(/./g, '•')}
        </span>
      </div>
      <ManWithMoney className="md:hidden w-[17.6875rem] h-auto mt-12" />
    </section>
  );
};

export default DashboardHero;
