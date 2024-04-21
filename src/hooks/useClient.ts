import axios, { AxiosInstance, AxiosResponse } from 'axios'

interface KeyValue {
    key: string
    value: string
}

interface GetInterceptorsRequestProps {
    token?: string
    config: any
    tokenStorageName?: string
    headers?: KeyValue[]
}

interface Props {
    token?: string
    tokenStorageName?: string
    baseURL: string
    headers?: KeyValue[]
}

interface UseGetProps {
    api: AxiosInstance
    endpoint: string
    params?: any
}

interface UsePostProps {
    api: AxiosInstance
    endpoint: string
    body?: any
}
const getInterceptorsRequest = (props: GetInterceptorsRequestProps) => {
    const { config, headers, tokenStorageName = 'token', token } = props
    const tk = localStorage.getItem(tokenStorageName)
    if (tk || token) config.headers.authorization = `Bearer ${tk || token}`
    headers?.forEach((dt: KeyValue) => {
        config.headers[dt?.key] = dt?.value
    })
    return config
}

export function useClient(props: Props): AxiosInstance {
    const { token, tokenStorageName, baseURL, headers } = props
    const x = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    x.interceptors.request.use((config) => {
        config = getInterceptorsRequest({
            token,
            tokenStorageName,
            config,
            headers,
        })
        return config
    })
    x.interceptors.response.use(
        (res) => {
            if (res.status === 401) {
                localStorage.clear()
                const location: any = window.location
                location.assign(location)
                return Promise.reject({ message: 'Please re-authenticate.' })
            }
            return res.data
        },
        (err) => {
            if (err.response && err.response.status === 401) {
                localStorage.clear()
                const location: any = window.location
                location.assign(location)
            }
            return Promise.reject(err)
        },
    )

    return x
}

export async function getData(props: UseGetProps): Promise<AxiosResponse> {
    const { api, endpoint, params } = props
    try {
        const response = await api.get(endpoint, { params })
        return response
    } catch (error) {
        throw error
    }
}
export async function postData(props: UsePostProps): Promise<AxiosResponse> {
    const { api, endpoint, body } = props
    try {
        const response = await api.post(endpoint, body)
        return response
    } catch (error) {
        console.error(error)
        throw error
    }
}
