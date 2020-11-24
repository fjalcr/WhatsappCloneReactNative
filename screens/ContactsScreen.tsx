import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { View } from '../components/Themed';
import  ContactListItem  from '../components/ContactListItem ';

import users from '../data/Users';
export default function ChatScreen() {
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
