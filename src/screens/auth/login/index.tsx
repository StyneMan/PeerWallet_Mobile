import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React from 'react';
import LinkButton from '../../../components/button/linkbutton';
import BiometricButton from '../../../components/button/biometricbutton';
import BrandImageMax from '../../../components/image/brandmax';

import {Text2} from '../../../components/text';
import LoginForm from '../../../components/forms/login';

import Background from '../../../components/background';
// import appstate from '../../../utils/state/appstate';
import {observer} from 'mobx-react';

function LoginPage({navigation}: any): React.JSX.Element {
  return (
    <Background>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.spacer} />
          <BrandImageMax />
          <View style={styles.spacer} />
          <Text2 text="Welcome Back" />
          <View style={styles.subTitleRow}>
            <Text>New to PeerWallet?</Text>
            <LinkButton
              buttonText="Sign up"
              onPress={() => {
                navigation.navigate('Signup');
              }}
            />
          </View>
          <View style={styles.spacerMini} />
          <LoginForm navigation={navigation} />
          <BiometricButton onPress={() => {}} />
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  spacer: {
    margin: 24,
  },
  spacerMini: {
    margin: 16,
  },
  subTitleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default observer(LoginPage);
