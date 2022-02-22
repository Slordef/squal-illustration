import { MultipartFile } from 'fastify-multipart'

export async function saveFile(file: MultipartFile): Promise<{ name: string }> {
    return { name: '' }
}

export async function deleteFile() {

}
