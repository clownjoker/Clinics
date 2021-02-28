import React from 'react';
import {View,Text,Image,
    StyleSheet,
    ImageBackground,TextInput,KeyboardAvoidingView,
    TouchableOpacity,} from 'react-native';


const Login = ({navigation}) =>{
    return(
            
        <KeyboardAvoidingView behavior='position'  style={styles.container}>
            <View style={styles.imageBackgroundWrapper}>
                <ImageBackground 
                    source={require('../assets/image/Rectangle.png')} 
                    style={styles.imageBackground} 
                    resizeMode='contain'>
                        <View  style={styles.plus}>
                            <Text style={styles.plusText}>+</Text>
                        </View>
                    </ImageBackground>
                
            </View>
            
                <View style={styles.inputWrapper}>
                    <Text style={styles.keyPhone}>+249</Text>
                    <TextInput 
                        style={styles.inputPhone} 
                        placeholder='990000000'
                        keyboardType='number-pad'
                        maxLength={9}
                        />
                </View>

            <View style={styles.btnWrapper}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('otp')}
                    style={styles.btnLogin}
                >
                    <Text style={styles.loginTitle}>
                        تسجيل دخول
                    </Text>
                </TouchableOpacity>
            </View>
            

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:15,
    },
    imageBackgroundWrapper:{
        width:'100%',
  
    },
    imageBackground:{
        height:380,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
        borderRadius:20,
        
    },
    plus:{
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:90,
        alignItems:'center',
        justifyContent:'center'
    },
    plusText:{
        fontWeight:'bold',
        fontSize:70,
        color:'#569EF8'
    },
    inputWrapper:{
        marginTop: 50,
        borderRadius:25,
        borderWidth:1,
        borderColor:"#909090",
        flexDirection:'row',
        alignItems:'center',
    },
    keyPhone:{
        fontFamily:'Cairo-SemiBold',
        fontSize:16,
        paddingLeft:10,
        color:'#646464',
        borderRightWidth:1,
        borderColor:'#646464',
        paddingRight:5
    },
    inputPhone:{
        flex: 1,
        height: 45,
        paddingLeft:10,
        fontSize:16,
        fontFamily:'Cairo-Regular',
        padding: 2,
    },
    btnWrapper:{
        marginTop: 20
    },
    btnLogin:{
        backgroundColor:'#569EF8',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 25
    },
    loginTitle:{
        fontSize:15,
        fontFamily:'Cairo-SemiBold',
        color:'#fff'
    }
})
export default Login;