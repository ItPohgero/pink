import { ConfigProvider } from 'antd'
import React from 'react'
import { useColor } from '../hooks'

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
    const { Slate } = useColor()
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 16,
                    colorPrimary: '#52c41a',
                    colorBgContainer: Slate[50],
                },
                components: {
                    Table: {},
                    Switch: {
                        trackMinWidth: 20,
                    },
                    Checkbox: {
                        borderRadius: 5,
                        algorithm: true,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default AntdProvider
