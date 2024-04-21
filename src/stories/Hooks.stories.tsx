import type { Meta, StoryObj } from '@storybook/react'
import { TestHook } from '../hooks/TestHook'
const meta = {
    title: 'NIU/Hooks',
    component: TestHook,
    tags: ['autodocs'],
} satisfies Meta<typeof TestHook>

export default meta
type Story = StoryObj<typeof meta>

export const Test: Story = {
    args: {},
}
