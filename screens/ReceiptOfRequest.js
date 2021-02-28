import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';

const ReceiptOfRequest = ({navigation}) =>{
    return(
        <View style={styles.container}>

            <View style={styles.imageWrapper}>
                <ImageBackground source={require('../assets/image/done.png')} style={styles.image}>
                    <Image source={require('../assets/image/done2.png')} style={styles.imageChild}/>
                </ImageBackground>
            </View>

            <View style={styles.textWrapper}>
                <Text style={styles.text}>تم استلام طلبك بنجاح </Text>
                <Text style={styles.text}> نتمنى لكم عاجل الشفاء</Text>
            </View>

            <View style={styles.textWrapper}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('sendMsgToAdmin')}
                >
                    <Text style={styles.contact}>
                        التواصل مع الادارة  
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    imageWrapper:{
        alignItems:'center'
    },
    image:{
        width:130,
        height:130,
        justifyContent:'center',
        alignItems:'center'
    },
    imageChild:{
        width:40,
        height:40
    },
    textWrapper:{
        alignItems:'center',
        marginTop:25
    },
    text:{
        fontSize:16,
        fontFamily:'Cairo-SemiBold',
        color:'#000000', 
    },
    contact:{
        fontSize:18,
        fontFamily:'Cairo-SemiBold',
        color:'#5093FE',
    }
})
export default ReceiptOfRequest;