import { IBankStatementItem } from "@/types/types"

export function getBalanceByBankStatement(transactions: IBankStatementItem[]): number {
  let balance = 0

  if (!transactions || transactions.length === 0) {
    return balance
  }

  transactions.forEach((transaction) => {
    if (transaction.type === "Credit") {
      balance += transaction.value
    } else {
      balance -= transaction.value
    }
  })

  return balance
}
