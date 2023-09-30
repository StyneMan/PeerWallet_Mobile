import {StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import appConstants from '../../utils/constants/constants';
import {HelperText} from 'react-native-paper';
import CurrencyInput from 'react-native-currency-input';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type CustomAmountieldProps = PropsWithChildren<{
  onChange: any;
  value: any;
  error?: string;
  hasError?: boolean;
  placeholder: string;
  width?: any;
  setValue: any;
  hasSign?: boolean;
}>;

const CustomAmountField = ({
  onChange,
  value,
  setValue,
  placeholder,
  error,
  hasError = false,
  hasSign = true,
  width = '100%',
}: CustomAmountieldProps): React.JSX.Element => {
  const styles = StyleSheet.create({
    root: {
      borderRadius: 8,
      height: 48,
      width: width,
      borderWidth: 1,
      paddingHorizontal: 5,
      backgroundColor: 'white',
      minWidth: width,
      maxWidth: width,
      borderColor:
        hasError && error
          ? appConstants.color.errorColor
          : appConstants.color.strokeColor,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input: {
      height: 45,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      flex: 1,
      borderLeftWidth: 1,
      borderLeftColor: appConstants.color.strokeColor,
    },
    icon: {
      paddingRight: 4,
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        {hasSign && (
          <MCIcon name="currency-usd" size={24} style={styles.icon} />
        )}

        <CurrencyInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          onChangeValue={setValue}
          separator="."
          delimiter=","
          precision={2}
          minValue={0}
        />
      </View>
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
    </View>
  );
};

export default CustomAmountField;
