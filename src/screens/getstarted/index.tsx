import {StyleSheet, View, Image} from 'react-native';

import React from 'react';

import PrimaryButton from '../../components/button/primarybutton';
import SecondaryButton from '../../components/button/secondarybutton';
import {Text2} from '../../components/text/';
import Background from '../../components/background';

export default function GetStarted({navigation}: any): React.JSX.Element {
  return (
    <Background>
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://i.imgur.com/k2n4rY8.png',
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.spacer} />
        <Text2 text="Get Started" />
        <View style={styles.spacerMini} />
        <PrimaryButton
          buttonText="Login"
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
        />
        <View style={styles.spacerMini} />
        <SecondaryButton
          buttonText="Sign up"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  content: {
    height: '86%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {width: 64, height: 64},
  spacer: {
    height: 56,
  },
  spacerMini: {
    height: 16,
  },
});
