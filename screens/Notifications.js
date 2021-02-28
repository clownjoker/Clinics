import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Notifications=() =>{
    return(
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                الاشعارات 
                </Text>
            </View>

            <View style={styles.notificationsWrapper}>
                <View style={styles.cardNotificationPearnt}>
                    <Text style={styles.title2}>تم استلام طلبك بنجاح</Text>
                    <View style={styles.cardNotificationChild}>
                        <Image source={require('../assets/image/corect.png')} style={styles.img}/>
                    </View>
                </View>

                <View style={[styles.cardNotificationPearnt,{backgroundColor:'rgba(204, 51, 0,0.1)'}]}>
                    <Text style={styles.title2}>هنالك مشكلة في استلام الطلب</Text>
                    <View style={[styles.cardNotificationChild,{backgroundColor:'rgba(204, 51, 0,0.5)'}]}>
                        <Image resizeMode='contain' source={require('../assets/image/den.png')} style={styles.img}/>
                    </View>
                </View>

                <View style={[styles.cardNotificationPearnt,{backgroundColor:'rgba(0, 102, 204,0.1)'}]}>
                    <Text style={styles.title2}>تم استلام طلبك بنجاح</Text>
                    <View style={[styles.cardNotificationChild,{backgroundColor:'rgba(0, 102, 204,0.2)'}]}>
                        <Image resizeMode='contain' source={require('../assets/image/error.png')} style={styles.img}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    titleWrapper:{
        alignItems:'center',
        marginTop:15
    },
    title:{
        alignSelf:'center',
        fontFamily:'Cairo-SemiBold',
        fontSize:16,
        color: '#646464',
    },
    
    notificationsWrapper:{
        marginTop:30,
        marginHorizontal:15,
        
    },
    cardNotificationPearnt:{
        backgroundColor:'rgba(0, 204, 255,0.1)',
        width:'100%',
        height:75,
        borderRadius:25,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:15
    },
    cardNotificationChild:{
        width:75,
        height:73,
        borderRadius:25,
        backgroundColor:'rgba(0, 204, 255,0.1)',
       alignItems:'center',
       justifyContent:'center'
    },
    img:{
        width: 35,
        height:35,
    },
    title2:{
        alignSelf:'center' ,
        fontFamily:'Cairo-SemiBold',
          fontSize:14,
          color: '#646464' ,
         marginRight:10
      },
})
export default Notifications;