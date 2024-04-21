import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '../components'
const meta = {
    title: 'PINK/Typhografi/Text',
    component: Text,
    tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const ExampleXXS: Story = {
    args: {
        color: 'red',
        size: 'xxs',
        value: 'Text contoh',
    },
}
export const ExampleXS: Story = {
    args: {
        ...ExampleXXS.args,
        size: 'xs',
    },
}
