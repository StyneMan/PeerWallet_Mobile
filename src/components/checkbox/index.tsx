import React from 'react';
import {View, StyleSheet} from 'react-native';

import LinkButton from '../button/linkbutton';
import {Text5} from '../text';
import CheckBox from '@react-native-community/checkbox';

type CheckBoxProps = {
  title: string;
  linkText: string;
  onPress: any;
  setChecked: any;
  checked: boolean;
};

export default function CustomCheckbox({
  title,
  linkText,
  onPress,
  setChecked,
  checked,
}: CheckBoxProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <CheckBox
        value={checked}
        onValueChange={newValue => setChecked(newValue)}
      />
      <View style={styles.space} />
      <Text5 text={title} />
      <LinkButton buttonText={linkText} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  space: {
    width: 8,
  },
});
