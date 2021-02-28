import 'react-native-gesture-handler';
import * as React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import OTPScreen from './screens/OTPScreen';
import CompleteTheData from './screens/CompleteTheData';
import Services from './screens/Services';
import Main from './screens/Main';
import Notifications from './screens/Notifications';
import Message from './screens/Message';
import Order from './screens/Order';
import Tab from './component/Tab';
import GeneralPractitioner from './screens/GeneralPractitioner';
import Map from './component/Map';
import DetailsOfTheApplicant from './screens/DetailsOfTheApplicant';
import ReceiptOfRequest from './screens/ReceiptOfRequest';
import SendMsgToAdmin from './screens/SendMsgToAdmin';
import Profile from './screens/Profile';
import OrderDetails from './screens/OrderDetails';
import Internet from './screens/Internet';

//top tab screens
import SentDelivered from './screens/TopTabScreens/SentDelivered';
import UnAcceptable from './screens/TopTabScreens/UnAcceptable';
import UnderImplementation from './screens/TopTabScreens/UnderImplementation';

const Stack = createStackNavigator();

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="internet"
            component={Internet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="otp"
            component={OTPScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="completeTheData"
            component={CompleteTheData}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="services"
            component={Services}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="tab"
            component={Tab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="notifications"
            component={Notifications}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="message"
            component={Message}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="order"
            component={Order}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="generalPractitioner"
            component={GeneralPractitioner}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="map"
            component={Map}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="detailsOfTheApplicant"
            component={DetailsOfTheApplicant}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="receiptOfRequest"
            component={ReceiptOfRequest}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="sendMsgToAdmin"
            component={SendMsgToAdmin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="orderDetails"
            component={OrderDetails}
            options={{headerShown: false}}
          />

          {/* top tab screen */}
          <Stack.Screen
            name="sentDelivered"
            component={SentDelivered}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="unAcceptable"
            component={UnAcceptable}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="underImplementation"
            component={UnderImplementation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
