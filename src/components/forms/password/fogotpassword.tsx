import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Body1} from '../../text';
import CustomInputField from '../../input/custominput';
import PrimaryButton from '../../button/primarybutton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import appstate from '../../../utils/state/appstate';

interface ForgotPasswordFormProps {
  navigation: any;
}

export default function ForgotPasswordForm({
  navigation,
}: ForgotPasswordFormProps): React.JSX.Element {
  // const [email, setEmail] = React.useState('');

  const passwordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
  });

  return (
    <Formik
      initialValues={{email: ''}}
      validationSchema={passwordSchema}
      onSubmit={values => {
        console.log(values.email);
        appstate.setLoading(true);
        setTimeout(() => {
          appstate.setLoading(false);
          navigation.navigate('OTP', {from: 'forgot'});
        }, 3000);
      }}>
      {({handleChange, handleSubmit, values, handleBlur, touched, errors}) => (
        <View style={styles.container}>
          <Body1 text="Email Address" />
          <View style={styles.spacemini} />
          <CustomInputField
            capitalization={'none'}
            onChange={handleChange('email')}
            inputType="email"
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Enter Email Address"
            hasError={Boolean(touched.email && errors.email)}
            error={errors.email}
          />
          <View style={styles.space} />
          <PrimaryButton onPress={handleSubmit} buttonText="Continue" />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 10,
    padding: 16,
    width: '100%',
    justifyContent: 'flex-start',
  },
  space: {
    height: 21,
  },
  spacemini: {
    height: 5,
  },
  forgotRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  divider: {height: 21, padding: 1, backgroundColor: 'black', marginLeft: 6},
});
