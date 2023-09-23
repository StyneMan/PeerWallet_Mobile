import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Body1} from '../../text';
import CustomInputField from '../../input/custominput';
import PrimaryButton from '../../button/primarybutton';
import {Formik} from 'formik';
import * as Yup from 'yup';
import appstate from '../../../utils/state/appstate';

interface SecurityQuestionFormProps {
  navigation: any;
}

export default function SecurityQuestionForm({
  navigation,
}: SecurityQuestionFormProps): React.JSX.Element {
  const securitySchema = Yup.object().shape({
    answer: Yup.string().required('Your response is required'),
  });

  return (
    <Formik
      initialValues={{answer: ''}}
      validationSchema={securitySchema}
      onSubmit={values => {
        console.log(values.answer);
        appstate.setLoading(true);
        setTimeout(() => {
          appstate.setLoading(false);
          navigation.navigate('ChangePassword');
        }, 3000);
      }}>
      {({errors, handleChange, handleSubmit, touched, values}) => (
        <View style={styles.container}>
          <Body1 text="Mother's maiden name" />
          <View style={styles.spacemini} />
          <CustomInputField
            capitalization={'none'}
            onChange={handleChange('answer')}
            inputType="text"
            value={values.answer}
            placeholder="Enter your answer here"
            hasError={Boolean(touched.answer && errors.answer)}
            error={errors.answer}
          />
          <View style={styles.space} />

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
