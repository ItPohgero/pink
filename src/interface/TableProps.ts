import { UseTableProps } from '../hooks'

export interface TableProps {
    widthNumber?: boolean
    useTableProps: UseTableProps
    OnChangePagination?: (page: any, pageSize: any) => void
}
