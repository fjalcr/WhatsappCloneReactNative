import React, {useState} from 'react';
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import {MaterialCommunityIcons, FontAwesome5, Fontisto} from '@expo/vector-icons';
import Styles from './styles';
const InputBox = () => {
    const  [inputText, setInputText]  = useState('');

    const messageSend = () => {
        console.warn('message send');
        setInputText('')
        
    }
    const microPress = () => {
        console.warn('miclrophone press');

    }
    const handlerPress = () => {
        !inputText ? microPress() : messageSend()
    }
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? 'padding' : "height"} 
        keyboardVerticalOffset={65}>
        <View style={Styles.container}>
            <View style={Styles.leftContainer}>
                <FontAwesome5 name="laugh-beam" size={20} color="grey" style={Styles.icon} />
                <TextInput 
                    placeholder="type samething..." 
                    style={Styles.input} 
                    multiline 
                    value={inputText}  
                    onChangeText={setInputText}
                />
                <FontAwesome5 name="paperclip" size={20} color="grey" style={Styles.icon} />
                {
                    inputText == ''
                    ?<Fontisto name="camera" size={20} color="grey" style={Styles.icon} />
                    :null
                }
            </View>
            <View style={Styles.rightContainer}>
                <MaterialCommunityIcons 
                    onPress={() => handlerPress()} 
                    name={`${inputText == '' ? 'microphone' : 'send'}`} 
                    size={24} 
                    color="white"/>
            </View>
        </View>
        </KeyboardAvoidingView>
    );
};

export default InputBox;