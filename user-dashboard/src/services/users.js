import request from '../utils/request';
import qs from 'qs';
async function query(params) {
  return request('/api/users?$(qs.stringify(params))');
}
