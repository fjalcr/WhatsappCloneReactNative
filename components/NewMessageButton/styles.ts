import { StyleSheet } from 'react-native';
import Color from '../../constants/Colors';

const styles = StyleSheet.create({
    floating:{
        backgroundColor: Color.light.tint,
        padding:15,
        borderRadius:100,
        position:'absolute',
        bottom: 30,
        right: 30,
        transform: [
            { rotateY: "180deg" }
          ],
    }
})

export default styles;