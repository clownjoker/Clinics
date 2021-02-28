import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

class Internet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notConnected: 'عفوا لا يوجد اتصال بالأنترنيت',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Feather name="wifi-off" size={100} color="#569EF8" />
        </View>
        <Text style={styles.text}>{this.state.notConnected}</Text>

        <View style={styles.btnWrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('login')}
            style={styles.btnLogin}>
            <Text style={styles.loginTitle}> إعادة المحاولة</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Cairo-SemiBold',
    fontSize: 20,
    color: '#569EF8',
  },
  btnWrapper: {
    marginTop: 70,
  },
  btnLogin: {
    backgroundColor: '#569EF8',
    height: 50,
    width: 182,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  loginTitle: {
    fontSize: 15,
    fontFamily: 'Cairo-SemiBold',
    color: '#fff',
  },
});
export default Internet;
