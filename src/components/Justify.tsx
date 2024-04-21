interface Props {
    justCenter?: boolean
    justStart?: boolean
    justEnd?: boolean
    justBetween?: boolean
    justAround?: boolean
    justEvenly?: boolean
    itemStart?: boolean
    itemCenter?: boolean
    itemEnd?: boolean
    gap?: number
}
export const Justify = (props: Props) => {
    const JUST = (props: Props) => {
        if (props.justCenter) return 'justify-center'
        else if (props.justStart) return 'justify-start'
        else if (props.justEnd) return 'justify-end'
        else if (props.justAround) return 'justify-around'
        else if (props.justEvenly) return 'justify-evenly'
        else if (props.justBetween) return 'justify-between'
        return ''
    }
    const ALGN = (props: Props) => {
        if (props.itemCenter) return 'items-center'
        else if (props.itemStart) return 'items-start'
        else if (props.itemEnd) return 'items-end'
        return ''
    }
    return (
        <div className={`flex ${JUST(props)} ${ALGN(props)} gap[${props?.gap?.toString()}px]`}>
            asd
        </div>
    )
}
