import { Menu } from 'antd'
import styled from 'styled-components'

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 16px;
    margin-bottom: 19px;
`
interface BaseMenuProps {
    collapsed: string
}
const BaseMenu = styled(Menu)<BaseMenuProps>`
    .ant-menu-item-group-title {
        margin-left: 12px;
        text-transform: uppercase;
    }
    .ant-menu-item-group {
        display: ${({ collapsed }) => (collapsed?.toString() === 'true' ? 'none' : 'block')};
    }
`

export { Logo, BaseMenu }
