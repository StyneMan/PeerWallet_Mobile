import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {observer} from 'mobx-react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Onboarding from './src/screens/onboarding/';
import GetStarted from './src/screens/getstarted/';
import Signup from './src/screens/auth/signup/';
import Login from './src/screens/auth/login/';
import OTPScreen from './src/screens/auth/otp/';
import ForgotPassword from './src/screens/auth/password/forgotpassword';
import SecurityQuestions from './src/screens/auth/security';
import ChangePassword from './src/screens/auth/password/changepassword';
import Dashboard from './src/components/dashboard';
import appConstants from './src/utils/constants/constants';
import Spinner from 'react-native-loading-spinner-overlay';
// import {navigationRef} from './src/utils/config/rootnavigation';

import {ToastProvider} from 'react-native-toast-notifications';
import appStore from './src/utils/state/appstate';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: appConstants.color.primaryColor,
  },
};

function App(): JSX.Element {
  const [isAuthennticated, setAuthenticated] = React.useState(true);
  const Stack = createNativeStackNavigator();

  React.useEffect(() => {
    setAuthenticated(true);
  }, []);

  return (
    <ToastProvider>
      <NavigationContainer theme={MyTheme}>
        <Spinner visible={appStore.isLoading} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OTP" component={OTPScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="SecurityQuestion" component={SecurityQuestions} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          {isAuthennticated && (
            <Stack.Screen name="Dashboard" component={Dashboard} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ToastProvider>
  );
}

export default observer(App);
