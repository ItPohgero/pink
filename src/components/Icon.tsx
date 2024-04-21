import { IconContext } from 'react-icons'
import { useColor } from '../hooks'
import { IconTypes, iconRegistry } from '../helper/IconRegistry'

interface Props {
    color?: string
    icon: IconTypes
    size?: 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
}
export const Icon = (props: Props) => {
    const { Slate } = useColor()
    const { color = Slate[400], icon, size = 15 }: Props = props
    return (
        <IconContext.Provider value={{ color, size: `${size?.toString()}px` }}>
            {iconRegistry[icon]}
        </IconContext.Provider>
    )
}
