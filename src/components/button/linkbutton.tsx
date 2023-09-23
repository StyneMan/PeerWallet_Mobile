import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import React from 'react';
import appConstants from '../../utils/constants/constants';

export default function LinkButton({onPress, buttonText}): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}> {buttonText} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  text: {
    color: appConstants.color.primaryColor,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
  },
});
