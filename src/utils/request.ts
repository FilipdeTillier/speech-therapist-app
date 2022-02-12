import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

const { REACT_APP_URL = "localhost:3000" } = process.env;

class Request {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: REACT_APP_URL,
    });
  }

  get<T>(path: string): AxiosPromise<T> {
    return this.axiosInstance.get(path);
  }

  post<T>(
    path: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.axiosInstance.post(path, data, config);
  }

  put<T>(
    path: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.axiosInstance.put(path, data, config);
  }

  patch<T>(
    path: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.axiosInstance.patch(path, data, config);
  }

  delete<T>(path: string): AxiosPromise<T> {
    return this.axiosInstance.delete(path);
  }

  options<P>(path: string, config?: AxiosRequestConfig): AxiosPromise<P> {
    return this.axiosInstance.options(path, config);
  }
}

export const request = new Request();
