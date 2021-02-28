import React from 'react';
import {View,Text,Modal,StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';


export default class Map extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:false,

    }
    
  }
  render(){
    return(
      <View style={styles.container}>
        {/* //using map her */}
            {/* header */}
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('generalPractitioner')}>
                    <Feather name='arrow-left' size={23} color='#646464'/>
                </TouchableOpacity>
                <Text style={styles.titleHeader}>الموقع علي الخريطة</Text>
                <Text style={{color:'#fff'}}>.</Text>
            </View>

        <View style={styles.mapWrapper}>
          {/* the btn Request for service wrapper  */}
          <TouchableOpacity 
                style={styles.btnGoWrapper}
                onPress={()=>this.props.navigation.navigate('detailsOfTheApplicant')}
            > 
            {/* receiptOfRequest */}
              <View style={styles.btnChild}>
                    <Text style={styles.loginTitle}>
                        تحديد الموقع   
                    </Text>
              </View>
          </TouchableOpacity>
          {/* end the map use it view  */}
        </View>

        
      </View> 
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
  mapWrapper:{
    // backgroundColor:'#ddd',
    flex:1,
    position:'relative',
    justifyContent:'flex-end'
  },
  btnGoWrapper:{
    alignItems:'center',
    marginBottom:25,
    paddingHorizontal:15,
  },
  btnChild:{
    width:'100%',
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