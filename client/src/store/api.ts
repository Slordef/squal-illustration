import axios, { AxiosResponse, AxiosPromise } from 'axios'

class Api {
  get<T> (url: string): AxiosPromise<AxiosResponse<T>> { return axios.get(`/api${url}`).then(r => r.data) }
  post<T> (url: string, data: unknown): AxiosPromise<AxiosResponse<T>> { return axios.post(`/api${url}`, data).then(r => r.data) }
}

export const api = new Api()
