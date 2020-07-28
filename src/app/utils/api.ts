// eslint-disable-next-line no-unused-vars
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://api.tech-gamers.live/';

export type RESTMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type API = {
  [key in RESTMethod]: <T>(url: string) => Promise<AxiosResponse<T>>;
} & {
  request: <T>(method: RESTMethod, url: string) => Promise<AxiosResponse<T>>;
};

export type CSRFTracker = {
  csrfToken: string;
  handshake: () => Promise<string>;
};

export const api: API & CSRFTracker = {
  async get<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.request<T>('get', url);
  },
  async post<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.request<T>('post', url);
  },
  async put<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.request<T>('put', url);
  },
  async patch<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.request<T>('patch', url);
  },
  async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return await this.request<T>('delete', url);
  },

  csrfToken: '',
  async handshake() {
    const res = await this.request('post', 'auth/handshake');
    this.csrfToken = res.headers['x-csrf-token'];
    return this.csrfToken;
  },

  // TODO: a global error handler
  // TODO: auto handshake and retry on 422
  async request<T>(method: RESTMethod, url: string): Promise<AxiosResponse<T>> {
    const requestConfig: AxiosRequestConfig = {
      method: method,
      baseURL: BASE_URL,
      url: url,
      xsrfCookieName: '_SPI_session',
      xsrfHeaderName: 'X-CSRF-Token',
      headers: {
        'X-CSRF-Token': this.csrfToken
      },
      withCredentials: true
    };

    // Add bearer token when is in dev mode
    const { NODE_ENV, REACT_APP_TOKEN } = process.env;
    if (NODE_ENV === 'development') {
      if (REACT_APP_TOKEN) {
        requestConfig.headers['Authorization'] = `Bearer ${REACT_APP_TOKEN}`;
      } else {
        throw 'REACT_APP_TOKEN not found in .env file';
      }
    }

    const res = await axios.request<T>(requestConfig);
    this.csrfToken = res.headers['x-csrf-token'];
    return res;
  }
};
