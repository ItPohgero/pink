import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../components'
const meta = {
    title: 'PINK/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'big',
        children: 'button',
    },
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'big',
        children: 'button',
    },
}
export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        size: 'big',
        children: 'button',
    },
}
export const Ghost: Story = {
    args: {
        variant: 'ghost',
        size: 'big',
        children: 'button',
    },
}
