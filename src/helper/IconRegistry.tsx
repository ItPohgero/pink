import { TbApps, TbArrowLeft, TbArrowRight } from 'react-icons/tb'
export const iconRegistry = {
    app: <TbApps />,
    arrowLeft: <TbArrowLeft />,
    arrowRight: <TbArrowRight />,
}
export type IconTypes = keyof typeof iconRegistry
