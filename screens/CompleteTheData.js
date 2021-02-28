import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';

class CompleteTheData extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleHeader}>
                        إكمال البيانات
                    </Text>
                </View>

                <View style={styles.genderWrapperParent}>
                    <View style={styles.genderChild}>
                        <Image source={require('../assets/image/male.png')} style={styles.imageGender}/>
                        <Image source={require('../assets/image/male.png')} style={styles.imageGender}/>
                    </View>
                </View>

                <View style={styles.dataWrapperParent}>
                    <View style={[styles.dataWrapperChild,{marginTop:30}]}> 
                        <Text style={styles.title}>الاسم</Text>
                        <TextInput 
                            placeholderTextColor='#BCBCBC'
                            placeholder='الاسم بالكامل'
                            style={styles.input}
                        />
                    </View>
                    {/* --------- */}
                    <View style={[styles.dataWrapperChild,{alignItems:'flex-end'}]}> 
                        <Text style={styles.title}>تاريخ الميلاد</Text>
                        <TextInput 
                            placeholderTextColor='#BCBCBC'
                            placeholder='تحديد تاريخ'
                            style={[styles.input,{width:200}]}
                        />
                    </View>
                    {/* ----------- */}
                    <View style={styles.dataWrapperChild}> 
                        <Text style={styles.title}>العنوان</Text>
                        <TextInput 
                            placeholderTextColor='#BCBCBC'
                            placeholder='عنوان السكن'
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.btnWrapper}>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('services')}
                            style={styles.btnStyle}
                            >
                            <Text style={styles.titleBtn}>
                                حفظ
                            </Text>
                        </TouchableOpacity>
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
        paddingHorizontal:20,
    },
    header:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    titleHeader:{
        fontFamily:'Cairo-SemiBold',
        fontSize:16,
        color:'#646464'
    },
    genderWrapperParent:{
        width:'100%',
        alignItems: 'center',
        marginTop:30
    },
    genderChild:{
        flexDirection:'row',
        
    },
    imageGender:{
        width:64,
        height:64,
        marginHorizontal:10
    },
    dataWrapperParent:{
        width:'100%', 

    },
    dataWrapperChild:{
        width:'100%',  
        marginBottom: 15
    },
    title:{
        fontFamily:'Cairo-SemiBold',
        fontSize:12,
        color:'#646464',
        marginRight:3
    },
    input:{
        fontFamily:'Cairo-Regular',
        fontSize:12,
        height:45,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#909090',
        paddingRight:20,
        marginTop:5,  
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
    }
    
})
export default CompleteTheData;