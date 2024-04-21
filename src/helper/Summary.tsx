import { Table } from 'antd'
import { DataSummaryProps, SummaryProps } from '../interface/Summary'

export const Summary = (props: SummaryProps) => {
    const { fixed } = props
    return (
        <Table.Summary fixed={fixed}>
            <Table.Summary.Row className="bg-slate-200">
                {props?.data?.map((dt: DataSummaryProps, inx: number) => {
                    return (
                        <Table.Summary.Cell index={inx} colSpan={dt?.col}>
                            {dt?.value}
                        </Table.Summary.Cell>
                    )
                })}
            </Table.Summary.Row>
        </Table.Summary>
    )
}
