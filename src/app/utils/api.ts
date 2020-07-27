import axios from 'axios';

const BASE_URL = 'https://api.tech-gamers.live/';

type RESTMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

type API = {
  [key in RESTMethod]: (url: string) => Promise<any>;
} & {
  request: (method: RESTMethod, url: string) => Promise<any>;
};

type CSRFTracker = {
  csrfToken: string;
  handshake: () => Promise<string>;
};

export const api: API & CSRFTracker = {
  async get(url: string) {
    return await this.request('get', url);
  },
  async post(url: string) {
    return await this.request('post', url);
  },
  async put(url: string) {
    return await this.request('put', url);
  },
  async patch(url: string) {
    return await this.request('patch', url);
  },
  async delete(url: string) {
    return await this.request('delete', url);
  },

  csrfToken: '',
  async handshake() {
    const res = await this.request('post', 'auth/handshake');
    this.csrfToken = res.headers['x-csrf-token'];
    return this.csrfToken;
  },

  // TODO: a global error handler
  // TODO: auto handshake and retry on 422
  async request(method: RESTMethod, url: string) {
    const res = await axios.request({
      method: method,
      baseURL: BASE_URL,
      url: url,
      xsrfCookieName: '_SPI_session',
      xsrfHeaderName: 'X-CSRF-Token',
      headers: {
        'X-CSRF-Token': this.csrfToken
      },
      withCredentials: true
    });
    this.csrfToken = res.headers['x-csrf-token'];
    return res;
  }
};
