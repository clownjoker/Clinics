import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapperParent}>
        <View style={styles.searchWrapperChild}>
          <TextInput
            placeholderTextColor="#A6CFFD"
            placeholder="البحث"
            style={styles.searchInput}
          />
          <EvilIcons name="search" size={22} color="#569EF8" />
        </View>
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>الخدمات</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{position: 'relative'}}>
        <View style={styles.cardWrapperParent}>
          {/* row one */}
          <View style={styles.cardWrapperChild}>
            <TouchableOpacity
              onPress={() => navigation.navigate('sendMsgToAdmin')}>
              <Image
                style={styles.card}
                source={require('../assets/image/MedicalTests.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('generalPractitioner')}>
              <Image
                style={styles.card}
                source={require('../assets/image/GeneralPractitioner.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          {/* row tow */}
          <View style={[styles.cardWrapperChild, {marginTop: 15}]}>
            <TouchableOpacity>
              <Image
                style={styles.card}
                source={require('../assets/image/MedicalTests.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.card}
                source={require('../assets/image/GeneralPractitioner.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          {/* row three */}
          <View style={[styles.cardWrapperChild, {marginTop: 15}]}>
            <TouchableOpacity>
              <Image
                style={styles.card}
                source={require('../assets/image/MedicalTests.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.card}
                source={require('../assets/image/GeneralPractitioner.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
        <View style={styles.contentMsg}>
          <View style={styles.numberOfMsg}>
            <Text style={styles.number}>4</Text>
          </View>
          <MaterialCommunityIcons name="message" size={25} color="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    position: 'relative',
  },
  searchWrapperParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  searchWrapperChild: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft:20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#569EF8',
    paddingRight: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    fontFamily: 'Cairo-Regular',
    color: '#A6CFFD',
    paddingVertical: 3,
  },
  titleWrapper: {
    marginTop: 10,
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 30,
    color: '#646464',
  },
  cardWrapperParent: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 3,
  },
  cardWrapperChild: {
    flexDirection: 'row',
  },
  card: {
    width: 152,
    height: 200,
    // backgroundColor: '#ddd',
    marginHorizontal: 10,
    // borderRadius:20
  },
  contentMsg: {
    width: 58,
    height: 58,
    backgroundColor: '#569EF8',
    position: 'absolute',
    bottom: 22,
    borderRadius: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberOfMsg: {
    width: 17,
    height: 17,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#FF8A65',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 45,
    right: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: '#fff',
  },
});
export default Main;
