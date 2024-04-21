import { Tag } from 'antd'
import AntdProvider from '../theme/antd.provider'

interface Props {
    variant:
        | 'magenta'
        | 'red'
        | 'volcano'
        | 'orange'
        | 'gold'
        | 'lime'
        | 'green'
        | 'cyan'
        | 'blue'
        | 'geekblue'
        | 'purple'
    text: string
}
export function Lozenge(props: Props): any {
    return (
        <AntdProvider>
            <Tag color={props?.variant}>{props?.text}</Tag>
        </AntdProvider>
    )
}
