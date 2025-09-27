import { useEffect, useState } from 'react';

import { TransactionFormProps } from './types';
import CustomSelect from '@/components/select';
import Input from '@/components/input';
import Button from '@/components/button';
import { getBalanceByBankStatement } from '@/utils/bank-statement-calc';

import { toast } from 'react-toastify';
import { getStatement } from '@/services/statement';
import { createTransaction } from '@/app/api/transactions';
import { getUser } from '@/services/user';

const TransactionForm = ({
  transactionType,
  placeholderInput,
  placeholderSelect,
}: TransactionFormProps) => {

  const [selectedTransaction, setSelectedTransaction] = useState<'Debit' | 'Credit'>('Credit');
  const [currentBalance, setCurrentBalance] = useState<number>(0)
  const [userId, setUserId] = useState<string>('');
  const [amount, setAmount] = useState<string>('');


  useEffect(() => {
    getStatement()
    .then((res) => {
      setCurrentBalance(getBalanceByBankStatement(res) || 0)
    })
    .catch((err) => {
      console.error('Error to verify statement data', err)
    })

    getUser()
    .then((res) => {
      setUserId(res.result[0]?.id)
    })
    .catch((err) => {
      console.error('Error to verify user data', err)
    })
  }, []);

  const isInsufficientBalance = () =>
    selectedTransaction === 'Debit' &&
    currentBalance - Number(amount) < 0;

  function showInsufficientBalanceMessage() {
    toast.warning('Saldo insuficiente');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isInsufficientBalance()) {
      showInsufficientBalanceMessage();
      return;
    }

    const newTransaction = async () =>  {
      await createTransaction({
        accountId: userId,
        type: selectedTransaction,
        value: Number(amount),
        anexo: '',
        from: '',
        to: ''
      })
      .catch((err) => {
        console.error('Error to create new transaction', err)
      })
    }
    newTransaction()

    toast.success('Transação realizada com sucesso!');
    setSelectedTransaction('Credit');
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
        onValueChange={(value) => setSelectedTransaction(value as 'Credit' | 'Debit')}
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
