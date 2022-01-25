import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum Method {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
  options = 'OPTIONS'
}

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Call an endpoint with params in a specific method
   *
   * @param endpoint : api url!
   * @param params : object to pass into the api, e.g: {per_page: 10, order: 'asc', page: 1}
   * @param method : type Method, default: Method.Get
   */
   do<T>(
    endpoint: string,
    params?: Record<string, any>,
    method?: Method,
    ){
      let urlParams = '';
      if (params){ urlParams = '?' + this.objToUrlParams(params); }

      switch (method) {
        case Method.post: return this.httpClient.post<T>(endpoint, params);
        case Method.put: return this.httpClient.put<T>(endpoint, params);
        case Method.delete: return this.httpClient.delete<T>(endpoint, params);
        case Method.options: return this.httpClient.options<T>(endpoint, params);

        default: return this.httpClient.get<T>(endpoint + urlParams);
      }

      /*
      .then((response) => {
        // Successful request
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
        console.log("Total of pages:", response.headers['x-wp-totalpages']);
        console.log("Total of items:", response.headers['x-wp-total']);
      })
      .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log("Response Status:", error.response.status);
        console.log("Response Headers:", error.response.headers);
        console.log("Response Data:", error.response.data);
      })
      .finally(() => {
        // Always executed.
      });
    */
  }

  private objToUrlParams(obj: Record<string, any>){
    let str = '';
    for (const key of Object.keys(obj)) {
        if (str !== '') {
            str += '&';
        }
        str += key + '=' + encodeURIComponent(obj[key]);
    }
    return str;
  }
}
