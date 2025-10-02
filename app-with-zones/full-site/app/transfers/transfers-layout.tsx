'use client';

import AsideNav from '@/layouts/blocks/aside-nav';
import Crud from '@/layouts/blocks/crud';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

function TransfersLayout() {
  const refreshExtract = useSelector(
    (state: RootState) => state.extract.refreshExtract
  );

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
