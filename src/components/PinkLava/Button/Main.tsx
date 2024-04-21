import { ButtonProps } from "../../../interface/ButtonProps"

export function Button(props: ButtonProps): any {
    const { onClick, type, variant, label = 'label here', size } = props

    const Variant = (e: ButtonProps['variant']): string => {
        switch (e) {
            case 'primary':
                return 'btn-primary'
            case 'primary-line':
                return 'btn-primary-line'
            case 'secondary':
                return 'btn-secondary'
            case 'secondary-line':
                return 'btn-secondary-line'
            default:
                return 'btn-gost'
        }
    }

    const Size = (e: ButtonProps['size']): string => {
        switch (e) {
            case 'xxs':
                return 'py-1 px-2 text-xs'
            case 'xs':
                return 'py-2 px-3 text-sm'
            case 'lg':
                return 'py-3 px-5 text-lg'
            case 'xl':
                return 'py-3 px-5 text-xl'
            case 'xxl':
                return 'py-3 px-5 text-2xl'
            default:
                return 'py-3 px-5 text-base'
        }
    }
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-full ${Variant(variant)} ${Size(size)}`}
        >
            {label}
        </button>
    )
}
