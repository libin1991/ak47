import { requestPost } from '../request';

export function fetchData(params) {
  return requestPost({
    method: 'user',
    options: {
      body: {
        count: params.count
      }
    }
  });
}