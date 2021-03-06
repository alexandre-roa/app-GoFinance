/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AppContext from './hooks';

const App: React.FC = () => (
  <AppContext>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  </AppContext>
);

export default App;
