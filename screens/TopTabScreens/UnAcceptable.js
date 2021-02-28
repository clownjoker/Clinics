import React from 'react';
import {View,Text,StyleSheet} from 'react-native';




const UnAcceptable=() =>{
    return(
        <View style={styles.container}>
            
           <Text>UnAcceptable</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    
})
export default UnAcceptable;