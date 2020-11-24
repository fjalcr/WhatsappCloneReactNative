import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Styles from './styles';
const NewMessageButton = () => {
    const navigation = useNavigation()
    const onClick = () => {
        navigation.navigate('Contacts')
      }
    return (
        <TouchableWithoutFeedback onPress={onClick} >
            <View style={Styles.floating}>
                <MaterialCommunityIcons name="android-messages" size={28} color="white" />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default NewMessageButton;