import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Body1, Text4} from '../text';
import appConstants from '../../utils/constants/constants';

type NoTransactionProp = {
  image: any;
  title: string;
  description: string;
};

export default function NoTransaction(
  item: NoTransactionProp,
): React.JSX.Element {
  const {image, title, description} = item;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.spacer} />
      <Text4 text={title} />
      <View style={styles.spacer} />
      <Body1 text={description} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  spacer: {
    marginBottom: appConstants.spacing.space3,
  },
});
