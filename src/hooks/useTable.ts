import { ColumnsType } from 'antd/es/table'
import { DataSummaryProps } from '../interface/Summary'

export interface UseTableOptionProps {
    pagination?: boolean
    bordered?: boolean
}

export interface UseTableProps {
    data: any
    columns: ColumnsType<any>
    summary?: DataSummaryProps[]
    options?: UseTableOptionProps
    scroll?: {
        x?: number
        y?: number
    }
}
export function useTable(props: UseTableProps): any {
    const { data, summary, columns, options, scroll } = props
    return { data, summary, columns, options, scroll }
}
