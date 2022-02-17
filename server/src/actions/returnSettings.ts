import { getData } from '../lib/Data'
import { Settings } from '../interfaces/settings'

export async function returnSettings() {
    const settings = getData<Settings[]>('settings')
    return settings
}
