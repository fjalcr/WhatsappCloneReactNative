import React, { useEffect,useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import  ContactListItem  from '../components/ContactListItem ';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';



export default function ChatScreen() {
  const [ users, setUsers ] = useState({})
  useEffect(() => {
    const fetchUsers = async () => {
      try { 
        const usersList = await API.graphql(
          graphqlOperation(
            listUsers
          )
        )
        setUsers(usersList.data.listUsers.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUsers()
  },[])

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        style={{width:'100%'}}
        renderItem={({item}) => <ContactListItem user={item} />  }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
