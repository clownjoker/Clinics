import React from 'react';
import {View,Image,StyleSheet,Text,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
// import Svg from 'react-native-svg';

class OTPScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            pin1 :'',
            pin2 :'',
            pin3 :'',
            pin4 :''
        }
    }
    componentDidMount =()=>{
        this.refs.number1Ref.focus();
    } 
    render(){
        const {pin1,pin2,pin3,pin4} =this.state;
        return(
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image source={require('../assets/image/pass.png')} style={styles.img}/>
                </View>
                <View style={styles.textWrapperParent}>
                    <Text style={styles.textPhoneNumber}>تاكيد رقم الهاتف</Text>
                    <View style={styles.textChild}>
                        <Text style={[styles.textNumber,{color:'#569EF8',paddingRight:4}]}>0900000000</Text>
                        <Text style={styles.textNumber}>لقد تم ارسال رسالة الي رقم الهاتف</Text>
                    </View>
                </View>

                <View style={styles.otpWrapperParent}>
                    <View style={styles.otpChild}>
                        <TextInput 
                            keyboardType='number-pad' 
                            maxLength={1} 
                            style={styles.inputOtp}
                            placeholder='__'
                            ref={'number1Ref'}
                            onChangeText ={(pin1)=> {
                                this.setState({pin1:pin1})
                                if(pin1 != ''){
                                    this.refs.number2Ref.focus();
                                }
                            }}
                            value={pin1}
                        />
                    </View>
                    <View style={styles.otpChild}>
                        <TextInput 
                            keyboardType='number-pad' 
                            maxLength={1} 
                            style={styles.inputOtp}
                            placeholder='__'
                            ref={'number2Ref'}
                            onChangeText ={(pin2)=>{
                                this.setState({pin2:pin2})
                                if(pin2 != ''){
                                    this.refs.number3Ref.focus();
                                }
                            }}
                            value={pin2}
                        />
                    </View>
                    <View style={styles.otpChild}>
                        <TextInput 
                            keyboardType='number-pad' 
                            maxLength={1} 
                            style={styles.inputOtp}
                            placeholder='__'
                            ref={'number3Ref'}
                            onChangeText ={(pin3)=>{
                                this.setState({pin3:pin3})
                                if(pin3 != ''){
                                    this.refs.number4Ref.focus();
                                }
                            }}
                            value={pin3}
                        />
                    </View>
                    <View style={styles.otpChild}>
                        <TextInput 
                            keyboardType='number-pad' 
                            maxLength={1} 
                            style={styles.inputOtp}
                            placeholder='__'
                            ref={'number4Ref'}
                            onChangeText ={(pin4)=>{this.setState({pin4:pin4})}}
                            value={pin4}
                        />
                    </View>
                </View>

                <View style={styles.btnWrapper}>
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.navigate('completeTheData')}
                        style={styles.btnStyle}
                        >
                        <Text style={styles.titleBtn}>
                            تأكيد
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.textWrapperParent}>
                    <View style={[styles.textChild,{marginTop:-10}]}>
                        <Text style={[styles.textNumber,{color:'#569EF8',paddingRight:4}]}>00:30</Text>
                        <Text style={[styles.textNumber,{}]}>سوف يتم اعادة ارسال الرقم خلال </Text>
                    </View>
                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:15  
    },
    imageWrapper:{
        height:220,
        backgroundColor:'#569EF8',
        borderRadius:20,
        marginTop:5,
        justifyContent:'center',
        alignItems:'center'
    },
    textWrapperParent:{
        width:'100%',
        padding:5,
        marginTop:30
    },
    textPhoneNumber:{
        alignSelf:'center',
        fontSize:24,
        fontFamily:'Cairo-Bold',
        color:'#646464'
    },
    textChild:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop: 5
    },
    textNumber:{
        alignSelf:'center',
        fontSize:15,
        fontFamily:'Cairo-SemiBold',
        color:'#646464' 
    },
    otpWrapperParent:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 30,
        paddingHorizontal:25
    },
    otpChild:{
        width:60,
        height:60,
        borderRadius:60,
        borderWidth:1,
        borderColor:'#909090',
        justifyContent:'center',
        alignItems: 'center'
    },
    inputOtp:{
        fontSize:27,
        color:'#646464'
    },
    btnWrapper:{
        width:'100%',
        marginTop:30,
        
    },
    btnStyle:{
        width:'100%',
        height:45,
        backgroundColor:'#569EF8',
        borderRadius:25,
        justifyContent:'center',
        alignItems: 'center'
    },
    titleBtn:{
        fontFamily:'Cairo-SemiBold',
        fontSize:16,
        color:'#fff'
    },
    img:{
        width:140,
        height:140
    }
})

export default OTPScreen;