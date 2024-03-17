import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {BLACK} from './src/constants/Colors';
import {ThemeProvider} from './src/context/ThemeContext';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation/StackNavigator';
import {enableScreens} from 'react-native-screens';
import { RecoilRoot } from 'recoil';



enableScreens();


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={BLACK} />
      <RecoilRoot>
        <NavigationContainer>
          <ThemeProvider>
            <StackNavigator />
          </ThemeProvider>
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
