'use client';

import AsideNav from '@/layouts/blocks/aside-nav';
import DashboardHero from '@/layouts/blocks/dashboard-hero';
import BankStatement from '@/layouts/blocks/bank-statement';

import useStateController from '@/hooks/use-state-controller';
import TransactionCard from '@/layouts/blocks/transactions';
import LoggedOutLayout from '@/layouts/blocks/logged-out-layout';
import { useEffect } from 'react';

export default function Homepagelayout() {
  const { refreshExtract, authStatus, setIsLoggedIn } = useStateController();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token && token.trim() !== '') {
      setIsLoggedIn(true);
      console.log('token', token);
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  return authStatus ? (
    <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
      <AsideNav />
      <div className="lg:col-span-7 flex flex-col gap-5">
        <DashboardHero />
        <TransactionCard />
      </div>
      <BankStatement key={refreshExtract} />
    </div>
  ) : (
    <div className="w-screen min-h-screen py-10 bg-gradient-to-b from-green-dark to-white max-w-full">
      <div className="container">
        <LoggedOutLayout />
      </div>
    </div>
  );
}
