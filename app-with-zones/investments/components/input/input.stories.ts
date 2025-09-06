import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Input from './input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
}

export const WithError: Story = {
  args: {
    placeholder: 'Digite algo...',
    error: 'Campo obrigatório',
  },
}
