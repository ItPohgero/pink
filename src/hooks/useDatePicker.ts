import dayjs from 'dayjs'

interface PresetsProps {
    label: string
    type: 'day' | 'month'
    plusminus: number
}
interface UseDatePickerProps {
    presets?: PresetsProps[]
}
export function useDatePicker(props: UseDatePickerProps) {
    const presets = props?.presets?.map((dt: PresetsProps, index: any) => {
        const type = dt?.type === 'day' ? 'd' : 'month'
        return {
            label: dt?.label,
            value: dayjs().add(dt?.plusminus, type),
        }
    })

    return { presets }
}
