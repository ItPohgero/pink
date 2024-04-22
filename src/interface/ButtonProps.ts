export interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost'
    size: 'xtra' | 'big' | 'small'
    children?: React.ReactNode
    disabled?: boolean
    full?: boolean
    style?: any
    redTheme?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    onClick?: any
}
