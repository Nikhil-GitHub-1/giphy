import {useState} from 'react';
import {getGifsBySearchReq} from '../../../services/ApiCalls';
import {API_KEY} from '../../../services/ApiConstants';

export const useSearchGifs = () => {
  const [filteredGifs, setFilteredGifs] = useState([] as any);
  const [showingResultsFor, setShowingResultsFor] = useState('' as string);
  const getSearchedGifs = (searchText: string) => {
    setShowingResultsFor(searchText);
    getGifsBySearchReq(
      {
        api_key: API_KEY,
        limit: 4,
        offset: 0,
        q: searchText,
      },
      cbSuccess,
      cbError,
    );
  };
  const cbSuccess = (res: any) => {
    setFilteredGifs(res?.data);
  };
  const cbError = (error: any) => {
    console.log('error', error);
  };

  const onClear = () => {
    setFilteredGifs([]);
    setShowingResultsFor('');
  };

  return {filteredGifs, getSearchedGifs, showingResultsFor, onClear};
};


