import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Body1} from '../../text';
import PrimaryButton from '../../button/primarybutton';
import CustomPasswordField from '../../input/passwordinput';
import SuccessDialog from '../../dialog';
import {Formik} from 'formik';
import * as Yup from 'yup';
import appstate from '../../../utils/state/appstate';

type ChangePasswordFormProps = {
  navigation: any;
};

export default function ChangePasswordForm({
  navigation,
}: ChangePasswordFormProps): React.JSX.Element {
  const [openDialog, setOpenDialog] = React.useState(false);

  const passwordSchema = Yup.object().shape({
    password: Yup.string()
      .min(7, 'Minimum of 8 chars required!')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .min(7, 'Minimum of 8 chars required!')
      .oneOf([Yup.ref('password'), null], 'Password does not match!')
      .required('Password confirmation is required'),
  });

  return (
    <Formik
      initialValues={{password: '', confirmPassword: ''}}
      validationSchema={passwordSchema}
      onSubmit={values => {
        console.log(values.confirmPassword);
        appstate.setLoading(true);
        setTimeout(() => {
          appstate.setLoading(false);
          setOpenDialog(true);
          // navigation.navigate('OTP', {from: 'forgot'});
        }, 3000);
      }}>
      {({values, errors, touched, handleChange, handleSubmit}) => (
        <View style={styles.container}>
          <SuccessDialog
            open={openDialog}
            setOpen={setOpenDialog}
            action={() => navigation.navigate('Login')}
            buttonText="Log in"
            description="Your password has been successfully reset"
            title="Password changed"
          />
          <Body1 text="Email Address" />
          <View style={styles.spacemini} />
          <CustomPasswordField
            onChange={handleChange('password')}
            placeholder="Enter a new password"
            value={values.password}
            hasError={Boolean(touched.password && errors.password)}
            error={touched.password && errors.password}
          />
          <View style={styles.space} />
          <CustomPasswordField
            onChange={handleChange('confirmPassword')}
            placeholder="Retype password"
            value={values.confirmPassword}
            hasError={Boolean(
              touched.confirmPassword && errors.confirmPassword,
            )}
            error={touched.confirmPassword && errors.confirmPassword}
          />
          <View style={styles.space} />
          <PrimaryButton onPress={handleSubmit} buttonText="Reset password" />
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
