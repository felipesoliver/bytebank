process.env.NODE_ENV = 'test'

const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../src/index')

jest.setTimeout(30000)

const userPayload = {
  username: 'Test User',
  email: 'test-user@example.com',
  password: 'password123'
}

describe('Financial manager API', () => {
  let token
  let accountId
  let transactionId

  beforeAll(async () => {
    if (app.ready) {
      await app.ready
    }
  })

  afterAll(async () => {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.dropDatabase()
      await mongoose.connection.close()
    }
  })

  test('creates a new user', async () => {
    const response = await request(app)
      .post('/user')
      .send(userPayload)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('message', 'usuário criado com sucesso')
    expect(response.body).toHaveProperty(['result', 'id'])
  })

  test('authenticates the user and returns a token', async () => {
    const response = await request(app)
      .post('/user/auth')
      .send({ email: userPayload.email, password: userPayload.password })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('result.token')

    token = response.body.result.token
    expect(typeof token).toBe('string')
  })

  test('retrieves accounts related to the authenticated user', async () => {
    const response = await request(app)
      .get('/account')
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('result.account')

    const accounts = response.body.result.account
    expect(Array.isArray(accounts)).toBe(true)
    expect(accounts.length).toBeGreaterThan(0)

    accountId = accounts[0].id
    expect(accountId).toBeDefined()
  })

  test('creates a new transaction for the user account', async () => {
    const payload = {
      accountId,
      value: 200,
      type: 'Debit',
      from: 'Loja Exemplo',
      to: 'Carteira',
      anexo: 'Recibo de compra',
      urlAnexo: 'https://example.com/anexos/recibo.pdf'
    }

    const response = await request(app)
      .post('/account/transaction')
      .set('Authorization', `Bearer ${token}`)
      .send(payload)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('result.id')
    expect(response.body.result).toMatchObject({
      accountId,
      type: 'Debit',
      anexo: payload.anexo,
      urlAnexo: payload.urlAnexo
    })
    expect(response.body.result.value).toBeLessThan(0)

    transactionId = response.body.result.id
  })

  test('updates an existing transaction', async () => {
    const payload = {
      value: 150,
      type: 'Credit',
      urlAnexo: 'https://example.com/anexos/recibo-atualizado.pdf'
    }

    const response = await request(app)
      .put(`/account/transaction/${transactionId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(payload)

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('result.id', transactionId)
    expect(response.body.result.value).toBe(150)
    expect(response.body.result).toMatchObject({
      type: 'Credit',
      urlAnexo: payload.urlAnexo
    })
  })

  test('returns the account statement with transactions', async () => {
    const response = await request(app)
      .get(`/account/${accountId}/statement`)
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('result.transactions')

    const transactions = response.body.result.transactions
    expect(Array.isArray(transactions)).toBe(true)
    expect(transactions.find((transaction) => transaction.id === transactionId)).toBeTruthy()
  })

  test('deletes the transaction', async () => {
    const response = await request(app)
      .delete(`/account/transaction/${transactionId}`)
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(204)
  })

  test('returns empty statement after transaction removal', async () => {
    const response = await request(app)
      .get(`/account/${accountId}/statement`)
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('result.transactions')

    const transactions = response.body.result.transactions
    expect(Array.isArray(transactions)).toBe(true)
    expect(transactions.length).toBe(0)
  })
})
