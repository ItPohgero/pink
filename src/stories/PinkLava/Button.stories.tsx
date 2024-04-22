import type { Meta, StoryObj } from '@storybook/react'
import Button from '../../components/Button'
const meta = {
    title: 'PINK/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        size: { control: { type: 'radio' } },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'button',
    },
}
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'button',
    },
}
export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        children: 'button',
    },
}
export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'button',
    },
}
