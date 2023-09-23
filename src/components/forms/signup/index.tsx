import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Body1} from '../../text';
import CustomInputField from '../../input/custominput';
import CustomPasswordField from '../../input/passwordinput';
import PrimaryButton from '../../button/primarybutton';
import CustomCheckbox from '../../checkbox';
import {Formik} from 'formik';
import * as Yup from 'yup';
import appStore from '../../../utils/state/appstate';
// import {object, string} from 'yup';

interface SignupFormProps {
  navigation: any;
}

export default function SignupForm({navigation}: SignupFormProps) {
  const [checked, setChecked] = React.useState(false);

  const signupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(7, 'Minimum of 8 chars required!')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(7, 'Minimum of 8 chars required!')
      .oneOf([Yup.ref('password'), null], 'Password does not match!')
      .required('Password confirmation is required'),
  });

  const termsUrl = 'https://peerwallet.com/terms';

  const openUrl = () => {
    Linking.canOpenURL(termsUrl).then(supported => {
      supported && Linking.openURL(termsUrl);
    });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
      }}
      validationSchema={signupSchema}
      onSubmit={values => {
        appStore.setLoading(true);
        setTimeout(() => {
          appStore.setLoading(false);
          console.log(values.email);
          navigation.navigate('OTP', {from: 'register'});
        }, 3000);
      }}>
      {({handleChange, handleSubmit, values, touched, errors, handleBlur}) => (
        <View style={styles.container}>
          <View style={styles.flexRow}>
            <View style={styles.flexExpand}>
              <Body1 text="First Name" />
              <View style={styles.spacemini} />
              <CustomInputField
                capitalization={'words'}
                onChange={handleChange('firstName')}
                inputType="text"
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                placeholder="Enter First Name"
                hasError={Boolean(touched.firstName && errors.firstName)}
                error={touched.firstName && errors.firstName}
              />
            </View>
            <View style={{margin: 5}} />
            <View style={styles.flexExpand}>
              <Body1 text="Last Name" />
              <View style={styles.spacemini} />
              <CustomInputField
                capitalization={'words'}
                onChange={handleChange('lastName')}
                inputType="text"
                value={values.lastName}
                placeholder="Enter Last Name"
                hasError={Boolean(touched.lastName && errors.lastName)}
                error={errors.lastName}
              />
            </View>
          </View>
          <View style={styles.space} />
          <Body1 text="Email Address" />
          <View style={styles.spacemini} />
          <CustomInputField
            onChange={handleChange('email')}
            inputType="email"
            value={values.email}
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
            placeholder="Enter Password"
            hasError={Boolean(touched.password && errors.password)}
            error={errors.password}
          />
          <View style={styles.space} />
          <Body1 text="Confirm Password" />
          <View style={styles.spacemini} />
          <CustomPasswordField
            onChange={handleChange('confirmPassword')}
            value={values.confirmPassword}
            placeholder="Confirm Password"
            hasError={Boolean(
              touched.confirmPassword && errors.confirmPassword,
            )}
            error={errors.confirmPassword}
          />
          <View style={styles.forgotRow}>
            <CustomCheckbox
              title="Agree to the "
              linkText="terms & conditions"
              onPress={openUrl}
              setChecked={setChecked}
              checked={checked}
            />
          </View>
          <View style={styles.space} />
          <PrimaryButton
            onPress={handleSubmit}
            buttonText="Register"
            isEnabled={checked}
          />
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
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexExpand: {
    flex: 1,
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
