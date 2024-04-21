import { DatePicker } from 'antd'
import AntdProvider from '../theme/antd.provider'
import { DatePickerRangeProps } from '../interface/DatePickerRangeProps'

export function DatePickerRange(props: DatePickerRangeProps): any {
    const { picker } = props
    return (
        <AntdProvider>
            <DatePicker.RangePicker picker={picker} {...props} />
        </AntdProvider>
    )
}
