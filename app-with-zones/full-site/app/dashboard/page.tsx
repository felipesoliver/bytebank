'use client';

import AsideNav from '@/layouts/blocks/aside-nav';
import DashboardHero from '@/layouts/blocks/dashboard-hero';
import TransactionCard from '@/layouts/blocks/transactions';
import BankStatement from '@/layouts/blocks/bank-statement';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function DashboardPage() {
  const refreshExtract = useSelector(
    (state: RootState) => state.extract.refreshExtract
  );

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
      <AsideNav />
      <div className="lg:col-span-7 flex flex-col gap-5">
        <DashboardHero />
        <TransactionCard />
      </div>
      <BankStatement key={refreshExtract} />
    </div>
  );
}
