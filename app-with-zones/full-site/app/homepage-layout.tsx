'use client';

import LoggedOutLayout from '@/layouts/blocks/logged-out-layout';

export default function Homepagelayout() {
  return (
    <div className="w-screen min-h-screen py-10 bg-gradient-to-b from-green-dark to-white max-w-full">
      <div className="container">
        <LoggedOutLayout />
      </div>
    </div>
  );
}
