export interface ButtonProps {
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost'
    label?: string
    size?: 'xxs' | 'xs' | 'sm' | 'lg' | 'xl' | 'xxl'
}
