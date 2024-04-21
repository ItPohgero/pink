import { useColor } from '../hooks'
import { TextProps } from '../interface/TextProps'
export function Text(props: TextProps): any {
    const { Slate } = useColor()
    const { value, color = Slate[500], size = 'md' } = props
    return <p style={{ color, fontSize: size }}>{value}</p>
}
