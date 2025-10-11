'use client'

import React from 'react'
import AsideNav from '@/layouts/blocks/aside-nav';
import DashboardHero from '@/layouts/blocks/dashboard-hero';
import TransactionCard from '@/layouts/blocks/transactions';
import BankStatement from '@/layouts/blocks/bank-statement';
import { twMerge } from 'tailwind-merge';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const DashboardLayout = () => {
  const authStatus = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <div
      className={twMerge(
        'opacity-0',
        authStatus && 'animate-fadeup',
      )}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
        <AsideNav />
        <div className="lg:col-span-7 flex flex-col gap-5">
          <DashboardHero />
          <TransactionCard />
        </div>
        <BankStatement />
      </div>
    </div>
  );
}

export default DashboardLayout
