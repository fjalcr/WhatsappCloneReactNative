import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import ChatsScreen from '../screens/ChatsScreen';
import { MainTabParamList, TabChatParamList, TabOneParamList, TabTwoParamList } from '../types';

import { Fontisto } from '@expo/vector-icons';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{ 
        activeTintColor: Colors[colorScheme].background,
        labelStyle:{
          fontWeight:"bold"
        },
        style:{
          backgroundColor: Colors[colorScheme].tint
        },
        indicatorStyle:{
          backgroundColor: Colors[colorScheme].background,
          height:3
        },
        showIcon:true
        
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneNavigator}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={18} color={color} />
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={TabChatNavigator}
      />
      <MainTab.Screen
        name="Status"
        component={TabOneNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoNavigator}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabChatsStack = createStackNavigator<TabChatParamList>();

function TabChatNavigator() {
  return (
    <TabChatsStack.Navigator>
      <TabChatsStack.Screen
        name="ChatScreen"
        component={ChatsScreen}
        options={{ headerShown: false }}
      />
    </TabChatsStack.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
        />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
