import React from 'react';
import {Text,StyleSheet,Image} from 'react-native';
import Main from '../screens/Main';
import Notifications from '../screens/Notifications';
// import Message from '../screens/Message';
import Profile from '../screens/Profile';
import Order from '../screens/Order';

import AtyIcon from 'react-native-vector-icons/AntDesign';
import Aty from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const activeTintLabelColor = '#569EF8';
    const inactiveTintLabelColor = '#909090';

  return (
    <Tab.Navigator
      initialRouteName="main"
      tabBarOptions={{
        activeTintColor: '#569EF8',
        inactiveTintColor: '#909090',
        style:{ backgroundColor:'#fff',paddingBottom:4,paddingTop:4}}
        
      } 
    > 
        

        <Tab.Screen
            name="profile"
            component={Profile}
            options={{
            tabBarLabel:({ focused }) => (
                <Text style={{ fontSize:11,fontFamily:'Cairo-Regular' ,color: focused ? activeTintLabelColor : inactiveTintLabelColor }}>
                    البروفايل
                </Text>
            ),
            tabBarIcon: ({ color, size }) => (
                <Image source={require('../assets/image/male.png')} style={{width:20,height:20}}/>
            ),
            
            }}
        />
         <Tab.Screen
            name="notifications"
            component={Notifications}
            options={{
            tabBarLabel:({ focused }) => (
                <Text style={{ fontSize:11,fontFamily:'Cairo-Regular' ,color: focused ? activeTintLabelColor : inactiveTintLabelColor }}>
                الاشعارات
                </Text>
            ),
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="notifications" color={color} size={20} />
            ),
            tabBarBadge:0
            
            }}
        />

            <Tab.Screen
            name="order"
            component={Order}
            options={{
            tabBarLabel:({ focused }) => (
                <Text style={{ fontSize:11,fontFamily:'Cairo-Regular' ,color: focused ? activeTintLabelColor : inactiveTintLabelColor }}>
                الطلبات 
                </Text>
            ),
            tabBarIcon: ({ color, size }) => (
                <Aty name="menu" color={color} size={20} />

            ),
            }}
        />
        <Tab.Screen
            name="main"
            component={Main}
            options={{
            
            tabBarLabel:({ focused }) => (
                <Text style={{ fontSize:11 ,fontFamily:'Cairo-Regular',color: focused ? activeTintLabelColor : inactiveTintLabelColor }}>
                الرئيسية
                </Text>
            ),
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={20} />
            ),
            }}
        />
        
    </Tab.Navigator>
  );
}

const styles=StyleSheet.create({
  tabStyle:{}
})