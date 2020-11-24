import { StyleSheet } from 'react-native';
import Color from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:20
    },
    leftContainer:{
        backgroundColor:'white',
        flexDirection:'row',
        padding:10,
        margin:10,
        borderRadius: 25,
        flexGrow:1,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    input:{
        flexGrow:1,
        maxHeight:160,
        maxWidth: '60%'
    },
    icon:{
        marginHorizontal: 5
    },
    rightContainer:{
        marginVertical:10,
        marginRight:10,
        padding:10,
        backgroundColor: Color.light.tint,
        borderRadius: 1000,
    }
})

export default styles;