import {ApiConstants} from '.';
import {apiRequest} from './ApiRequest';

export function getAllTrendingGifs(
  params: any,
  cbSuccess: any,
  cbFailure: any,
) {
  apiRequest(
    'GET',
    ApiConstants.API_BASE_URL + ApiConstants.TRENDING_ENDPOINT,
    ApiConstants.headers,
    cbSuccess,
    params,
    cbFailure,
    false,
  );
}

export function getGifsBySearchReq(
  params: any,
  cbSuccess: any,
  cbFailure: any,
) {
  apiRequest(
    'GET',
    ApiConstants.API_BASE_URL + ApiConstants.SEARCH_ENDPOINT,
    ApiConstants.headers,
    cbSuccess,
    params,
    cbFailure,
    false,
  );
}
