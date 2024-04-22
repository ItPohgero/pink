import { ButtonProps } from '../interface/ButtonProps'

export function Button(props: ButtonProps): any {
    const { onClick, type, variant, label = 'label here', size } = props

    const Variant = (e: ButtonProps['variant']): string => {
        switch (e) {
            case 'primary':
                return 'border-2 border-[#EB008B] bg-[#EB008B] text-white'
            case 'secondary':
                return 'border-2 border-[#FDE6F3] bg-[#FDE6F3] text-[#EB008B]'
            case 'tertiary':
                return 'border-2 border-[#EB008B] bg-white text-[#EB008B]'
            default:
                return 'border-2 border-transparent bg-transparent text-[#EB008B]'
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
            className={`rounded-full bg-red-800 ${Variant(variant)} ${Size(size)}`}
        >
            {label}
        </button>
    )
}
