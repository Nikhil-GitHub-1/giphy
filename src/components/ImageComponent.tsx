import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage, {ImageStyle} from 'react-native-fast-image';

type Props = {
  source: string;
  style: ImageStyle;
};

const ImageComponent = (props: Props) => {
  const {source, style} = props;
  return (
    <FastImage
      source={{
        uri: source,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.cover}
      style={[style]}
    />
  );
};

export default ImageComponent;

const styles = StyleSheet.create({});
