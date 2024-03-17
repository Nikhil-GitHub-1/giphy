import {MasonryFlashList} from '@shopify/flash-list';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchInput} from '../../../components/SearchComponent';
import {UI_VALUES} from '../../../constants';
import {TEXT_REGULAR} from '../../../constants/TextStyling';
import {useThemeColor} from '../../../hooks/useThemeColor';
import {useSearchGifs} from '../hooks/useSearchGifs';
import GifsItem from './GifsItem';

type Props = {};

const SearchBar = (props: Props) => {
  const {Colors} = useThemeColor();
  const {getSearchedGifs, filteredGifs, showingResultsFor, onClear} =
    useSearchGifs();
  return (
    <View style={styles.container}>
      <SearchInput
        palceholder="Search for gifs ..."
        searchCb={getSearchedGifs}
        onClear={onClear}
      />
      {showingResultsFor && (
        <Text style={[TEXT_REGULAR, {color: Colors.primary, marginTop: 8}]}>
          Showing results for "{showingResultsFor}"
        </Text>
      )}
    <View style={{minHeight:3}}>
    <MasonryFlashList
        numColumns={2}
        data={filteredGifs}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={200}
        // ListEmptyComponent={<View style={{height: 3}} />}
        renderItem={({item}) => {
          let gif = item?.images?.fixed_width;
          return (
            <GifsItem
              width={UI_VALUES.ScreenWid / 2 - 16}
              height={Number(gif?.height) ?? 100}
              imgURL={gif.url}
              data={item}
            />
          );
        }}
      />
    </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom:4,
    paddingHorizontal: 2,
  },
});
