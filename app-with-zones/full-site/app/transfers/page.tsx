import { Metadata } from 'next';
import TransfersLayout from './transfers-layout';

export const metadata: Metadata = {
  title: 'Bytebank | Transfers',
};

export default function TransfersPage() {
  return <TransfersLayout />;
}
