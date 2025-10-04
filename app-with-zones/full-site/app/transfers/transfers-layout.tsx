'use client';

import AsideNav from '@/layouts/blocks/aside-nav';
import Crud from '@/layouts/blocks/crud';

function TransfersLayout() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
      <AsideNav />
      <div className="lg:col-span-10">
        <Crud />
      </div>
    </div>
  );
}

export default TransfersLayout;
