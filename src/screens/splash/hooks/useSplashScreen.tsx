import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useTrendingGifs} from '../../home/hooks/useTrendingGifs';

export const useSplashScreen = () => {
  const navigation = useNavigation();
  const {trendingGifs} = useTrendingGifs(0);
  useEffect(() => {
    if (trendingGifs.length > 0) {
      navigation.navigate('Main');
    }
  }, [trendingGifs]);
};
