import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageComponent from '../../../components/ImageComponent'
import { generateRandomColor } from '../../../utils'
import { useNavigation } from '@react-navigation/native'

type Props = {
  height?:number,
  width?:number,
  imgURL:string,
  data?:any
}

const GifsItem = (props: Props) => {
  const {height, width, imgURL,data} = props;
  const randomBg = generateRandomColor();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('GifDetails', {imgURL,data});
      }}
      style={[styles.container, { backgroundColor: randomBg}]}>
      <ImageComponent source={imgURL} style={[{height, width},styles.gif]} />
    </TouchableOpacity>
  );
}

export default GifsItem

const styles = StyleSheet.create({
    container: {
      borderRadius:4,
      overflow:'hidden',
      marginTop:8,
      alignSelf:'center',
      marginHorizontal:4
    },
    gif:{
    }
})