import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTrendingGifs} from '../hooks/useTrendingGifs';
import GifsItem from './GifsItem';

type Props = {};

const TrendingGifs = (props: Props) => {
  const {loading, trendingGifs} = useTrendingGifs();
  return (
    <View>
      <FlatList
        horizontal
        data={trendingGifs.slice(0, 10)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          let gif = item.images?.fixed_height;
          return (
            <GifsItem
            width={ Number(gif?.width) ?? 100}
            height= {Number(gif?.height) ?? 100}
           imgURL={gif.url}
           data={item}
            />
          );
        }}
      />
    </View>
  );
};

export default TrendingGifs;

const styles = StyleSheet.create({});
