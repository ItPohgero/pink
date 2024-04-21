import type { Meta, StoryObj } from '@storybook/react'
import { Lozenge } from '../components'
const meta = {
    title: 'PINK/Action/Lozenge',
    component: Lozenge,
    tags: ['autodocs'],
} satisfies Meta<typeof Lozenge>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = {
    args: {
        variant: 'blue',
        text: 'example',
    },
}
