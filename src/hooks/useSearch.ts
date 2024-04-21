interface Props {
    min?: number
    search: string
    keys: any[string]
    data: any[]
}
export function useSearch(props: Props) {
    const { search = '', min = 3, keys, data } = props
    if (search?.length > min ?? 3) {
        return data.filter((dt: any) => {
            return keys.some((key: Props['keys']) => {
                return dt[key]?.toLowerCase().includes(props.search.toLowerCase())
            })
        })
    } else {
        return props?.data
    }
}
