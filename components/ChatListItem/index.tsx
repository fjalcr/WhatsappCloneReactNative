import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, UIManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChatRoom } from '../../types';
import Styles from './style';

export type ChatListItemProps = {
  chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props
    const navigation = useNavigation()
    const onClick = () => {
      navigation.navigate('ChatRoom', {
        id: chatRoom.id,
        name: user.name,
        image: user.imageUri,
      })
    }

    const user = chatRoom.users[1]
    return (
        <TouchableWithoutFeedback onPress={onClick} >
          <View style={Styles.container}>
            <View style={Styles.leftContainer}>
              <Image source={{ uri: user.imageUri }} style={ Styles.avatar } />

              <View style={Styles.midContent} > 
                <Text style={Styles.username} >{user.name}</Text>
                <Text style={Styles.lastMessage} >{chatRoom.lastMessage.content}</Text >
              </View>
            </View>
            {/* <Text style={Styles.date}>{chatRoom.lastMessage.createdAt}</Text> */}
            <Text style={Styles.date}>Yesterday</Text>
          </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;