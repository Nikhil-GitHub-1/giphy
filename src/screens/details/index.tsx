import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TopbarComponent from '../../components/TopbarComponent';
import GifsItem from '../home/components/GifsItem';
import {UI_VALUES} from '../../constants';
import {downloadGif, shareGif} from '../../utils';
import {useThemeColor} from '../../hooks/useThemeColor';
import ImageComponent from '../../components/ImageComponent';
import { TEXT_REGULAR } from '../../constants/TextStyling';
import DownlaodIcon from '../../assets/svg/DownloadIcon';
import ShareIcon from '../../assets/svg/ShareIcon';
import PauseIcon from '../../assets/svg/PauseIcon';
import PlayIcon from '../../assets/svg/PlayIcon';

type Props = {};

const GifDetails = (props: Props) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const {Colors} = useThemeColor();
  const params = props?.route?.params ?? {};
  const {data} = params;

  const gif = data?.images?.fixed_width;
  const user = data?.user;
  const still_gif = data?.images?.fixed_width_still;
  const imgURL = isPlaying? gif?.url: still_gif?.url;

  return (
    <View style={[styles.container, {backgroundColor: Colors.bgColor}]}>
      <TopbarComponent
        showBackButton
        showRightWidget={false}
        title="Gif Details"
      />
      <GifsItem
        height={Number(gif?.height)}
        width={UI_VALUES.ScreenWid - 24}
        imgURL={imgURL}
      />
      <UserInfo  user={user} />
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => {
            setIsPlaying(prev => !prev);
          }}
          style={styles.btn}>
       {isPlaying ? <PauseIcon/> : <PlayIcon/>}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            downloadGif(imgURL);
          }}
          style={styles.btn}>
          <DownlaodIcon/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            shareGif(imgURL);
          }}
          style={styles.btn}>
          <ShareIcon/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GifDetails;
const UserInfo = ({user}: {user: any}) => {
  const {Colors} = useThemeColor();

  return (
    <View style={styles.userInfo}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ImageComponent source={user.avatar_url} style={styles.avatar} />
        <View>
          <Text
            numberOfLines={1}
            style={[TEXT_REGULAR, {color: Colors.primary}]}>
            @{user?.username}
          </Text>
          <Text
            numberOfLines={1}
            style={[TEXT_REGULAR, {color: Colors.primary, opacity: 0.6}]}>
            {user?.display_name}
          </Text>
        </View>
      </View>
      <Text style={[TEXT_REGULAR, {color: Colors.primary}]}>
        {user?.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  btn: {
    backgroundColor: 'lightgrey',
    width: UI_VALUES.ScreenWid * 0.28,
    alignItems: 'center',
    padding: 10,
    borderRadius: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    // alignSelf: 'center',
  },
  userInfo: {
    paddingHorizontal:12,
    marginTop: 20,
  }
});
