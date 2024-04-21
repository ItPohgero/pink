import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from '../components'
const meta = {
    title: 'NIU/DatePicker/Origin',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        picker: {
            options: ['year', 'month', 'week', 'quarter'],
            control: { type: 'radio' },
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Another description, overriding the comments',
            },
        },
    },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const DatePickerExam: Story = {
    args: {
        picker: 'year',
        placeholder: 'this is placeholder',
    },
}
