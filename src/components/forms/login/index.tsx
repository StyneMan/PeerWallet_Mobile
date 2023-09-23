import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text6, Body1} from '../../text';
import CustomInputField from '../../input/custominput';
import CustomPasswordField from '../../input/passwordinput';
import PrimaryButton from '../../button/primarybutton';
import LinkButon from '../../button/linkbutton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import appstate from '../../../utils/state/appstate';
import {observer} from 'mobx-react';

interface LoginFormProps {
  navigation: any;
  // appstate: any;
}

function LoginForm({
  navigation,
}: // appstate,
LoginFormProps): React.JSX.Element {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Minimum of 8 chars required!')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={loginSchema}
      onSubmit={values => {
        console.log(values.email);
        appstate.setLoading(true);
        setTimeout(() => {
          appstate.setLoading(false);
          navigation.navigate('OTP', {from: 'login'});
        }, 5000);
      }}>
      {({handleChange, handleSubmit, handleBlur, values, touched, errors}) => (
        <View style={styles.container}>
          <Body1 text="Email Address" />
          <View style={styles.spacemini} />
          <CustomInputField
            onChange={handleChange('email')}
            inputType="email"
            value={values.email}
            onBlur={handleBlur('email')}
            placeholder="Enter Email Address"
            hasError={Boolean(touched.email && errors.email)}
            error={errors.email}
            capitalization={'none'}
          />
          <View style={styles.space} />
          <Body1 text="Password" />
          <View style={styles.spacemini} />
          <CustomPasswordField
            onChange={handleChange('password')}
            value={values.password}
            placeholder={'Enter Password'}
            hasError={Boolean(touched.password && errors.password)}
            error={errors.password}
          />
          <View style={styles.space} />
          <PrimaryButton onPress={handleSubmit} buttonText="Log in" />
          <View style={styles.forgotRow}>
            <Text6 text="Forgot Password?" />
            <View style={styles.divider} />
            <LinkButon
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}
              buttonText="Reset Password"
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  container: {
    display: 'flex',
    margin: 10,
    padding: 16,
    width: '100%',
    justifyContent: 'flex-start',
  },
  space: {
    height: 8,
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

export default observer(LoginForm);
