import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Monitoring, About} from '../../Scenes';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Monitoring" component={Monitoring} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.BottomTab}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaulPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = 'white';
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress()}
            testID={options.tabBarTestID}
            accessibilityRole="button">
            {index === 0 && (
              <View>
                {isFocused ? (
                  <MaterialCommunityIcons
                    name="camera"
                    size={30}
                    color={color}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="camera"
                    size={30}
                    color={color}
                  />
                )}
              </View>
            )}
            {index === 1 && (
              <View style={styles.MiddleIcon}>
                {isFocused ? (
                  <MaterialCommunityIcons
                    name="shield-home"
                    size={30}
                    color={'#515151'}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="shield-home"
                    color={'#515151'}
                    size={30}
                  />
                )}
              </View>
            )}
            {index === 2 && (
              <View>
                {isFocused ? (
                  <MaterialCommunityIcons
                    name="information"
                    size={30}
                    color={color}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="information"
                    size={30}
                    color={color}
                  />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  BottomTab: {
    height: width * 0.17,
    backgroundColor: '#764D34',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: width * 0.1,
  },
  MiddleIcon: {
    bottom: width * 0.07,
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: 30,
    backgroundColor: '#F4DFB9',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    elevation: 8,
  },
});
