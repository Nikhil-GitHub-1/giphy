import {useEffect, useState} from 'react';
import { atom, useRecoilState } from 'recoil';
import {getAllTrendingGifs} from '../../../services/ApiCalls';
import {API_KEY} from '../../../services/ApiConstants';

const trendingGifsAtom = atom({
  key: 'trendingGifsAtom',
  default: [],
});

export const useTrendingGifs = (offset?:number) => {
  const [trendingGifs, setTrendingGifs] = useRecoilState(trendingGifsAtom);
  const [loading, setLoading] = useState(false);

  const getTrendingGifs = () => {
    getAllTrendingGifs(
      {
        api_key: API_KEY,
        limit: 30,
        offset:trendingGifs?.length,
      },
      getGifsSuccess,
      getGifsFailure,
    );
  };

  const getGifsSuccess = (response: any) => {
    console.log('response', response);
    setLoading(false);
    setTrendingGifs(pre => [...pre, ...response.data]);
  };

  const getGifsFailure = (error: any) => {
    console.log('error', error);
    setLoading(false);
  };

  useEffect(() => {
    getTrendingGifs();
  }, []);

  const fetchMoreGifs = () => {
    setLoading(true);
    getTrendingGifs();
  }

  return {trendingGifs, loading,fetchMoreGifs};
};
