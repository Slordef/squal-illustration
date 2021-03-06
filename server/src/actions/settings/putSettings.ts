import { ApiRequest } from '../../interfaces/ApiRoute'
import { getDataSettings, setDataSettings } from '../../data/settings'

export async function putSettings(request: ApiRequest) {
    const settings = getDataSettings()
    if (!request.body.settings) return settings
    settings.homeText = request.body.settings?.homeText
    settings.homeImage = request.body.settings?.homeImage
    setDataSettings(settings)
    return settings
}
