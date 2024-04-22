export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | any
    size?: 'xtra' | 'big' | 'small' | any
    children?: React.ReactNode
    disabled?: boolean
    full?: boolean
    style?: any
    redTheme?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
    onClick?: any
}
