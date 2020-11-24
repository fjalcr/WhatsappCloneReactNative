import React from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Chats from '../data/Chats';
import  ChatMessage  from '../components/ChatMessage';
import  InputBox  from '../components/InputBox';
import BG from '../assets/images/BG.png';

const ChatRoomScreen = () => {
    const route = useRoute()
    return (
        <ImageBackground style={{width:'100%', height:'100%'}} source={BG} >
            <FlatList 
                data={Chats.messages}
                renderItem={({item}) => <ChatMessage message={item} />  }
                keyExtractor={(item) => item.id}
                inverted
            />
            <InputBox />
        </ImageBackground>
    );
};

export default ChatRoomScreen;