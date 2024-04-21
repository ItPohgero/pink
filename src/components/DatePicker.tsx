import { DatePicker as DatePickerAntd } from 'antd'
import AntdProvider from '../theme/antd.provider'
import { DatePickerProps } from '../interface/DatePickerProps'
import { useDatePicker } from '../hooks/useDatePicker'

export function DatePicker(props: DatePickerProps): any {
    const { picker } = props
    const data = useDatePicker({
        presets: [
            { label: 'Kemarin', type: 'day', plusminus: -1 },
            { label: 'Besok', type: 'day', plusminus: 1 },
        ],
    })
    return (
        <AntdProvider>
            <DatePickerAntd
                picker={picker}
                prevIcon={<div>prev</div>}
                nextIcon={<div>next</div>}
                {...data}
                {...props}
            />
        </AntdProvider>
    )
}
