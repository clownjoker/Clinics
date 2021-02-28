
import React from 'react';

import SentDelivered from '../screens/TopTabScreens/SentDelivered';
import UnderImplementation from '../screens/TopTabScreens/UnderImplementation';
import UnAcceptable from '../screens/TopTabScreens/UnAcceptable';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="sentDelivered"
      tabBarPosition='top'
      lazyLoad='true'
      swipeEnabled='true'
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor:'#BDDAFA',
        labelStyle: { fontSize: 12,fontFamily:'Cairo-SemiBold' },
        style: { backgroundColor: '#569EF8' },
        indicatorStyle:{backgroundColor:'#fff'}
      }}
      
    >
      <Tab.Screen
        name="underImplementation"
        component={UnderImplementation}
        options={{ tabBarLabel: 'تحت التنفيذ' }}
      />
      <Tab.Screen
        name="unAcceptable"
        component={UnAcceptable}
        options={{ tabBarLabel: 'مرفوض' }}
      />
      <Tab.Screen
        name="sentDelivered"
        component={SentDelivered}
        options={{ tabBarLabel: 'تم الاستلام' }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;