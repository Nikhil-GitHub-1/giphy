import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MasonryFlashList} from '@shopify/flash-list';
import TopbarComponent from '../../components/TopbarComponent';
import SearchBar from './components/SearchBar';
import GifsItem from './components/GifsItem';
import {useTrendingGifs} from './hooks/useTrendingGifs';
import TitleComp from '../../components/TitleComp';
import {useThemeColor} from '../../hooks/useThemeColor';
import { UI_VALUES } from '../../constants';

type Props = {};

const HomeScreen = (props: Props) => {
  const {Colors} = useThemeColor();
  const {trendingGifs,fetchMoreGifs} = useTrendingGifs(30);

  return (
    <View style={[styles.container, {backgroundColor: Colors.bgColor}]}>
      <TopbarComponent showRightWidget title="Gifs Store" />

      <MasonryFlashList
        numColumns={2}
        data={trendingGifs}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={200}
        onEndReached={fetchMoreGifs}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <>
             <SearchBar />
            <TitleComp title="Trending Gifs" />
          </>
        }
        renderItem={({item}) => {
          let gif = item.images?.fixed_width;

          return (
            <GifsItem
              width={UI_VALUES.ScreenWid/2-16}
              height={Number(gif?.height) ?? 100}
              imgURL={gif.url}
              data={item}
            />
          );
        }}
        contentContainerStyle={{paddingHorizontal: 8}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
