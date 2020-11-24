import { StyleSheet } from 'react-native';
import { greaterOrEq } from 'react-native-reanimated';
import Colors from '../../constants/Colors';
const style = StyleSheet.create({
    container:{
        padding:10
    },
    messageBox:{
        borderRadius:5,
        padding:10
    },
    reseiver:{
        marginRight: 50,
        backgroundColor: '#ffffff'
    },
    sender:{
        marginLeft: 50,
        backgroundColor: '#dcf8c5'
    },
    name:{
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginBottom:5
    },
    message:{
    },
    time:{
        alignSelf: 'flex-end',
        marginTop: 5,
        color: 'grey'
    },


})

export default style;