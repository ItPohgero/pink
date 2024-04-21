import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components'
const meta = {
    title: 'NIU/Action/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['button', 'submit'],
            control: { type: 'radio' },
        },
        size: { control: { type: 'radio' } },
        onClick: { action: 'clicked' },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        type: 'button',
        label: 'Button',
        variant: 'primary',
    },
}
export const Secondary: Story = {
    args: {
        type: 'button',
        label: 'Button',
        variant: 'secondary',
    },
}
