import { MultipartFile } from 'fastify-multipart'
import * as util from 'util'
import { pipeline } from 'stream'
import * as fs from 'fs'
import path from 'path'
const pump = util.promisify(pipeline)

export async function saveFile(data: MultipartFile): Promise<string> {
    let name = data.filename
    let n = 1
    let filePath = path.resolve(__dirname, '..', '..', '..', 'assets', 'images', name)
    while (fs.existsSync(filePath)) {
        name = `${n}-${data.filename}`
        filePath = path.resolve(__dirname, '..', '..', '..', 'assets', 'images', name)
        n++
    }
    await pump(data.file, fs.createWriteStream(filePath))
    return name
}

export async function deleteFile(name: string) {
    const filePath = path.resolve(__dirname, '..', '..', '..', 'assets', 'images', name)
    if (fs.existsSync(filePath)){
        fs.unlinkSync(filePath)
        return true
    }
    return false
}
