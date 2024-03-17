// Note: This file contains the constants for the API

//API Key
export const API_KEY ='torrQEz9BTgEK2z0ouna83IOqJUmQNLa';

//API Base URL
export const API_BASE_URL ='https://api.giphy.com/v1/gifs/';

//API Headers
export const headers = {
    'Content-Type': 'application/json',
    // 'api_key': API_KEY,
};

export const sessionId = `${Date.now()}-${Math.floor(
    Math.random() * 100000,
  )}`;
//API Endpoints
export const TRENDING_ENDPOINT = 'trending';
export const SEARCH_ENDPOINT = 'search';

