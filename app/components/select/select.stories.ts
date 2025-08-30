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
      { label: 'Opção 1', value: '1' },
      { label: 'Opção 2', value: '2' },
      { label: 'Opção 3', value: '3' },
    ],
    placeholder: 'Selecione uma opção',
    borderColor: 'blue',
  },
}

export const WithDefaultValue: Story = {
  args: {
    options: [
      { label: 'Opção A', value: 'A' },
      { label: 'Opção B', value: 'B' },
      { label: 'Opção C', value: 'C' },
    ],
    defaultValue: 'B',
    placeholder: 'Escolha uma letra',
    borderColor: 'green',
  },
}

export const CustomBorderColor: Story = {
  args: {
    options: [
      { label: 'Vermelho', value: 'vermelho' },
      { label: 'Verde', value: 'verde' },
      { label: 'Azul', value: 'azul' },
    ],
    placeholder: 'Cor favorita',
    borderColor: 'blue',
  },
}
