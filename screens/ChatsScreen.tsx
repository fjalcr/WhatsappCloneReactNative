import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';
import  ChatListItem  from '../components/ChatListItem';
import  NewMessageButton  from '../components/NewMessageButton';

import chatRooms from '../data/ChatRooms';
export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        style={{width:'100%'}}
        renderItem={({item}) => <ChatListItem chatRoom={item} />  }
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
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
