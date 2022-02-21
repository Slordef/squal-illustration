import { getData, setData } from '../lib/Data'
import { Settings } from '../interfaces/settings'

export function getDataSettings() {
    return getData<Settings>('settings') || {}
}

export function setDataSettings(settings: Settings) {
    setData('settings', settings)
}
