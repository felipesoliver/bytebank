import Image from 'next/image';
import RateCard from './investment-rate-card';

import investimentChart from '@/assets/images/investiment-chart.png';
import investimentMobileChart from '@/assets/images/investiment-chart-mobile.png';

const InvestmentChart = () => (
  <RateCard>
    <Image
      className="block md:hidden mx-auto"
      src={investimentMobileChart}
      alt="gráfico que demonstra os tipos de investimentos"
      width={382}
      height={152}
    />
    <Image
      className="hidden md:block mx-auto"
      src={investimentChart}
      alt="gráfico que demonstra os tipos de investimentos"
      width={382}
      height={152}
    />
  </RateCard>
);

export default InvestmentChart;
