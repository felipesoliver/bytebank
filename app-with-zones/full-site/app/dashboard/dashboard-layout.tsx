'use client'

import React, { useEffect, useState } from 'react'
import AsideNav from '@/layouts/blocks/aside-nav';
import DashboardHero from '@/layouts/blocks/dashboard-hero';
import TransactionCard from '@/layouts/blocks/transactions';
import BankStatement from '@/layouts/blocks/bank-statement';
import { twMerge } from 'tailwind-merge';

const DashboardLayout = () => {
  const [firstVisit, setFirstVisit] = useState<boolean>(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('dashboardVisited');
    if (!visited) {
      setFirstVisit(true);
      sessionStorage.setItem('dashboardVisited', 'true');
    }
  }, []);

  return (
    <div
      className={twMerge(
        firstVisit && 'opacity-0 animate-fadeup',
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
