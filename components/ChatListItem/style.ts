import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#e0e0e0',
        overflow:'hidden'

    },
    midContent:{
        justifyContent:'space-around'
    },
    leftContainer:{
        flexDirection: 'row'
    },

    avatar:{
        width:50,
        borderRadius:50,
        height:50,
        backgroundColor: 'red',
        marginRight:10
    },
    username:{
        fontSize:18,
        fontWeight:'bold'
    },
    lastMessage:{
        color: 'grey'
    },
    date:{
        color: 'grey'
    }

})

export default style;