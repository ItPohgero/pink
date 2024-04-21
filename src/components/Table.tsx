import React from 'react'
import { Pagination, Table as TableAntd } from 'antd'
import AntdProvider from '../theme/antd.provider'
import { TableProps } from '../interface/TableProps'
import { useRandom } from '../hooks'
import { Summary } from '../helper/Summary'
import { If, Then } from 'react-if'

export function Table(props: TableProps): any {
    const { widthNumber, useTableProps } = props
    const { data, columns, summary }: any = useTableProps
    const { x, y }: any = useTableProps?.scroll || {}

    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const [limitPage, setLimitPage] = React.useState<number>(10)
    const Number = {
        key: useRandom(),
        width: '5%',
        align: 'center',
        title: <strong>No</strong>,
        render: (_: any, __: any, u: number) => {
            let value = u + 1
            let no = value
            if (value) {
                if (useTableProps?.options?.pagination) {
                    if (currentPage > 1) {
                        no = currentPage * limitPage - limitPage + value
                    }
                }
            }
            return no
        },
    }

    const DataColumn = widthNumber ? [Number, ...columns] : columns
    const Pagi = useTableProps?.options?.pagination
    const DataRender = data?.slice(0, limitPage)
    return (
        <AntdProvider>
            <TableAntd
                {...props}
                className="rounded-2xl"
                bordered={useTableProps?.options?.bordered ?? true}
                pagination={false}
                scroll={{ x, y }}
                dataSource={DataRender}
                columns={DataColumn}
                summary={() => <Summary fixed data={summary} />}
                rowClassName={(_: any, idx: any) => {
                    return idx >= limitPage ? 'bg-red-500 text-white' : ''
                }}
            />
            <If condition={Pagi ?? true}>
                <Then>
                    <div className="flex w-full items-center justify-start">
                        <Pagination
                            current={currentPage}
                            total={data?.length}
                            onChange={(page: any, pageSize: any) => {
                                props.OnChangePagination &&
                                    props?.OnChangePagination(page, pageSize)
                                setCurrentPage(page)
                                setLimitPage(pageSize)
                            }}
                            className="mt-8"
                            showSizeChanger
                            showQuickJumper
                            showTotal={(total) => `Total ${total} items`}
                        />
                    </div>
                </Then>
            </If>
        </AntdProvider>
    )
}

interface TableColumnProps {
    title?: string
    data: any
    sorter?: boolean
    render?: any
}
export function TableColumn(props: TableColumnProps): any {
    const { title, sorter, data, render } = props
    const columnConfig: any = {
        key: useRandom(),
        dataIndex: data,
        title: title && <strong>{title}</strong>,
        sorter: sorter ? { compare: () => true } : false,
        ...props,
    }
    if (render) {
        columnConfig.render = render
    }
    return columnConfig
}

interface TableColumnSummaryProps {
    col: number
    value: string
}
export function TableColumnSummary(
    col: TableColumnSummaryProps['col'],
    value: TableColumnSummaryProps['value'],
): TableColumnSummaryProps {
    return { col, value }
}
