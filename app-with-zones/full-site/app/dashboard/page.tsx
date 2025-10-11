import { Metadata } from 'next';
import DashboardLayout from './dashboard-layout';

export const metadata: Metadata = {
  title: 'Bytebank | Dashboard',
};

export default function DashboardPage() {
  return <DashboardLayout />
}
