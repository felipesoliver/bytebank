import React from 'react';

const TransactionsCardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section
      className="flex flex-col relative pb-[8.8125rem] rounded-lg overflow-hidden min-h-[39.5625rem] md:min-h-[29.875rem] lg:min-h-100 p-4 md:p-8 lg:p-8 bg-gray-medium"
    >
      {children}
    </section>
  );
};

export default TransactionsCardLayout;
