import { investmentsData } from '@/data/global-data';
import { InvestmentProps } from './types';
import { currencyFormatedToReal } from '@/utils/currency';

const InvestmentHeader = () => {
  const { title, total } = investmentsData as InvestmentProps;

  return (
    <>
      <h2 className="font-bold text-black text-[25px] mb-10 text-center md:text-left">
        {title}
      </h2>
      <p className="font-normal text-[var(--color-green-dark)] text-[25px] mb-6 text-center md:text-left">
        Total: R$ {currencyFormatedToReal(total)}
      </p>
    </>
  );
};

export default InvestmentHeader;
