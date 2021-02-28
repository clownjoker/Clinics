import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
    Modal,
    KeyboardAvoidingView,
    Button} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';



class DetailsOfTheApplicant extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show:false
        }
    }
    render(){
        return(
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                {/* header */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('map')}>
                        <Feather name='arrow-left' size={23} color='#646464'/>
                    </TouchableOpacity>
                    <Text style={styles.titleHeader}>الموقع علي الخريطة</Text>
                    <Image source={require('../assets/image/MedicalBag.png')} style={styles.iconHeader}/>
                </View>
                {/* title */}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>بيانات صاحب الطلب</Text>
                </View>
                {/* data of person */}
                <View style={styles.dataWrapper}>
                    <View style={styles.cardData}>
                        <Text style={styles.name}>العنوان</Text>
                        <Text style={[styles.name,{fontSize:15,color:'#646464'}]}>الخرطوم 2</Text>
                        <Text style={styles.name}>تاريخ الميلاد</Text>
                        <Text style={[styles.name,{fontSize:16,color:'#646464',alignSelf:'flex-end'}]}>16/12/1993</Text>

                    </View>
                    <View style={styles.cardData}>
                        <Text style={styles.name}>الاسم </Text>
                        <Text style={[styles.name,{fontSize:15,color:'#646464'}]}>محمد احمد علي</Text>
                        <Text style={styles.name}>رقم الهاتف</Text>
                        <Text style={[styles.name,{fontSize:16,color:'#646464',alignSelf:'flex-end'}]}>090000000</Text>

                    </View>
                </View>
                {/* title */}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>الموقع علي الخريطة</Text>
                </View>
                {/* location on map */}
                <View style={{width:'100%',height:130,backgroundColor:'#ddd',marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Text>map</Text>
                </View>
                
                {/* title */}
                <View style={styles.titleWrapper}>
                    <Text style={[styles.title,{fontSize:12}]}>إضافة تعليق</Text>
                </View>
                {/* comment aria */}
                <View style={styles.commentWrapper}>
                    <TextInput placeholder='تعليق عن الخدمة' placeholderTextColor='#BCBCBC' multiline style={styles.inputCommit}/>
                </View>

                <View style={styles.btnWrapper}>
                
                <TouchableOpacity 
                    // onPress={()=>this.props.navigation.navigate('receiptOfRequest')}
                    onPress={()=>{this.setState({show:true})}}

                    style={styles.btnLogin}
                >
                    <Text style={styles.loginTitle}>
                        طلب الخدمة    
                    </Text>
                </TouchableOpacity>

                <Modal transparent visible={this.state.show}>
                    <View style={styles.modelWrapper}>
                        <View style={styles.model}>
                            <Text style={styles.modelTitle}>هل انت متاكد من إتمام الطلب</Text>
                            <View style={styles.btnAcceptWrapper}>
                                <TouchableOpacity 
                                    onPress={()=>{this.setState({show:false})}}
                                    style={[styles.btnAccept,{backgroundColor:'#909090'}]}>
                                    <Text style={styles.btnAcceptTitle}>الغاء</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.btnAccept}
                                    onPress={()=>{
                                            this.props.navigation.navigate('orderDetails')
                                        } 
                                    }
                                >
                                    <Text style={styles.btnAcceptTitle}>موافق</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
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
    iconHeader:{
        width:25,
        height:25
    },
    titleWrapper:{
        marginTop:15,
        paddingHorizontal:15
    },
    title:{
        fontSize:18,
        color: '#010101',
        fontFamily:'Cairo-SemiBold'
    },
    dataWrapper:{
        paddingHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%'
    },
    cardData:{
        width:'47%',
    },
    name:{
        color:'#909090',
        fontFamily:'Cairo-Regular',
        fontSize:12
    },
    commentWrapper:{
        marginHorizontal:15,
        height:100,
        borderWidth:1,
        borderRadius:10,
        borderColor:'#909090',
        marginTop:2
    },
    inputCommit:{
        paddingVertical:3,
        paddingHorizontal:10
    },
    btnWrapper:{
        marginTop: 25,
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
    },
    modelWrapper:{
        flex:1,
        backgroundColor:'#A6CFFD',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20
    },
    model:{
        backgroundColor:'#fff',
        width:'100%',
        padding:20,
        borderRadius:10,
        height:134,
        // alignItems:'center'
    },
    btnModel:{
        margin:2,
        borderBottomWidth:1,
        borderColor:'#eee',
        paddingBottom:10
    },
    btnShowModel:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:8,
        marginRight:8
    },
    modelTitle:{
        fontSize:12,
        fontFamily:'Cairo-SemiBold',
        color:'#646464',
        alignSelf:'center',
        marginTop:5
    },
    btnAcceptWrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20

    },
    btnAccept:{
        width:120,
        height:40,
        backgroundColor:'#569EF8',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    btnAcceptTitle:{
        fontSize:12,
        fontFamily:'Cairo-SemiBold',
        color:'#FFFFFF',
    }
})
export default DetailsOfTheApplicant;