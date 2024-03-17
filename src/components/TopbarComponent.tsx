import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BackIcon from '../assets/svg/BackIcon';
import { useThemeColor } from '../hooks/useThemeColor';
import {ThemeToggler} from './ThemeToggler';

interface TopbarComponentProps {
  title: string;
  showRightWidget?: boolean;
  showBackButton?: boolean;
}

const TopbarComponent: React.FC<TopbarComponentProps> = ({
  title,
  showRightWidget,
  showBackButton,
}) => {
  const {Colors} = useThemeColor();
  const navigation = useNavigation();
  const goBack = () => {
    navigation?.pop();
  };
  return (
    <View style={[styles.container,{backgroundColor:Colors.bgColor,borderBottomColor: Colors.light_grey,}]}>
      <View style={styles.leftContainer}>
        {showBackButton && (
          <TouchableOpacity onPress={goBack}>
            <BackIcon color={Colors.primary}/>
          </TouchableOpacity>
        )}

        <Text style={[styles.title, {color: Colors.primary}]}>{title}</Text>
      </View>
      {showRightWidget && (
        <View style={styles.rightContainer}>
          <ThemeToggler />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {},
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    opacity: 0.6,

  },
  rightWidgetText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default TopbarComponent;
