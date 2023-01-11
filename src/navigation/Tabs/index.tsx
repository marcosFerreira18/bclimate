import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import HomeScreen from '../../screens/Home';
import SettingsScreen from '../../screens/Settings';
import MyTabBar from '../TabBar';

const Tab = createBottomTabNavigator();

const Tabs: React.FC = () => {
   return (
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
         <Tab.Screen name="Home" options={{ title: 'Início' }} component={HomeScreen} />
         <Tab.Screen name="Settings" options={{ title: 'Ajustes' }} component={SettingsScreen} />
      </Tab.Navigator>
   );
};

export default Tabs;
