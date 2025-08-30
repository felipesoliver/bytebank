export const currencyFormatedToReal = (value: number) => {
  const valueFormatted = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return valueFormatted
};
