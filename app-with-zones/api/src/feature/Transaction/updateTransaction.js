const DetailedAccountModel = require("../../models/DetailedAccount")

const updateTransaction = async ({
  transactionId,
  updates = {},
  repository
}) => {
  const currentTransaction = await repository.getById(transactionId)
  if (!currentTransaction) return null

  const dataToPersist = { ...updates }
  const receivedValue = Object.prototype.hasOwnProperty.call(dataToPersist, 'value')

  if (receivedValue) {
    const effectiveType = dataToPersist.type ?? currentTransaction.type
    const shouldReverseValue = (effectiveType === 'Debit' && dataToPersist.value > 0) ||
      (effectiveType === 'Credit' && dataToPersist.value < 0)

    if (shouldReverseValue) {
      dataToPersist.value = dataToPersist.value * -1
    }
  }

  const result = await repository.updateById(transactionId, dataToPersist)
  if (!result) return null

  const plainResult = result.toJSON ? result.toJSON() : result
  return new DetailedAccountModel(plainResult)
}

module.exports = updateTransaction
