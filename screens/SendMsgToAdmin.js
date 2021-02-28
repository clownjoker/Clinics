import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

class SendMsgToAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      message: '',
    };
  }

  //

  render() {
    return (
      <View style={styles.container}>
        {/* header */}
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('receiptOfRequest')}>
            <Feather name="arrow-left" size={23} color="#646464" />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>مراسلة الادارة</Text>
          <Text style={{color: '#fff'}}>.</Text>
        </View>

        <View style={styles.contentMsg}>
          <View style={styles.msgCard1}>
            <View style={styles.msgCardChild}>
              <Text style={styles.titleMsg}>الادارة</Text>
              <Text style={styles.msg}>
                لوريم ايبسوم دولار سيت أميتكونسيكتيتور أدايبا يسكينج أليايت
              </Text>
              <Text style={styles.timeMsg}>17:45</Text>
            </View>
          </View>
          <View style={styles.msgCard2}>
            <Text style={[styles.msg, styles.msg2]}>لوريم ايبسوم دولار</Text>
            <Text style={styles.timeMsg}>17:45</Text>
          </View>
        </View>
        <View style={styles.msgWrapper}>
          {this.state.message == '' ? (
            <>
              <TouchableOpacity style={[styles.contentIcon, {marginLeft: 10}]}>
                <Feather name="paperclip" size={20} color="#CCCCCC" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contentIcon}>
                <Entypo name="mic" size={20} color="#CCCCCC" />
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[
                styles.contentIcon,
                {justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Image
                source={require('../assets/image/send-button.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          )}

          <TextInput
            placeholder="اكتب هنا"
            style={styles.inputMsg}
            placeholderTextColor="#BCBCBC"
            multiline
            onChangeText={(message) => this.setState({message})}
          />
          <TouchableOpacity style={{marginRight: 5, paddingRight: 5}}>
            <Entypo name="emoji-happy" size={20} color="#CCCCCC" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  titleHeader: {
    fontFamily: 'Cairo-SemiBold',
    color: '#646464',
    fontSize: 16,
  },
  contentMsg: {
    marginHorizontal: 15,
    height: 45,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  msgCard1: {
    width: '80%',
    // height:100,
    backgroundColor: '#646464',
    marginTop: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  titleMsg: {
    fontFamily: 'Cairo-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  msgCardChild: {
    paddingTop: 10,
    paddingRight: 10,
  },
  msg: {
    fontFamily: 'Cairo-Regular',
    fontSize: 12,
    color: '#FFFFFF',
  },
  msg2: {
    marginTop: 10,
    marginRight: 10,
  },
  timeMsg: {
    paddingLeft: 10,
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
    color: '#ccc',
  },
  msgCard2: {
    width: '80%',
    paddingBottom: 10,
    backgroundColor: '#62A5FA',
    marginTop: 20,
    marginLeft: '20%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  msgWrapper: {
    height: 50,
    backgroundColor: '#646464',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#569EF8',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  inputMsg: {
    fontFamily: 'Cairo-Regular',
    fontSize: 15,
    color: '#BCBCBC',
    flex: 1,
    paddingRight: 10,
  },
});

export default SendMsgToAdmin;
