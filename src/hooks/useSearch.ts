interface Props {
    min?: number
    search: string
    keys: string[]
    data: any[]
}

export function useSearch(props: Props) {
    const { search = '', min = 3, keys, data } = props
    if (search.length > (min ?? 3)) {
        return data.filter((dt: any) => {
            return keys.some((key: string) => {
                return dt[key]?.toLowerCase().includes(search.toLowerCase())
            })
        })
    } else {
        return props.data
    }
}
