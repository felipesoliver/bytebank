import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import BankStatement from './bank-statement'
import React from 'react'

const meta: Meta<typeof BankStatement> = {
  title: 'Blocos/BankStatement',
  component: BankStatement,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'O componente **BankStatement** exibe um extrato bancário com entradas e saídas. Ele pode ser utilizado em páginas de resumo financeiro ou dashboards relacionados a movimentações bancárias.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <BankStatement />,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}
