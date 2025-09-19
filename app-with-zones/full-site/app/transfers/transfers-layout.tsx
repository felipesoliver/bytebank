'use client';

import AsideNav from '@/layouts/blocks/aside-nav';
import useStateController from '@/hooks/use-state-controller';
import Crud from '@/layouts/blocks/crud';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { withAuth } from '@/components/auth/withAuth';

function TransfersLayout() {
  const { refreshExtract } = useStateController();

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

export default withAuth(TransfersLayout);
