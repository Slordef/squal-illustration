import { getData, setData } from '../lib/Data'
import { Admin } from '../interfaces/Admin'

export function getDataAdmin () {
    return getData<Admin[]>('admin') || []
}

export function setDataAdmin (data: Admin[]) {
    setData('admin', data)
}
