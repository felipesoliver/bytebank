export interface Option {
  label: string;
  value: 'Credit' | 'Debit';
}

export interface TransactionFormProps {
  transactionType: Option[];
  placeholderInput: string;
  placeholderSelect: string;
}

export interface TransactionCardProps extends TransactionFormProps {
  title: string;
  imageAlt: string;
}
