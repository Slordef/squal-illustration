import axios from 'axios'

class Api {
  get (url: string) { return axios.get(`/api${url}`).then(r => r.data) }
  post (url: string, data: unknown) { return axios.post(`/api${url}`, data).then(r => r.data) }
}

export const api = new Api()
