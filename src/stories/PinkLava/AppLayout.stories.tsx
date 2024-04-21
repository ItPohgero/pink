import type { Meta, StoryObj } from '@storybook/react'
import AppLayout from '../../components/PinkLava/AppLayout/Main'
import { Color } from '../../utils/Color'
import MenuData from '../../hardcode/sidebar'
const meta = {
    title: 'PINK/AppLayout',
    component: AppLayout,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppLayout>

export default meta
type Story = StoryObj<typeof meta>

export const AppLayoutMain: Story = {
    args: {
        menu: MenuData,
        baseColor: Color.Base,
        children: 'child',
        logo: '/icons/logo-nabati.svg',
        moduleActive: 'conf',
        moduleCallback(e) {},
    },
}
