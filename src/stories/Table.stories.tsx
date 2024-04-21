import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input, Spacer, Table } from '../components'
import { useTable as useTableCore } from '../hooks'
import { ColumnsTable, DataTable, SummaryTable } from '../data/table'
import { useSearch } from '../hooks/useSearch'

const meta = {
    title: 'PINK/Table/Core',
    component: Table,
    tags: ['autodocs'],
} as Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Example: Story = (args: any) => {
    const [search, setSearch] = React.useState<string>('')
    let DataFil = useSearch({
        data: DataTable,
        keys: ['name'],
        min: 3,
        search: search,
    })

    const useTableProps: any = useTableCore({
        summary: SummaryTable,
        options: {
            bordered: true,
            pagination: true,
        },
        data: DataFil,
        columns: ColumnsTable,
    })

    return (
        <div>
            <Input suffix="app" onChange={(e: any) => setSearch(e)} />
            <Spacer size={20} />
            <Table
                widthNumber
                {...args}
                useTableProps={useTableProps}
                OnChangePagination={() => {}}
            />
        </div>
    )
}

Example.args = {}
