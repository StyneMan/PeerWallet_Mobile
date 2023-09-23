import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import appConstants from '../../../utils/constants/constants';
import CustomInputField from '../../../components/input/custominput';
import {Formik} from 'formik';
import * as Yup from 'yup';
// import CustomPhoneInput from '../../../components/input/customphonefield';
import PrimaryButton from '../../../components/button/primarybutton';
import CustomSelect from '../../../components/input/customselect';
import {countriesArray} from '../../../data/countries';
import CountryPhoneField from '../../../components/input/phonefield';
import {countryCodes} from '../../../data/countries_codes';

export default function CompanyProfile() {
  const [mCountry, setMCountry] = React.useState(null);
  const [isoCode, setISOCode] = React.useState('us');
  const [phoneCode, setPhoneCode] = React.useState('1');

  const personalSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),

    currency: Yup.string(),
    website: Yup.string().url().nullable(),
    companyAddress: Yup.string().required('Address is required'),
    state: Yup.string(),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.number().required('Zip code name is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  React.useEffect(() => {
    if (mCountry) {
      let selected = countryCodes.filter(
        item => item?.country?.toLowerCase() === mCountry?.toLowerCase(),
      );
      // console.log('SELECTED', selected[0].code.toLowerCase());
      setISOCode(selected[0].iso.toLowerCase());
      setPhoneCode(selected[0].code);
    }
  }, [mCountry]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Formik
        initialValues={{
          companyName: null,
          currency: '',
          website: null,
          companyAddress: null,
          companyState: '',
          companyCountry: '',
          city: '',
          zipCode: 0,
          phone: '',
        }}
        validationSchema={personalSchema}
        onSubmit={(values: any) => {
          //   navigation.navigate('OTP', {from: 'login'});
        }}>
        {({
          errors,
          values,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <View style={styles.root}>
            <View style={styles.inputBlock}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>Company Name</Text>
                <Text style={styles.asterisk}>*</Text>
              </View>
              <CustomInputField
                inputType="text"
                onChange={handleChange}
                value={values.companyName}
                placeholder="Enter Company Name"
                hasError={Boolean(touched.companyName && errors.companyName)}
                error={errors.companyName}
              />
            </View>

            <View style={styles.inputBlock}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>Company Address</Text>
                <Text style={styles.asterisk}>*</Text>
              </View>
              <CustomInputField
                inputType="text"
                onChange={handleChange}
                value={values.companyName}
                placeholder="Enter Company Address"
                hasError={Boolean(touched.companyName && errors.companyName)}
                error={errors.companyName}
              />
            </View>

            <View style={styles.inputBlock}>
              <View style={styles.inputGrid}>
                <View style={styles.gridItem}>
                  <View style={styles.titleRow}>
                    <Text style={styles.title}>Company City</Text>
                    <Text style={styles.asterisk}>*</Text>
                  </View>
                  <CustomInputField
                    inputType="text"
                    onChange={handleChange}
                    value={values.city}
                    placeholder="Enter Company City"
                    hasError={Boolean(touched.city && errors.city)}
                    error={errors.city}
                  />
                </View>

                <View style={styles.spacer} />

                <View style={styles.gridItem}>
                  <View style={styles.titleRow}>
                    <Text style={styles.title}>Zip code</Text>
                    <Text style={styles.asterisk}>*</Text>
                  </View>
                  <CustomInputField
                    inputType="numeric"
                    onChange={handleChange}
                    value={values.zipCode}
                    placeholder="Enter Zip code"
                    hasError={Boolean(touched.zipCode && errors.zipCode)}
                    error={errors.zipCode}
                  />
                </View>
              </View>
            </View>

            <View style={styles.inputBlock}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>Company Country</Text>
                <Text style={styles.asterisk}>*</Text>
              </View>
              <CustomSelect
                placeholder="Select Country"
                value={mCountry}
                setValue={setMCountry}
                items={countriesArray}
              />

              {/* <CustomInputField
                inputType="text"
                onChange={handleChange}
                value={values.country}
                placeholder="Select Country"
                hasError={Boolean(touched.country && errors.country)}
                error={errors.country}
              /> */}
            </View>

            <View style={styles.inputBlock}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>Company State</Text>
                <Text style={styles.asterisk}>*</Text>
              </View>
              <CustomInputField
                inputType="text"
                onChange={handleChange}
                value={values.country}
                placeholder="Select State"
                hasError={Boolean(touched.country && errors.country)}
                error={errors.country}
              />
            </View>

            <View style={styles.inputBlock}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>Company Phone Number</Text>
                <Text style={styles.asterisk}>*</Text>
              </View>

              <CountryPhoneField
                code={phoneCode}
                iso={isoCode}
                onChange={e => {
                  setFieldValue('phone', e);
                }}
                placeholder="Enter phone number"
                value={values.phone}
                hasError={Boolean(touched.phone && errors.phone)}
                error={errors.phone}
              />
            </View>

            <View style={styles.spacer} />
            <PrimaryButton buttonText="Update Profile" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    padding: appConstants.spacing.space6,
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputGrid: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridItem: {
    display: 'flex',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputBlock: {
    marginBottom: appConstants.spacing.space1,
  },
  asterisk: {
    color: appConstants.color.errorColor,
  },
  title: {
    fontSize: 11,
    fontWeight: '400',
    marginRight: 10,
  },
  spacer: {
    margin: appConstants.spacing.space1,
  },
});
