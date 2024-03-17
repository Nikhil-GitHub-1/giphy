import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MasonryFlashList } from '@shopify/flash-list';

type Props = {}

const AllGifs = (props: Props) => {
 function generateRandomColor() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        return "#" + randomColor;
      }
      
      
  return (
    <View style={{flex: 1}}>
      <MasonryFlashList
        numColumns={2}
        data={arr}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={200}
        renderItem={({item}) => (
          <View
            style={{
              width:Dimensions.get('window').width / 2-8,
              height: item.height,
              backgroundColor: generateRandomColor(),
              margin:6,
              borderRadius:4
            }}
          />
        )}
      />
    </View>
  );
}

export default AllGifs

const styles = StyleSheet.create({})

// array of items with random  height (in range of 100 to 300 any random value ) and background color width is constant (half of the screen width)
export const arr = [
    { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },
    { height: 300, backgroundColor: 'pink' },
    { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },
    { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },
    { height: 300, backgroundColor: 'pink' },
    { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },
    { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },
    { height: 300, backgroundColor: 'pink' },
    { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },  { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },
    { height: 300, backgroundColor: 'pink' },
    { height: 100, backgroundColor: 'red' },
    { height: 150, backgroundColor: 'blue' },
    { height: 200, backgroundColor: 'green' },
    { height: 250, backgroundColor: 'yellow' },



]