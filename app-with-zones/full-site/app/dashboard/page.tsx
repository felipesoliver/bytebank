'use client';

import { useEffect, useState } from 'react';
import AsideNav from '@/layouts/blocks/aside-nav';
import DashboardHero from '@/layouts/blocks/dashboard-hero';
import TransactionCard from '@/layouts/blocks/transactions';
import BankStatement from '@/layouts/blocks/bank-statement';

export default function DashboardPage() {
  const [firstVisit, setFirstVisit] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem('dashboardVisited');
    if (!visited) {
      setFirstVisit(true); // ativa animação na primeira visita
      sessionStorage.setItem('dashboardVisited', 'true');
    }
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform ${
        firstVisit ? 'opacity-0 -translate-y-5' : 'opacity-100 translate-y-0'
      }`}
      onAnimationEnd={() => setFirstVisit(false)} // remove a animação depois
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
