'use client';

import Eye from '@/assets/icons/eye.svg';
import { dashboardHeroData } from '@/data/global-data';
import { getCurrentDate } from '@/utils/date';
import ManWithMoney from '@/assets/images/man-w-money-ilustration.svg';
import Graphism from '@/assets/images/graphism.svg';
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { getUser } from '@/app/api/user';
import { getBalanceByBankStatement } from '@/utils/bank-statement-calc';

interface IDashboardHero {
  amountLabel: string;
  accountLabel: string;
}

const DashboardHero = () => {
  const [userName, setUserName] = useState('');
  const { accountLabel, amountLabel } = dashboardHeroData as IDashboardHero;
  const [isAmountVisible, setIsAmountVisible] = useState<boolean>(true);
  const [currentBalance, setCurrentBalance] = useState<number>(0)

  useEffect(() => {
    getUser()
    .then((res) => {
      setUserName(res?.user[0]?.username);
      setCurrentBalance(getBalanceByBankStatement(res?.statement) || 0)
    })
    .catch((err) => console.error(err))
  }, []);

  const balanceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currentBalance);

  return (
    <section className="relative flex flex-col bg-primary p-8 pb-7 pr-30 rounded-lg min-h-100 md:items-start md:flex-row sm:items-center xs:items-center overflow-hidden">
      <Graphism className="lg:hidden absolute bottom-0 right-0 md:right-auto md:left-0 w-[9rem] md:w-[11.25rem] h-auto" />
      <Graphism className="lg:hidden absolute top-0 left-0 md:left-auto md:right-0 w-[9rem] md:w-[11.25rem] h-auto rotate-180" />
      <div className="flex-1 opacity-0 animate-fadein">
        <h1 className="font-bold text-white text-2xl mb-6">{`Olá, ${userName}! :)`}</h1>
        <span className="text-white text-sm">{getCurrentDate}</span>
        <ManWithMoney className="hidden md:block lg:hidden w-[17.6875rem] h-auto mt-12" />
      </div>
      <div className="flex flex-col mt-10 lg:mt-24 min-w-[11.375rem] opacity-0 animate-fadein">
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
