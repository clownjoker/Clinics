import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.backToService}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('main')}>
                        <AntDesign name='close' size={20} color='#569EF8'/>
                    </TouchableOpacity> 
                </View>
                <View style={styles.cardWrapperParent}>
                    <View style={styles.cardWrapperChild}>
                        <View style={styles.cardHeader}>
                            <Image source={require('../assets/image/user.png')} style={{width:33,height:33}}/>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                <Text style={styles.name}>محمد محمود</Text>
                                <Image source={require('../assets/image/male.png')} style={styles.image}/>
                            </View>
                        </View>

                        <View style={styles.cardData}>
                            <View style={styles.rowData}>
                                <Text style={styles.title}>العنوان</Text>
                                <Text style={styles.title}>تاريخ الميلاد</Text>
                                <Text style={styles.title}>رقم الهاتف</Text>
                            </View>
                            <View style={[styles.rowData,{marginTop:5}]}>
                                <Text style={styles.title}>الخرطوم 2</Text>
                                <Text style={styles.title}>16/12/1993 </Text>
                                <Text style={styles.title}>0900000000 </Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0, 102, 255,0.3)',
        paddingHorizontal:15,
        
    },
    backToService:{
        width:35,
        height:35,
        backgroundColor: '#fff',
        borderRadius:35,
        marginTop:20,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
    },
    cardWrapperParent:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    cardWrapperChild:{
        width:'100%',
        height:179,
        paddingVertical:15,
        paddingHorizontal: 15,
        backgroundColor:'#569EF8',
        borderRadius:20,
        

    },
    image:{
        width:50,
        height:50
    },
    cardHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    name:{
        fontFamily:'Cairo-Bold',
        fontSize:14,
        color:'#fff',
        marginRight:15
    },
    cardData:{
        width:'100%',
        height:40,
        marginTop:30,
        paddingHorizontal:10,
    },
    rowData:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontFamily:'Cairo-Regular',
        fontSize:14,
        color: '#fff'
    }
})

export default Profile;