import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import BrandImageMax from '../../../components/image/brandmax';

import {Text2, Text6} from '../../../components/text';

import Background from '../../../components/background';
import LinkButton from '../../../components/button/linkbutton';
import SecurityQuestionForm from '../../../components/forms/security/securityform';
import appConstants from '../../../utils/constants/constants';

export default function SecurityQuestions({
  navigation,
}: any): React.JSX.Element {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.spacer} />
          <BrandImageMax />
          <View style={styles.spacer} />
          <Text2 text="Security Question" />
          <View style={styles.subTitleRow}>
            <Text style={styles.subtitle}>
              Provide the answer for your previously set security question
            </Text>
          </View>
          <View style={styles.spacerMini} />
          <SecurityQuestionForm navigation={navigation} />
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
  },
  subtitle: {
    textAlign: 'center',
    marginTop: appConstants.spacing.space1,
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
});
