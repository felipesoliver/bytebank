const TransactionDTO = require('../models/DetailedAccount')


class AccountController {
  constructor(di = {}) {
    this.di = Object.assign({
      userRepository: require('../infra/mongoose/repository/userRepository'),
      accountRepository: require('../infra/mongoose/repository/accountRepository'),
      cardRepository: require('../infra/mongoose/repository/cardRepository'),
      transactionRepository: require('../infra/mongoose/repository/detailedAccountRepository'),

      saveCard: require('../feature/Card/saveCard'),
      salvarUsuario: require('../feature/User/salvarUsuario'),
      saveAccount: require('../feature/Account/saveAccount'),
      getUser: require('../feature/User/getUser'),
      getAccount: require('../feature/Account/getAccount'),
      saveTransaction: require('../feature/Transaction/saveTransaction'),
      getTransaction: require('../feature/Transaction/getTransaction'),
      updateTransaction: require('../feature/Transaction/updateTransaction'),
      deleteTransaction: require('../feature/Transaction/deleteTransaction'),
      getCard: require('../feature/Card/getCard'),
    }, di)
  }

  async find(req, res) {
    const { accountRepository, getAccount, getCard, getTransaction, transactionRepository, cardRepository } = this.di

    try {
      const userId =   req.user.id
      const account = await getAccount({ repository: accountRepository,  filter: { userId } })
      const transactions = await getTransaction({ filter: { accountId: account[0].id }, repository: transactionRepository })
      const cards = await getCard({ filter: { accountId: account[0].id }, repository: cardRepository })
    
      res.status(200).json({
        message: 'Conta encontrada carregado com sucesso',
        result: {
          account,
          transactions,
          cards,
        }
      })
    } catch (error) {
      res.status(500).json({
        message: 'Erro no servidor'
      })
    }
    
  }

  async createTransaction(req, res) {
    const { saveTransaction, transactionRepository } = this.di
    const { accountId, value, type, from, to, anexo } = req.body
    const urlAnexo = req.body.urlAnexo ?? req.body.urlanexo ?? null
    const transactionDTO = new TransactionDTO({ accountId, value, from, to, anexo, urlAnexo, type, date: new Date() })

    const transaction = await saveTransaction({ transaction: transactionDTO, repository: transactionRepository })
    
    res.status(201).json({
      message: 'Transação criada com sucesso',
      result: transaction
    })
  }

  async updateTransaction(req, res) {
    const { updateTransaction, transactionRepository } = this.di
    const { id } = req.params
    const { value, type, from, to, anexo } = req.body
    const urlAnexo = req.body.urlAnexo ?? req.body.urlanexo

    const updates = {
      value,
      type,
      from,
      to,
      anexo,
      urlAnexo
    }

    Object.keys(updates).forEach((key) => updates[key] === undefined && delete updates[key])

    try {
      const transaction = await updateTransaction({ transactionId: id, updates, repository: transactionRepository })

      if (!transaction) {
        return res.status(404).json({ message: 'Transação não encontrada' })
      }

      res.status(200).json({
        message: 'Transação atualizada com sucesso',
        result: transaction
      })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar transação' })
    }
  }

  async deleteTransaction(req, res) {
    const { deleteTransaction, transactionRepository } = this.di
    const { id } = req.params

    try {
      const deleted = await deleteTransaction({ transactionId: id, repository: transactionRepository })

      if (!deleted) {
        return res.status(404).json({ message: 'Transação não encontrada' })
      }

      res.status(204).send()
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar transação' })
    }
  }

  async getStatment(req, res) {
    const { getTransaction, transactionRepository } = this.di

    const { accountId } = req.params

    const transactions = await getTransaction({ filter: { accountId } ,  repository: transactionRepository})
    res.status(201).json({
      message: 'Transação criada com sucesso',
      result: {
        transactions
      }
    })
  }
}

module.exports = AccountController
