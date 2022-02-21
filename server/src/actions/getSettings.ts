import { getData } from '../lib/Data'
import { Settings } from '../interfaces/settings'

export async function getSettings() {
    return getData<Settings[]>('settings')
}
