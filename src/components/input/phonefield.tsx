import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import {Text5} from '../text';
import {HelperText} from 'react-native-paper';
import appConstants from '../../utils/constants/constants';

interface CountryPhoneFieldProps {
  iso: string;
  code: string;
  value: string;
  onChange: any;
  error?: string;
  hasError?: boolean;
  placeholder: string;
}

export default function CountryPhoneField({
  code,
  iso,
  onChange,
  placeholder,
  error,
  value,
  hasError,
}: CountryPhoneFieldProps) {
  const styles = StyleSheet.create({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 8,
      height: 48,
      width: '100%',
      borderWidth: 1,
      paddingHorizontal: 16,
      backgroundColor: 'white',
      minWidth: '100%',
      maxWidth: '100%',
      borderColor:
        hasError && error
          ? appConstants.color.errorColor
          : appConstants.color.strokeColor,
    },
    lhs: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    expanded: {
      flex: 1,
    },
    text: {
      fontSize: 14,
      fontWeight: '500',
      paddingHorizontal: 4,
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.lhs}>
          <CountryFlag isoCode={iso} size={24} />
          <Text style={styles.text}>{`+${code}`}</Text>
        </View>
        <TextInput
          value={value}
          inputMode="tel"
          style={styles.expanded}
          onChangeText={onChange}
          placeholder={placeholder}
        />
      </View>
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
    </View>
  );
}
