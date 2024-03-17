import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import GifDetails from '../screens/details';
import SplashScreen from '../screens/splash';

const Stack = createNativeStackNavigator();

export const StackNavigator = React.memo(() => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="GifDetails"
        component={GifDetails}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
});
