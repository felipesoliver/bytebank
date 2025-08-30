interface Rate {
  title: string;
  price: number;
}

export interface InvestmentProps {
  title: string;
  total: number;
  sectionTitle: string;
  rates: Rate[];
}
