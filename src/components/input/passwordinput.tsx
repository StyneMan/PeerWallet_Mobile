import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import appConstants from '../../utils/constants/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {HelperText} from 'react-native-paper';

export type PasswordProps = PropsWithChildren<{
  onChange: any;
  value: any;
  placeholder: string;
  error?: string;
  hasError: boolean;
}>;

export default function CustomPasswordField({
  onChange,
  value,
  hasError = false,
  error,
  placeholder,
}: PasswordProps): React.JSX.Element {
  const [show, setShow] = React.useState(false);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TextInput
          style={[
            styles.inputRoot,
            {
              borderColor:
                hasError && error
                  ? appConstants.color.errorColor
                  : appConstants.color.strokeColor,
            },
          ]}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          keyboardType="visible-password"
          secureTextEntry={!show}
        />
        <TouchableOpacity
          style={styles.visibilityBtn}
          onPress={() => setShow(!show)}>
          <Icon name={show ? 'eye-outline' : 'eye-off-outline'} size={18} />
        </TouchableOpacity>
      </View>
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputRoot: {
    borderRadius: 8,
    height: 48,
    borderWidth: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    width: '100%',
    minWidth: '100%',
  },
  visibilityBtn: {
    position: 'absolute',
    right: 9,
    width: 25,
    padding: 0,
    marginTop: 21,
  },
  image: {width: 10, height: 10},
});
