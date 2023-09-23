import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import React, {PropsWithChildren} from 'react';
import appConstants from '../../utils/constants/constants';

type SecondaryButtonProps = PropsWithChildren<{
  onPress: any;
  buttonText: string;
}>;

export default function SecondaryButton({
  onPress,
  buttonText,
}: SecondaryButtonProps): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}> {buttonText} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    padding: 14,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: appConstants.color.secondaryColor,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
  },
});
