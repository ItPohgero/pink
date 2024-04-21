import React from 'react'
import { If, Then } from 'react-if'
import { Input as InputAntd } from 'antd'
import AntdProvider from '../theme/antd.provider'
import { Icon } from './Icon'
import { IconTypes } from '../helper/IconRegistry'

interface Props {
    onChange: (e: any) => void
    label?: string
    placeholder?: string
    type?: string
    size?: 'middle' | 'large' | 'small'
    showCount?: boolean
    prefix?: IconTypes
    suffix?: IconTypes
}

export function Input(props: Props): any {
    const {
        size = 'large',
        label,
        onChange,
        placeholder,
        type,
        showCount,
        prefix,
        suffix,
    }: Props = props
    return (
        <AntdProvider>
            <If condition={label}>
                <Then>
                    <label
                        htmlFor="first_name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                        {label}
                    </label>
                </Then>
            </If>
            <InputAntd
                showCount={showCount}
                prefix={prefix ? <Icon icon={prefix} /> : null}
                suffix={suffix ? <Icon icon={suffix} /> : null}
                size={size}
                type={type}
                placeholder={placeholder}
                onChange={(e: any) => onChange(e?.target?.value)}
            />
        </AntdProvider>
    )
}
