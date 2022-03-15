import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './src';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
export default App;
