import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { useColor } from './useColor'
import { useRandom } from './useRandom'
import { useDay } from './useDay'
import { useClient, getData } from './useClient'
import { useEffect, useState } from 'react'

export function TestHook(): any {
    const { Rose, Blue } = useColor()
    const resRandom = useRandom(20)
    const day = useDay()
    const api = useClient({
        baseURL: 'https://jsonplaceholder.typicode.com',
        token: 'Bearer wahyu',
        headers: [
            {
                key: 'X-Screen-Id',
                value: 'xxx',
            },
        ],
    })

    const [data, setData] = useState(null)
    useEffect(() => {
        ;(async () => {
            try {
                const response: any = await getData({ api, endpoint: '/todos/1' })
                console.log('aabbccdd', response)
                setData(response)
            } catch (error) {}
        })()
    }, [])
    return (
        <div>
            <Collapse
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                items={[
                    {
                        key: '2',
                        label: 'useColor',
                        children: (
                            <div className="grid grid-cols-6 gap-4">
                                <div
                                    style={{ backgroundColor: Rose[500] }}
                                    className="flex h-20 w-full items-center justify-center rounded-lg text-white"
                                >
                                    Rose.500
                                </div>
                                <div
                                    style={{ backgroundColor: Blue[500] }}
                                    className="flex h-20 w-full items-center justify-center rounded-lg text-white"
                                >
                                    Blue.500
                                </div>
                            </div>
                        ),
                    },
                    {
                        key: '3',
                        label: 'useDatePicker',
                        children: <p>Show in datepicker story</p>,
                    },
                    {
                        key: '4',
                        label: 'useRandom',
                        children: <p>{resRandom}</p>,
                    },
                    {
                        key: '5',
                        label: 'useSearch',
                        children: <p>Show in table story</p>,
                    },
                    {
                        key: '6',
                        label: 'useTable',
                        children: <p>Show in table story</p>,
                    },
                    {
                        key: '7',
                        label: 'useDay',
                        children: (
                            <div>
                                <p>Pemakaian sama dengan dayjs</p>
                                <p>
                                    Example add month 1 : {day?.add(1, 'M')?.format('DD MMM YYYY')}
                                </p>
                                <p>
                                    Example subtract day 1 :{' '}
                                    {day?.subtract(1, 'day')?.format('DD MMM YYYY')}
                                </p>
                                <p>
                                    Example start of year :{' '}
                                    {day.startOf('year')?.format('dd DD MMM YYYY')}
                                </p>
                                <p>
                                    Example start of month :{' '}
                                    {day.startOf('M')?.format('dd DD MMM YYYY')}
                                </p>
                            </div>
                        ),
                    },
                ]}
            />
        </div>
    )
}
