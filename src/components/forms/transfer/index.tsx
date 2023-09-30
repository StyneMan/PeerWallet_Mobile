import React from 'react';
import {View, StyleSheet, Text, Linking} from 'react-native';
import CustomInputField from '../../input/custominput';
import appConstants from '../../../utils/constants/constants';
import CustomAmountField from '../../input/amountfield';
import CustomSelect from '../../input/customselect';
import CustomCheckbox from '../../checkbox';
import PrimaryButton from '../../button/primarybutton';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';

export default function TransferForm() {
  //   const [emailAcc, setEmailAcc] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState(null); // can also be null

  const navigation = useNavigation();

  const termsUrl = 'https://peerwallet.com/terms';

  const openUrl = () => {
    Linking.canOpenURL(termsUrl).then(supported => {
      supported && Linking.openURL(termsUrl);
    });
  };

  return (
    <Formik
      initialValues={{
        emailacc: '',
        amount: '',
        delivery: '',
      }}
      onSubmit={values => {
        console.log(values.delivery);
        navigation.navigate('ConfirmTransfer');
      }}
      validate={values => {
        const errors = {};

        if (!values.emailacc) {
          errors.emailacc = 'Email or Account number is required';
        } else if (values.emailacc?.match(/[a-zA-Z]/) !== null) {
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailacc)
          ) {
            errors.emailacc = 'Invalid email address';
          }
        }

        if (!values.amount) {
          errors.amount = 'Amount to transfer is required';
        }

        if (!values.delivery) {
          errors.delivery = 'Delivery option is required';
        }

        return errors;
      }}>
      {({
        touched,
        errors,
        handleChange,
        handleSubmit,
        values,
        setFieldValue,
      }) => (
        <View style={styles.root}>
          <Text style={styles.text}>Email or Account Number</Text>
          <CustomInputField
            value={values.emailacc}
            inputType="text"
            capitalization={'none'}
            onChange={handleChange('emailacc')}
            error={errors.emailacc}
            hasError={Boolean(touched.emailacc && errors.emailacc)}
            placeholder="Enter Email or Account Number"
          />
          <View style={styles.spacer} />
          <Text style={styles.text}>Amount to Transfer</Text>
          <CustomAmountField
            placeholder="Enter Amount"
            setValue={setValue}
            value={value}
            onChange={(we: string) => {
              console.log('CHANHE TO :: ', we);
              handleChange('amount');
              let filtered = we?.replaceAll(',', '');
              setFieldValue('amount', filtered);
              console.log('FILTERED :: ', filtered);
            }}
            error={errors.amount}
            hasError={Boolean(touched.amount && errors.amount)}
          />
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <Text style={styles.text}>Delivery</Text>
          <CustomSelect
            placeholder="Select delivery"
            value={values.delivery}
            items={['Instant Delivery', 'Later Delivery']}
            setValue={setFieldValue}
            name="delivery"
            error={errors.delivery}
            hasError={Boolean(touched.delivery && errors.delivery)}
          />
          <View style={styles.row}>
            <CustomCheckbox
              title="Agree to the "
              linkText="terms & conditions"
              onPress={openUrl}
              setChecked={setChecked}
              checked={checked}
            />
          </View>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <PrimaryButton
            onPress={checked ? handleSubmit : null}
            buttonText="Transfer"
            isEnabled={checked}
          />
          {values.delivery && (
            <Text
              style={[
                styles.txt,
                {
                  color:
                    values.delivery === 'Instant Delivery'
                      ? appConstants.color.successColor
                      : appConstants.color.errorColor,
                },
              ]}>
              {values.delivery === 'Instant Delivery'
                ? 'The recipient will receive it instantly.'
                : 'The recipient will not receive it instantly.'}
            </Text>
          )}
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  spacer: {
    margin: appConstants.spacing.space1,
  },
  text: {
    paddingVertical: 4,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  txt: {
    textAlign: 'center',
    padding: 6,
  },
});
