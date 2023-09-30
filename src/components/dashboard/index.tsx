import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';
import TransactionScreen from '../../screens/transactions';
import Settings from '../../screens/settings';
import VirtualCardsScreen from '../../screens/vcards';
// import MyTabBar from './tabbar';
import Icon from 'react-native-vector-icons/Octicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';

import appConstants from '../../utils/constants/constants';
import MyProfile from '../../screens/profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfile from '../../screens/profile/editprofile';
import PinSettings from '../../screens/settings/pinsettings';
import PinSetup from '../../screens/settings/pin/pinsetup';
import ConfirmPin from '../../screens/settings/pin/confirmpin';
import ChangePin from '../../screens/settings/pin/changepin';
import AddFunds from '../../screens/funds/addfunds';
import TransferFunds from '../../screens/funds/transferfunds';
import ConfirmTransfer from '../../screens/funds/confirmtransfer';
import TransferReceipt from '../../screens/funds/receipt';
import RecentActivities from '../../screens/profile/recentactivities';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const TransactionStack = createNativeStackNavigator();
const VirtualStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

function Home() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="AddFunds" component={AddFunds} />
      <HomeStack.Screen name="TransferFunds" component={TransferFunds} />
      <HomeStack.Screen name="ConfirmTransfer" component={ConfirmTransfer} />
      <HomeStack.Screen name="TransferReceipt" component={TransferReceipt} />
    </HomeStack.Navigator>
  );
}

function Transactions() {
  return (
    <TransactionStack.Navigator>
      <TransactionStack.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{headerShown: false}}
      />
    </TransactionStack.Navigator>
  );
}

function VirtualCards() {
  return (
    <VirtualStack.Navigator>
      <VirtualStack.Screen
        name="VirtualCardsScreen"
        component={VirtualCardsScreen}
        options={{headerShown: false}}
      />
    </VirtualStack.Navigator>
  );
}

function Account() {
  return (
    <AccountStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyProfile">
      <AccountStack.Screen name="MyProfile" component={MyProfile} />
      <AccountStack.Screen name="Settings" component={Settings} />
      <AccountStack.Screen
        name="RecentActivities"
        component={RecentActivities}
      />
      <AccountStack.Screen name="EditProfile" component={EditProfile} />
      <AccountStack.Screen name="PinSettings" component={PinSettings} />
      <AccountStack.Screen name="PinSetup" component={PinSetup} />
      <AccountStack.Screen name="ChangePin" component={ChangePin} />
      <AccountStack.Screen name="ConfirmPin" component={ConfirmPin} />
    </AccountStack.Navigator>
  );
}

export default function Dashboard(): React.JSX.Element {
  return (
    <Tab.Navigator
      //   tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color, focused}) => (
            <>
              {focused ? (
                <FoundationIcon
                  name={'home'}
                  size={28}
                  color={appConstants.color.primaryColor}
                />
              ) : (
                <Icon
                  name={focused ? 'home-filled' : 'home'}
                  size={size}
                  color={focused ? appConstants.color.primaryColor : color}
                />
              )}
            </>
          ),
        }}
        name="Home"
        navigationKey="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color, focused}) => (
            <Icon
              name={'checklist'}
              size={size}
              color={focused ? appConstants.color.primaryColor : color}
            />
          ),
        }}
        name="Transactions"
        navigationKey="Transactions"
        component={Transactions}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color, focused}) => (
            <FeatherIcon
              name={'credit-card'}
              size={size}
              color={focused ? appConstants.color.primaryColor : color}
            />
          ),
        }}
        name="Virtual Cards"
        navigationKey="VirtualCards"
        component={VirtualCards}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color, focused}) => (
            <Icon
              name={focused ? 'person-fill' : 'person'}
              size={size}
              color={focused ? appConstants.color.primaryColor : color}
            />
          ),
        }}
        name="Account"
        navigationKey="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}
