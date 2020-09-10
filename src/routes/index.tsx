import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import PostTransaction from '../pages/PostTransaction';

const Finances = createStackNavigator();

const Routes: React.FC = () => (
  <Finances.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F0F2F5' },
    }}
  >
    <Finances.Screen name="Dashboard" component={Dashboard} />
    <Finances.Screen name="PostTransaction" component={PostTransaction} />
  </Finances.Navigator>
);

export default Routes;
