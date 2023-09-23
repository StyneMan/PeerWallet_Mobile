import {
  TouchableOpacity,
  Text,
  StyleSheet,
  // useWindowDimensions,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import appConstants from '../../utils/constants/constants';

type PrimaryButtonProps = PropsWithChildren<{
  onPress: any;
  buttonText: string;
  isEnabled?: boolean;
}>;

export default function PrimaryButton({
  onPress,
  buttonText,
  isEnabled = true,
}: PrimaryButtonProps): React.JSX.Element {
  // const {width} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: 8,
      padding: 14,
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: isEnabled ? appConstants.color.primaryColor : '#e8e8e8',
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: '700',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}> {buttonText} </Text>
    </TouchableOpacity>
  );
}
