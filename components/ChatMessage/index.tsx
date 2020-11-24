import React from 'react';
import { Message } from '../../types';
import { Text, View } from 'react-native';
import Styles from './styles';
import { formatDate } from '../../helpers';


export type ChatMessagesProps = {
    message: Message
}

const ChatMessage = (props: ChatMessagesProps) => {
    const { message } = props
    
    const isMyMessage = () => {
        return message.user.id === 'u1'
    }
    console.log(isMyMessage())
    return (
        <View style={Styles.container}>
            <View style={[
                    Styles.messageBox,
                    isMyMessage() ? Styles.sender : Styles.reseiver
                ]}>
                {
                    !isMyMessage()
                    ?<Text style={Styles.name}>{ message.user.name }</Text>
                    :null
                }
                <Text style={Styles.message}>
                    { message.content }
                </Text>
                <Text style={Styles.time}>
                    { formatDate(message.createdAt) }
                </Text>
            </View>
        </View>
    );
};

export default ChatMessage;