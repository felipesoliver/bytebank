const deleteTransaction = async ({
  transactionId,
  repository
}) => {
  const result = await repository.removeById(transactionId)
  return Boolean(result)
}

module.exports = deleteTransaction
