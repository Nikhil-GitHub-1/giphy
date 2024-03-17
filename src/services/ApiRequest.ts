import axios from 'axios';
import {paramsToUrlQueryParams} from '../utils';

export function apiRequest<T>(
  method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH',
  url: string,
  headers: any,
  callbackSuccess: (response: T) => void,
  params: any,
  callbackFailure: (error: string) => void,
  convertParams: boolean = true,
) {
  let body;
  let query = '';
  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    if (convertParams) {
      body = JSON.stringify(params);
    } else {
      body = params;
    }
  } else if (method === 'GET') {
    query = paramsToUrlQueryParams(params);
  } else if (method === 'DELETE') {
    body = params;
  }
  console.log('URL', url + query);
  axios({
    method: method,
    url: url + query,
    data: body,
    headers: headers,
  })
    .then(response => {
      if (isSuccess(response?.data?.meta)) {
        console.log('success', url, response.data);

        callbackSuccess && callbackSuccess(response.data);
      } else {
        callbackFailure && callbackFailure(response.data);
        console.log(typeof url, url, 'hhh');
      }
    })
    .catch((response) => {
      response && callbackFailure && callbackFailure(response);
      // }
    });
}
export function isSuccess(response: any) {
  let status = response?.status;
  return status >= 200 && status <= 299;
}

interface ReqObj<T> {
  method: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';
  url: string;
  headers: any;
  callbackSuccess: (response: T) => void;
  params: any;
  callbackFailure: (error: string) => void;
  convertParams?: boolean;
}
