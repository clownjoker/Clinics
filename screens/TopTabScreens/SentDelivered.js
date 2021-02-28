import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const SentDelivered=() =>{
    return(
        <View style={styles.container}>
            {/* row one */}
            <View style={styles.orderWrapper}>
                <View style={styles.orderChildWrapper}>
                    <View style={styles.numberOfOrder}>
                        <Text style={styles.number}>2</Text>
                    </View>
                    <Text style={styles.days}>اليوم</Text>
                </View>
                <View style={styles.orderChildWrapper}>
                    <Text style={styles.titleOrder}>مقابلة طبيب عمومي</Text>
                    <Image source={require('../../assets/image/MedicalBag2.png')} style={{width:35,height:35}}/>
                </View>
            </View>
            {/* row tow */}
            <View style={styles.orderWrapper}>
                <View style={styles.orderChildWrapper}>
                    <View style={styles.numberOfOrder}>
                        <Text style={styles.number}>5</Text>
                    </View>
                    <Text style={styles.days}> 3 دقيقة</Text>
                </View>
                <View style={styles.orderChildWrapper}>
                    <Text style={styles.titleOrder}>فحص وظائف الكلا</Text>
                    <Image source={require('../../assets/image/img1.png')} style={{width:35,height:35}}/>
                </View>
            </View>
            {/* row three */}
            <View style={styles.orderWrapper}>
                <View style={styles.orderChildWrapper}>
                    <View style={styles.numberOfOrder}>
                        <Text style={styles.number}>10</Text>
                    </View>
                    <Text style={styles.days}>مايو</Text>
                </View>
                <View style={styles.orderChildWrapper}>
                    <Text style={styles.titleOrder}>تحاليل طبية</Text>
                    <Image source={require('../../assets/image/img2.png')} style={{width:35,height:35}}/>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:15
    },
    orderWrapper:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:20,
        borderBottomWidth:1,
        borderColor:'#D6E9FF',
        paddingVertical:5
    },
    orderChildWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    numberOfOrder:{
        backgroundColor:'#FF8A65',
        width:16,
        height:16,
        borderRadius:16,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        fontSize:10,
        fontFamily:'Cairo-SemiBold',
        color:'#FFFFFF'
    },
    days:{
        fontSize:12,
        fontFamily:'Cairo-SemiBold',
        marginLeft:5,
        color:'#909090'
    },
    titleOrder:{
        fontSize:12,
        fontFamily:'Cairo-SemiBold',
        marginRight:10,
        color:'#909090'
    }
    
})
export default SentDelivered;