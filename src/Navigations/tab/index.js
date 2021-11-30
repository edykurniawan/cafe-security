import React from 'react';
// import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Home, Monitoring, About} from '@scenes';
import {Home, Monitoring, About} from '../../Scenes';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const DrawerStackScreen = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <DrawerStackScreen.Navigator initialRouteName="Home">
      <DrawerStackScreen.Screen name="Home" component={Home} />
      <DrawerStackScreen.Screen name="Monitoring" component={Monitoring} />
      <DrawerStackScreen.Screen name="About" component={About} />
    </DrawerStackScreen.Navigator>
  );
};

export default TabNavigator;
