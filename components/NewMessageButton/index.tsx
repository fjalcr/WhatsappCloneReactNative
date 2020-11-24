import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons, FontAwesome5, Fontisto} from '@expo/vector-icons';
import Styles from './styles';
const NewMessageButton = () => {
    return (
        <View style={Styles.floating}>
            <MaterialCommunityIcons name="android-messages" size={24} color="white" />
        </View>
    );
};

export default NewMessageButton;