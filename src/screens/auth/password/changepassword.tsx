import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import BrandImageMax from '../../../components/image/brandmax';

import {Text2, Text6} from '../../../components/text';

import Background from '../../../components/background';
import LinkButton from '../../../components/button/linkbutton';
import ChangePasswordForm from '../../../components/forms/password/changepassword';
import appConstants from '../../../utils/constants/constants';

export default function ChangePassword({navigation}: any): React.JSX.Element {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.spacer} />
          <BrandImageMax />
          <View style={styles.spacer} />
          <Text2 text="Change Password" />
          <View style={styles.subTitleRow}>
            <Text style={styles.subtitle}>
              Set and confirm your new password
            </Text>
          </View>
          <View style={styles.spacerMini} />
          <ChangePasswordForm navigation={navigation} />
        </View>
        <View style={styles.bottomRow}>
          <Text6 text="Remember Password?" />
          <LinkButton
            onPress={() => navigation.navigate('Login')}
            buttonText="Login"
          />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    margin: 24,
  },
  spacerMini: {
    margin: 16,
  },
  subTitleRow: {
    width: '65%',
    marginTop: appConstants.spacing.space1,
  },
  subtitle: {
    textAlign: 'center',
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
});
