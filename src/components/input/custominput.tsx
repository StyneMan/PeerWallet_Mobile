import {InputModeOptions, StyleSheet, TextInput, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import appConstants from '../../utils/constants/constants';
import {HelperText} from 'react-native-paper';

type CustomInputFieldProps = PropsWithChildren<{
  onChange: any;
  value: any;
  onBlur?: any;
  error?: string;
  hasError?: boolean;
  inputType: InputModeOptions | undefined;
  placeholder: string;
  width?: any;
  capitalization: any;
}>;

const CustomInputField = ({
  onChange,
  value,
  inputType,
  placeholder,
  onBlur,
  error,
  hasError = false,
  width = '100%',
  capitalization = 'words',
}: CustomInputFieldProps): React.JSX.Element => {
  const styles = StyleSheet.create({
    root: {
      borderRadius: 8,
      height: 48,
      width: width,
      borderWidth: 1,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      minWidth: width,
      maxWidth: width,
      borderColor:
        hasError && error
          ? appConstants.color.errorColor
          : appConstants.color.strokeColor,
    },
  });

  return (
    <View>
      <TextInput
        style={styles.root}
        autoCapitalize={capitalization}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        inputMode={inputType}
        onBlur={onBlur}
      />
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
    </View>
  );
};

export default CustomInputField;
