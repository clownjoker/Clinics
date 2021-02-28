import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Tab from '../component/Tab';

const GeneralPractitioner = ({navigation}) =>{
    return(
        <View style={styles.container}>
            {/* header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={()=>navigation.navigate('services')}>
                    <Feather name='arrow-left' size={23} color='#646464'/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>تفاصيل الطلب</Text>
                <Text style={{color:'#fff'}}>.</Text>
            </View>

            <View style={styles.imageWrapper}>
                <Image 
                    style={styles.image}
                    source={require('../assets/image/doc.png')}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.titleWrapper}>
                <Text style={styles.title}>طبيب عمومي</Text>
                <Image source={require('../assets/image/MedicalBag.png')} style={styles.titleIcon}/>
            </View>

            <View style={styles.textWrapper}>
                <Text style={styles.text}>
                العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي. وخلافاَ للاعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، قبل الميلاد. من كتاب "حول أقاصي الخير والشر
                </Text>
            </View>

            <View style={styles.btnWrapper}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('map')}
                    style={styles.btnLogin}
                >
                    <Text style={styles.loginTitle}>
                        طلب الخدمة   
                    </Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    headerWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        alignItems:'center',
        paddingHorizontal:15,

    },
    titleHeader:{
        fontFamily:'Cairo-SemiBold',
        color:'#646464',
        fontSize:16,
    },
    imageWrapper:{
        width:'100%',
        marginTop:10
    },
    image:{
        width:'100%',
        height:250,
    },
    titleWrapper:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingHorizontal:15,
    },
    titleIcon:{
        width: 24,
        height:24
    },
    title:{
        fontFamily:'Cairo-SemiBold',
        color:'#646464',
        fontSize:15,
        marginRight:5,
        marginTop:-2
    },
    textWrapper:{
        width:'100%',
        // marginTop:5,
        paddingVertical:5,
        paddingHorizontal:15,
    },
    text:{
        alignSelf:'center',
        fontSize:12,
        color:'#909090',
        fontFamily:'Cairo-Regular'
    },
    btnWrapper:{
        marginTop: 20,
        paddingHorizontal:15,
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

export default GeneralPractitioner;