import axios, { type AxiosError, type AxiosResponse } from 'axios'
import { useUser } from '@/composables/stores/useUser';

export const useFetch = async (request: requestFetch) => {
  const { url, method, body } = request
  const { token } = useUser()
  let response: responseFetch = {
    status: 0,
    data: {}
  }

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string ?? '',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  })

  await instance({
    url,
    method,
    data: body ?? null,
  }).then((res: AxiosResponse) => {
    response = { status: res.status, data: res.data }
  }).catch((err: AxiosError) => {
    if(err.response) {
      response = { status: err.response.status, data: err.response.data }
    } else if (err.request) {
      response = { status: err.request.status, data: err.request.data }
    } else {
      response = { status: 0, data: err.message }
    }
  })

  return response
}

type requestFetch = {
  url: string,
  method: string,
  body?: any
}

type responseFetch = {
  status: number,
  data: any
}