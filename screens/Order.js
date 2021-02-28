import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';

import TopTab from '../component/TopTab';

const Order=() =>{
    return(
        <View style={styles.container}>
            
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    الطلبات 
                </Text>
            </View>

           <TopTab/>

           
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    titleWrapper:{
        alignItems:'center',
        height:80,
        backgroundColor: '#569EF8'
    },
    title:{
        alignSelf:'center',
        fontFamily:'Cairo-SemiBold',
        fontSize:16,
        color: '#D6E9FF',
        marginTop:15
    },
    
})
export default Order;