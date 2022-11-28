import axios, { AxiosInstance, AxiosRequestHeaders, type AxiosError, type AxiosResponse } from 'axios'
import { useUser } from '@/composables/stores/useUser';
import { IHttp } from './domain/interfaces/IHttp';

import type { Response } from './domain/interfaces';
import type { IPayload } from './domain/interfaces';
import Exception from '../shared/Exception';
import { ErrorType } from '../shared/BaseError';

export default class Http implements IHttp {
  private axios!: AxiosInstance

  private requestHeaders = (headers: AxiosRequestHeaders): AxiosRequestHeaders => {
    const { token } = useUser()
    return {
      ...headers,
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  }

  constructor() {
    this.instanceAxios()
  }

  private instanceAxios() {
    this.axios = axios.create()
  }

  /*
    *********** GET ***********
  */
  async get<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.get(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }


  /*
    *********** POST ***********
  */
  async post<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.post(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }


  /*
    *********** PUT ***********
  */
  async put<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.put(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }


  /*
    *********** DELETE ***********
  */
  async delete<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.delete(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }


  /*
    *********** PATCH ***********
  */
  async patch<T, U>(url: string, payload?: IPayload<T>): Promise<Response<U>> {
    try {
      const response = await this.axios.patch(url, {
        baseURL: payload?.baseUrl ? payload.baseUrl : import.meta.env.VITE_API_URL,
        url: payload?.url,
        params: payload?.params,
        headers: this.requestHeaders(payload?.headers ?? {}),
        data: payload?.data ?? null,
      })

      return response.data
    } catch (e) {
      if (e instanceof Error) {
        const errorType: ErrorType = {
          code: e.name,
          category: 0,
          msg: e.message,
          description: e.message,
        }
        const error = new Exception(400, [errorType], [])
        console.log(error)

        throw error
      } else {
        console.log('Unexpected error', e);
      }
    } finally {
      return {} as Response<U>
    }
  }
}