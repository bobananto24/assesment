import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './Home';
import {Shop} from './Shop';
import {Consult} from './Consult';
import {Customize} from './Customize';
import {More} from './More';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

interface Props {}

export const BottomTab: React.FC<Props> = () => {
  const size = RFValue(22);
  const active = 'orange';
  const inActive = 'grey';
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: active,
        tabBarInactiveTintColor: inActive,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: focused ? active : inActive,
              }}
              source={require('./assets/home.png')}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: focused ? active : inActive,
              }}
              source={require('./assets/shop.png')}
            />
          ),
        }}
        name="Shop"
        component={Shop}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: focused ? active : inActive,
              }}
              source={require('./assets/consult.png')}
            />
          ),
        }}
        name="Consult"
        component={Consult}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: focused ? active : inActive,
              }}
              source={require('./assets/customize.png')}
            />
          ),
        }}
        name="Customize"
        component={Customize}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                height: size,
                width: size,
                tintColor: focused ? active : inActive,
              }}
              source={require('./assets/more.png')}
            />
          ),
        }}
        name="More"
        component={More}
      />
    </Tab.Navigator>
  );
};
