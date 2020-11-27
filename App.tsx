import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';

import { getUser } from './graphql/queries';
import { createUser } from './graphql/mutations';
import { ClippingRectangle } from 'react-native';
Amplify.configure(config);


function App() {

  //run only on first render
  useEffect(() => {
    const fetchUsers = async () => {
      //get auth user
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true})
      if(userInfo){
        //get user from backend with user id from
        const userData = await API.graphql(
            graphqlOperation(
              getUser,
              {id:userInfo.attributes.sub}
              )
          )

          
          if(userData.data.getUser){
            console.log('user is registered')
          }else{
            
            const newUser = {
              id: userInfo.attributes.sub,
              name: userInfo.username,
              imageUri: `https://ui-avatars.com/api/?name=${userInfo.username}`,
              status:'Hey there i am using Whatsapp!'
            }

            await API.graphql(
              graphqlOperation(
                createUser,
                {input: newUser}
              )
            )
          }

        }
  
    }
    fetchUsers()
  },[])

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)