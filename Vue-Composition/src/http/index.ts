import { links } from '@/router/links';
import ky from 'ky';

const $host = ky.create({
  prefixUrl: links.API_URL,
  hooks: {
    beforeError: [
      async error => {
        const { response } = error;
        if (response) {
          const body = await response.json();
          if ('message' in body) error.message = body.message as string;
        }
        return error;
      },
    ],
  },
});

const $authHost = $host.extend({
  hooks: {
    beforeRequest: [
      request => {
        request.headers.set('authorization', `Bearer ${JSON.parse(localStorage.getItem('tokencrm') || '123')}`);
      },
    ],
  },
});

export { $host, $authHost };
