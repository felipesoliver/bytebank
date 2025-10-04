import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Select from './select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'Opção 1', value: 'Credit' },
      { label: 'Opção 2', value: 'Debit' },
      { label: 'Opção 3', value: 'Credit' },
    ],
    placeholder: 'Selecione uma opção',
    borderColor: 'blue',
  },
}

export const WithDefaultValue: Story = {
  args: {
    options: [
      { label: 'Opção A', value: 'Credit' },
      { label: 'Opção B', value: 'Debit' },
      { label: 'Opção C', value: 'Credit' },
    ],
    defaultValue: 'B',
    placeholder: 'Escolha uma letra',
    borderColor: 'green',
  },
}

export const CustomBorderColor: Story = {
  args: {
    options: [
      { label: 'Vermelho', value: 'Credit' },
      { label: 'Verde', value: 'Debit' },
      { label: 'Azul', value: 'Credit' },
    ],
    placeholder: 'Cor favorita',
    borderColor: 'blue',
  },
}
