import { useState } from 'react';

import useLocalStorage from '@/hooks/use-local-storage';

import { TransactionFormProps } from './types';
import { getCurrentMonth, getCurrentDateShort } from '@/utils/date';
import CustomSelect from '@/components/select';
import Input from '@/components/input';
import Button from '@/components/button';
import { IBankStatement, IBankStatementItem } from '@/types/types';
import { getBalanceByBankStatement } from '@/utils/bank-statement-calc';
import { bankStatementData } from '@/data/global-data';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addTransaction } from '@/features/transactions/transactionSlice';
import { triggerRefresh } from '@/features/extract/extractSlice';

const TransactionForm = ({
  transactionType,
  placeholderInput,
  placeholderSelect,
}: TransactionFormProps) => {
  const { storedValue, setValue } = useLocalStorage<IBankStatementItem[]>(
    'statement',
    []
  );

  const { transactions } = bankStatementData as IBankStatement;
  const { getValue: storedBalance } = useLocalStorage(
    'statement',
    transactions
  );
  const calculatedBalance = getBalanceByBankStatement(storedBalance());

  const [selectedTransaction, setSelectedTransaction] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const isInsufficientBalance = () =>
    selectedTransaction === 'transfer' &&
    calculatedBalance - Number(amount) < 0;

  function showInsufficientBalanceMessage() {
    toast.warning('Saldo insuficiente');
  }

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isInsufficientBalance()) {
      showInsufficientBalanceMessage();
      return;
    }

    const newTransaction = {
      type: selectedTransaction,
      month: getCurrentMonth.replace(/^./, (str) => str.toUpperCase()),
      amount: Number(amount),
      date: getCurrentDateShort,
    } as IBankStatementItem;

    dispatch(
      addTransaction({
        type: selectedTransaction,
        month: getCurrentMonth.replace(/^./, (str) => str.toUpperCase()),
        amount: Number(amount),
        date: getCurrentDateShort,
      })
    );

    setValue([...storedValue, newTransaction]);
    toast.success('Transação realizada com sucesso!');
    dispatch(triggerRefresh());
    setSelectedTransaction('');
    setAmount('');
  };

  return (
    <form
      className="relative flex flex-col items-center lg:items-start md:items-start z-10"
      onSubmit={handleSubmit}
      aria-label="Formulário de transação bancária"
    >
      <CustomSelect
        borderColor="blue"
        options={transactionType}
        placeholder={placeholderSelect}
        className="mb-8 max-w-[21.875rem]"
        onValueChange={setSelectedTransaction}
        defaultValue={selectedTransaction}
        arial-label="Tipo de transação"
        id="transaction-type"
      />
      <div className="max-w-[9rem] md:max-w-[15.625rem]">
        <div className="w-full">
          <Input
            placeholder={placeholderInput}
            className="border-[var(--color-green-dark)] mb-8 bg-white text-center md:text-left"
            id="price"
            label="Valor"
            labelStyle="text-white font-semibold text-center md:text-left lg:text-left"
            autoComplete="off"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min="0.01"
            step="0.01"
            required
            aria-describedby="amount-help"
          />
          <div id="amount-help" className="sr-only">
            Digite o valor da transação em reais
          </div>
        </div>
        <div className="max-w-[9rem] md:max-w-[15.625rem]">
          <div className="w-full">
            <Button
              label="Concluir transação"
              onClick={() => {}}
              variant="primary"
              className="bg-[var(--color-green-dark)] py-0 md:min-w-[200px]"
              type="submit"
              disabled={Number(amount) <= 0 || !selectedTransaction}
              aria-label={`Concluir transação de ${
                selectedTransaction || 'tipo não selecionado'
              } no valor de R$ ${amount || '0,00'}`}
              fullWidth
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
