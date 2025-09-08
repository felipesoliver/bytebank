export interface ICommonLink {
  text: string;
  url: string;
  blank: boolean;
}

export interface ISocialLink {
  type: string;
  url: string;
  blank: boolean;
}

export type ICtaVariant =
  | 'green'
  | 'green-inverted'
  | 'orange'
  | 'orange-inverted'
  | 'black'
  | 'black-inverted';

export interface ICta {
  variant: ICtaVariant;
  text: string;
  className?: string;
}

interface IOption {
  value: string;
  label: string;
}

export interface ICustomSelect {
  options: IOption[];
  placeholder?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
  borderColor?: 'blue' | 'green';
  label?: string;
  id?: string;
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  variant?: 'primary' | 'secondary' | 'link';
  fullWidth?: boolean;
  centered?: boolean;
}

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  label?: string;
  id?: string;
  labelStyle?: string;
}

export interface IBankStatementItem {
  date: string;
  month: string;
  amount: number;
  type: string;
  id?: number;
}

export interface IBankStatement {
  title: string;
  subtitle: string;
  transactions: IBankStatementItem[];
}

interface ITransactionType {
  label: string;
  value: string;
}

export interface ITransaction {
  title: string;
  transactionType: ITransactionType[];
  placeholderInput: string;
  placeholderSelect: string;
  placeholderDate: string;
}
