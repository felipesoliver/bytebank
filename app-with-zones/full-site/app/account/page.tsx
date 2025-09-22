import { Metadata } from 'next';
import AsideNav from '@/layouts/blocks/aside-nav';
import Account from '@/layouts/blocks/account';

export const metadata: Metadata = {
  title: 'Bytebank | Account',
};

export default function AccountPage() {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-12 gap-5 py-5">
      <AsideNav />
      <div className="lg:col-span-10">
        <Account />
      </div>
    </div>
  );
}
