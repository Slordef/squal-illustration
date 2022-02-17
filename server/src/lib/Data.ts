import * as fs from 'fs'
import * as path from 'path'
import * as process from 'process'

export function getData<T>(file: string): T | undefined {
    try {
        const read = fs.readFileSync(path.resolve(process.cwd(), '..', 'data', `${file}.json`), { encoding: 'utf-8' })
        const content = JSON.parse(read)
        return content
    } catch (e) {
        console.error(`Can't read file ${file}.json`, e)
        return
    }
}

export function setData(file: string, data: unknown) {
    const write = JSON.stringify(data, null, 4)
    fs.writeFileSync(path.resolve(process.cwd(), '..', 'data', `${file}.json`), write, { encoding: 'utf-8' })
}
