import RNFS from 'react-native-fs';
import { MMKV } from 'react-native-mmkv';
import { Alert, Share } from 'react-native';
import { PermissionsAndroid } from 'react-native';

export const storage = new MMKV();

export function paramsToUrlQueryParams(params: Record<string, string>) {
    const esc = encodeURIComponent;
    let query = '';
    if (params) {
      query = '?';
      query += Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    }
    return query;
  }
  

export const shareGif = async (path: string) => {
  try {
    await Share.share({
      title: 'Check out this cool GIF!',
      message: `Check out this cool GIF!\n ${path}`,
    });
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

export   const downloadGif = async (imageUrl:string) => {
  // Get the filename from the URL
  const fileName = Math.random().toString(36).substring(7) + '.gif';
  // Specify the path to save the image
  const path = `${RNFS.DownloadDirectoryPath}/${fileName}`;

  try {
     // Download the file
  let granted = requestStoragePermission();
  if (!granted) {
    Alert.alert('Permission denied');
    return;
  }
  const result = await RNFS.downloadFile({
    fromUrl: imageUrl,
    toFile: path,
  }).promise;
    Alert.alert('Gif downloaded successfully!');
  } catch (error:any) {
    console.error('Error downloading image:', error);
    Alert.alert('Error downloading image:', error?.message);
  }
};


export async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission Required',
        message: 'This app needs access to your storage to download images.',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
}

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};