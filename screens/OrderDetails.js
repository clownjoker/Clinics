import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const OrderDetails =({navigation})=>{
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.headerWrapper}>
                <View style={styles.headerChild}> 
                    <TouchableOpacity onPress={()=>navigation.navigate('detailsOfTheApplicant')}>
                        <Feather name='arrow-left' size={23} color='#D6E9FF'/>
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>تفاصيل الطلب</Text>
                    <Text style={{color:'#569EF8'}}>.</Text>
                </View>
            </View>
            <View style={styles.dataCardWrapper}>
                <View style={styles.dataCard}>
                    <View style={styles.contentCard}>
                        <Text style={styles.text}>رقم الطلب</Text>
                        <Text style={[styles.text,{color:'#000',fontFamily:'Cairo-Bold'}]}>10</Text>
                    </View>
                    <View style={styles.contentCard}>
                        <Text style={styles.text}>عنوان الطلب</Text>
                        <Text style={[styles.text,{color:'#000',fontFamily:'Cairo-Bold'}]}>مقابلة طبيب عمومي</Text>
                    </View>
                    <View style={styles.contentCard}>
                        <Text style={styles.text}>عنوان الطلب</Text>
                        <Text style={[styles.text,{color:'#000',fontFamily:'Cairo-Bold'}]}>مقابلة طبيب عمومي</Text>
                    </View>
                    <View style={styles.contentCard}>
                        <Text style={styles.text}>حالة الطلب </Text>
                        <Text style={[styles.text,{color:'#48CFAD',fontFamily:'Cairo-Bold'}]}>تم الاستلام</Text>
                    </View>
                    <View style={styles.contentCard}>
                        <Text style={styles.text}>تاريخ الطلب</Text>
                        <Text style={[styles.text,{color:'#000',fontFamily:'Cairo-Bold'}]}>22/2/2021</Text>
                    </View>

                    <View style={{alignItems:'flex-end',justifyContent:'flex-end',marginTop:70,marginRight:15}}>
                        <View style={styles.contentMsg}>
                        <View style={styles.numberOfMsg}>
                            <Text style={styles.number}>4</Text>
                        </View>
                            <MaterialCommunityIcons name='message' size={25} color='#FFFFFF'/>
                        </View>
                    </View> 
                </View>
                 
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    headerWrapper:{
        height:150,
        paddingHorizontal:15,
        backgroundColor:'#569EF8',
        
    },
    headerChild:{
       flexDirection:'row',
       justifyContent:'space-between',
       marginTop:15 
    },
    titleHeader:{
        fontFamily:'Cairo-SemiBold',
        color:'#D6E9FF',
        fontSize:16,
    },
    dataCardWrapper:{
        paddingHorizontal:30,
        marginTop:-50,
        
    },
    dataCard:{
        height:430,
        backgroundColor:'#ffff',
        borderRadius:15,
        shadowColor:'#ddd',
        shadowOffset:{
            width:1,
            height:2
        },
        shadowOpacity: 0.25,
        elevation:1,
        // alignItems:'center',
        marginTop: 10
    },
    text:{
        fontFamily:'Cairo-Regular',
        color:'#646464',
        fontSize:16,
        
    },
    contentCard:{
        alignItems:'center',
        marginTop: 15,
        
    },
    contentMsg:{
        width:58,
        height:58,
        backgroundColor:'#569EF8',
        position:'absolute',
        bottom:1,
        borderRadius:58,
        justifyContent:'center',
        alignItems:'center'
    },
    numberOfMsg:{
        width:17,
        height:17,
        borderRadius:16,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#FF8A65',
        alignItems:'flex-end',
        position:'absolute',
        bottom:45,
        right:6,
        justifyContent:'center',
        alignItems:'center'
    },
    number:{
        color:'#fff',
    }
    
})
export default OrderDetails;