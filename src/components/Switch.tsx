import { Switch as SwitchAntd } from 'antd'
import AntdProvider from '../theme/antd.provider'
import { SwitchProps } from '../interface/SwitchProps'

export function Switch(props: SwitchProps): any {
    return (
        <AntdProvider>
            <div className="flex w-max items-center justify-center rounded-full bg-slate-200">
                <SwitchAntd {...props} />
            </div>
        </AntdProvider>
    )
}
