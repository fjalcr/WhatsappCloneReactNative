import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { User } from '../../types';
import Styles from './style';

export type ContactListItemProps = {
  user: User
}

const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props
    const navigation = useNavigation()
    const onClick = () => {
      navigation.navigate('ChatRoom', {
        //navigate to chatroom with this user
      })
    }


    return (
        <TouchableWithoutFeedback onPress={onClick} >
          <View style={Styles.container}>
            <View style={Styles.leftContainer}>
              <Image source={{ uri: user.imageUri }} style={ Styles.avatar } />

              <View style={Styles.midContent} > 
                <Text style={Styles.username} >{user.name}</Text>
                <Text style={Styles.status} >{user.status}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;