import { jwtDecode } from 'jwt-decode'
interface ResponseType {
    status: 'success' | 'error'
    message: any
    data: any
}
export function useJWTDecode(token: string) {
    try {
        const decoded = jwtDecode(token)
        const resp: ResponseType = {
            status: 'success',
            message: 'success decode jwt',
            data: decoded,
        }
        return resp
    } catch (error) {
        const resp: ResponseType = {
            status: 'success',
            message: error,
            data: null,
        }
        return resp
    }
}
