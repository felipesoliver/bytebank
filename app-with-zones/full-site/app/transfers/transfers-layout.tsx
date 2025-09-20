'use client';

import AsideNav from '@/layouts/blocks/aside-nav';
import Crud from '@/layouts/blocks/crud';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

function TransfersLayout() {
  const refreshExtract = useSelector(
    (state: RootState) => state.extract.refreshExtract
  );

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.replace('/');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) {
    return null;
  }

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
      <AsideNav />
      <div className="lg:col-span-10">
        <Crud key={refreshExtract} />
      </div>
    </div>
  );
}

export default TransfersLayout;
