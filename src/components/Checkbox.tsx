import { Checkbox as CheckboxAntd } from 'antd'
import AntdProvider from '../theme/antd.provider'
import { CheckboxProps } from '../interface/CheckboxProps'

export function Checkbox(props: CheckboxProps): any {
    return (
        <AntdProvider>
            <CheckboxAntd {...props} />
        </AntdProvider>
    )
}
