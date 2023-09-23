import React, {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';
import {HelperText} from 'react-native-paper';
import ReactNativePhoneInput from 'react-native-phone-input';
import appConstants from '../../utils/constants/constants';
import {observer} from 'mobx-react';

type CustomInputFieldProps = PropsWithChildren<{
  setValue: any;
  value: any;
  error?: string;
  hasError?: boolean;
  placeholder: string;
  width?: any;
  country: string;
  onSelect: any;
}>;

function CustomPhoneInput({
  error,
  hasError,
  placeholder,
  value,
  width,
  setValue,
  country,
  onSelect,
}: CustomInputFieldProps): React.JSX.Element {
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
      borderColor: appConstants.color.strokeColor,
    },
  });

  // const selectedCountries: CountriesListItem[] = [
  //   {
  //     name: 'ng',
  //     dialCode: '+1',
  //     priority: 1,
  //     areaCodes: null,
  //     iso2: '',
  //   },
  //   {name: 'ng', dialCode: '+234', priority: 2, areaCodes: null, iso2: ''},
  // ];

  return (
    <View>
      <ReactNativePhoneInput
        textProps={{
          placeholder: placeholder,
          textAlign: 'left',
        }}
        onPressFlag={() => {}}
        allowZeroAfterCountryCode={false}
        flagStyle={{width: 32, height: 24}}
        textStyle={{fontSize: 14}}
        autoFormat={true}
        style={styles.root}
        initialCountry={country}
        // renderFlag={}
        onSelectCountry={onSelect}
        initialValue={value}
        pickerButtonColor={appConstants.color.primaryColor}
        onChangePhoneNumber={e => setValue('phone', e)}
      />
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
    </View>
  );
}

export default observer(CustomPhoneInput);
