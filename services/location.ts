import request from '@/services/config/axios.config';

export default class Location {
  static get(queryString?: string) {
    return request({
      url: `/location${queryString}`,
      method: 'GET'
    });
  }
  static getById(id: number) {
    return request({
      url: `/location/${id}`,
      method: 'GET'
    });
  }
  static getByIds(ids: number[]) {
    return request({
      url: `/location/${ids}`,
      method: 'GET'
    });
  }
}
