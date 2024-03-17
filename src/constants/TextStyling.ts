import { TextStyle } from 'react-native/types';
import { useTheme } from '../context/ThemeContext';
import {WHITE} from './Colors';



export const TEXT_REGULAR:TextStyle = {
  fontFamily: 'Poppins-Regular',
  fontSize: 14,
  color: WHITE,
  fontWeight: '400',
};

export const TEXT_BOLD:TextStyle = {
  fontFamily: 'Poppins-Bold',
  fontSize: 14,
  color: WHITE,
  fontWeight: '700',
};
export const TEXT_MED:TextStyle = {
  fontFamily: 'Poppins-Medium',
  fontSize: 14,
  color: WHITE,
  fontWeight: '500',
};
