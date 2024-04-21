export interface ButtonProps {
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'primary-line' | 'secondary-line' | 'gost'
    label?: string
    size?: 'xxs' | 'xs' | 'sm' | 'lg' | 'xl' | 'xxl'
}
