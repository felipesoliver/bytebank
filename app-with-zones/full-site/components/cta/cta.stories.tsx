import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Cta from './cta'

const meta: Meta<typeof Cta> = {
  title: 'Components/CTA',
  component: Cta,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['green', 'green-inverted', 'orange', 'orange-inverted', 'black', 'black-inverted'],
    },
    text: {
      control: { type: 'text' },
    },
    onClick: {
      action: 'clicked',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Clique aqui',
    variant: 'green',
  },
}

export const Green: Story = {
  args: {
    text: 'Botão Verde',
    variant: 'green',
  },
}

export const GreenInverted: Story = {
  args: {
    text: 'Botão Verde Invertido',
    variant: 'green-inverted',
  },
}

export const Orange: Story = {
  args: {
    text: 'Botão Laranja',
    variant: 'orange',
  },
}

export const OrangeInverted: Story = {
  args: {
    text: 'Botão Laranja Invertido',
    variant: 'orange-inverted',
  },
}

export const Black: Story = {
  args: {
    text: 'Botão Preto',
    variant: 'black',
  },
}

export const BlackInverted: Story = {
  args: {
    text: 'Botão Preto Invertido',
    variant: 'black-inverted',
  },
}

export const WithCustomClass: Story = {
  args: {
    text: 'Botão com Classe Customizada',
    variant: 'green',
    className: 'w-full max-w-xs',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Cta text="Green" variant="green" />
      <Cta text="Green Inverted" variant="green-inverted" />
      <Cta text="Orange" variant="orange" />
      <Cta text="Orange Inverted" variant="orange-inverted" />
      <Cta text="Black" variant="black" />
      <Cta text="Black Inverted" variant="black-inverted" />
    </div>
  ),
}
