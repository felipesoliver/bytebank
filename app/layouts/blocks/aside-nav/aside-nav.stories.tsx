import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import AsideNav from './aside-nav'
import React from 'react'

const meta: Meta<typeof AsideNav> = {
    title: 'Blocos/AsideNav',
    component: AsideNav,
    tags: ['autodocs'],
    parameters: {
        docs: {
          description: {
            component: `
      O componente **AsideNav** renderiza uma navegação lateral vertical com base nos dados definidos. Usado para menus Mobile`,
          },
        },
      }
      
  }

  export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <AsideNav />,
    parameters: {
      viewport: {
          defaultViewport: 'desktop',
        },
    }
  }
  
  