import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, TouchableOpacity, Image} from 'react-native';
import  Colors  from '../constants/Colors';
import {Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5} from '@expo/vector-icons';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

//bottom tab navigator
function RootNavigator(goBack) {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle:{
        backgroundColor: Colors.light.tint,
        shadowOpacity:0,
        elevation:0

      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left'

    }}>
      <Stack.Screen
        
        name="Root" 
        options={
          {
            title:"WhatsAppp",
            headerRight:() => (
              <View style={{
                flexDirection: "row",
                width:60,
                justifyContent:"space-between",
                marginRight:10
              }}>
                <Octicons name="search" size={22} color="white" />
                <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
              </View>
            )
          }
        }
        component={MainTabNavigator}
      />
      
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({ route, navigation}) => (
            { 
              headerLeft:() => (
                <TouchableOpacity onPress={navigation.goBack} >
                  <View style={{
                    flexDirection: "row",
                    width:100,
                    alignItems:"center",
                  }}>
                      <FontAwesome5 name="arrow-left" size={16} color="white" style={{marginLeft:10}} /> 
                      <Image style={{width:35, height:35, marginLeft:5, borderRadius:35}} source={{uri: route.params.image}} />
                  </View>
                </TouchableOpacity>
              ),
              title: route.params.name,
              headerRight:() => (
                <View style={{
                  flexDirection: "row",
                  width:100,
                  justifyContent:"space-between",
                  marginRight:10
                }}>      
                  <FontAwesome5 name="video" size={20} color="white" /> 
                  <MaterialIcons name="call" size={20} color="white" /> 
                  <MaterialCommunityIcons name="dots-vertical" size={20} color="white" /> 
                </View>      
              )
            }
          )
        }
      />
      <Stack.Screen 
        name="Contacts" 
        component={ContactsScreen} 
        options={({ route, navigation}) => (
            { 
              headerLeft:() => (
                <TouchableOpacity onPress={navigation.goBack} >
                  <View style={{
                    flexDirection: "row",
                    width:100,
                    alignItems:"center",
                  }}>
                      <FontAwesome5 name="arrow-left" size={16} color="white" style={{marginLeft:15}} />
                  </View>
                </TouchableOpacity>
              ),
              title: "Contacts",
              headerRight:() => (
                <View style={{
                  flexDirection: "row",
                  width:60,
                  justifyContent:"space-between",
                  marginRight:10
                }}>
                  <Octicons name="search" size={22} color="white" />
                  <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
                </View>
              )
            }
          )
        }
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
