import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {useSplashScreen} from './hooks/useSplashScreen';
import {giphy, giphy_logo} from '../../constants/Images';
import {BLACK} from '../../constants/Colors';
import {useThemeColor} from '../../hooks/useThemeColor';

type Props = {};

const SplashScreen = (props: Props) => {
  useSplashScreen();
  const {Colors} = useThemeColor();
  return (
    <View style={[styles.container, {backgroundColor: Colors.bgColor}]}>
      <Image source={giphy_logo} style={styles.img} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {width: 200, height: 200},
});
