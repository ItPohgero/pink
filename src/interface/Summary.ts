export interface DataSummaryProps {
    col: number
    value: string
}
export interface SummaryProps {
    fixed?: boolean | 'bottom' | 'top'
    data?: DataSummaryProps[]
}
