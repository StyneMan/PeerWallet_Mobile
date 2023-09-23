import {StyleSheet, ScrollView, View, Text} from 'react-native';
import React from 'react';
import LinkButton from '../../../components/button/linkbutton';
import BrandImageMax from '../../../components/image/brandmax';

import {Text2} from '../../../components/text';
import SignupForm from '../../../components/forms/signup';
import Background from '../../../components/background';

export default function SignupPage({navigation}: any): React.JSX.Element {
  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.content}>
          <View style={styles.spacer} />
          <BrandImageMax />
          <View style={styles.spacer} />
          <Text2 text="Create an account" />
          <View style={styles.subTitleRow}>
            <Text>Already have an account?</Text>
            <LinkButton
              buttonText="Sign in"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
          <View style={styles.spacerMini} />
          <SignupForm navigation={navigation} />
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
