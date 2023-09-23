import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import appConstants from '../../../utils/constants/constants';
import CustomInputField from '../../../components/input/custominput';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomDateField from '../../../components/input/customdatefield';
import CustomSelect from '../../../components/input/customselect';
import PrimaryButton from '../../../components/button/primarybutton';
import {countriesArray} from '../../../data/countries';
import {countryCodes} from '../../../data/countries_codes';
import CountryPhoneField from '../../../components/input/phonefield';

export default function PersonalProfile() {
  const [mdate, setMDate] = useState(null);
  const [value, setValue] = useState(null);
  const [mCountry, setMCountry] = useState(null);
  const [isoCode, setISOCode] = useState('us');
  const [phoneCode, setPhoneCode] = useState('1');

  const personalSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    gender: Yup.string().required('Gender is required'),
    otherName: Yup.string(),
    dob: Yup.string().required('Date of birth is required'),
    currency: Yup.string(),
    website: Yup.string().url(),
    address: Yup.string().required('Address is required'),
    state: Yup.string(),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.number().required('Zip code name is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  useEffect(() => {
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
          firstName: null,
          lastName: null,
          otherName: null,
          gender: 'male',
          dob: null,
          currency: null,
          website: null,
          address: null,
          state: '',
          country: '',
          city: null,
          zipCode: 0,
          phone: null,
        }}
        validationSchema={personalSchema}
        onSubmit={values => {
          console.log(values.city);

          // navigation.navigate('OTP', {from: 'login'});
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
            <View style={styles.cardSection}>
              <View style={styles.inputBlock}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>First Name</Text>
                  <Text style={styles.asterisk}>*</Text>
                </View>
                <CustomInputField
                  inputType="text"
                  onChange={handleChange('firstName')}
                  value={values.firstName}
                  placeholder="Enter First Name"
                  hasError={Boolean(touched.firstName && errors.firstName)}
                  error={errors.firstName}
                />
              </View>

              <View style={styles.inputBlock}>
                <View style={styles.inputGrid}>
                  <View style={styles.gridItem}>
                    <View style={styles.titleRow}>
                      <Text style={styles.title}>Last Name</Text>
                      <Text style={styles.asterisk}>*</Text>
                    </View>
                    <CustomInputField
                      inputType="text"
                      onChange={handleChange('lastName')}
                      value={values.lastName}
                      placeholder="Enter Last Name"
                      hasError={Boolean(touched.lastName && errors.lastName)}
                      error={errors.lastName}
                    />
                  </View>

                  <View style={styles.spacer} />

                  <View style={styles.gridItem}>
                    <View style={styles.titleRow}>
                      <Text style={styles.title}>Other Name</Text>
                      <Text style={styles.asterisk} />
                    </View>
                    <CustomInputField
                      inputType="text"
                      onChange={handleChange('otherName')}
                      value={values.otherName}
                      placeholder="Enter Other Name"
                      hasError={Boolean(touched.otherName && errors.otherName)}
                      error={errors.otherName}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.inputBlock}>
                <View style={styles.inputGrid}>
                  <View style={styles.gridItem}>
                    <View style={styles.titleRow}>
                      <Text style={styles.title}>Date Of Birth</Text>
                      <Text style={styles.asterisk}>*</Text>
                    </View>

                    <CustomDateField
                      date={mdate}
                      placeholder="DD/MM/YYYY"
                      setDate={setMDate}
                    />
                  </View>

                  <View style={styles.spacer} />

                  <View style={styles.gridItem}>
                    <View style={styles.titleRow}>
                      <Text style={styles.title}>Gender</Text>
                      <Text style={styles.asterisk}>*</Text>
                    </View>
                    <CustomSelect
                      placeholder="Select Gender"
                      value={value}
                      setValue={setValue}
                      items={['Male', 'Female']}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.cardSection}>
              <View style={styles.inputBlock}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>Currency</Text>
                  <Text style={[styles.asterisk, {fontStyle: 'italic'}]}>
                    {'(This cannot be changed)'}
                  </Text>
                </View>
                <CustomInputField
                  inputType="text"
                  onChange={handleChange('firstName')}
                  value={values.firstName}
                  placeholder="Enter First Name"
                  hasError={Boolean(touched.firstName && errors.firstName)}
                  error={errors.firstName}
                />
              </View>

              <View style={styles.inputBlock}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>Website URL:</Text>
                </View>
                <CustomInputField
                  inputType="text"
                  onChange={handleChange('website')}
                  value={values.website}
                  placeholder="https://mywebsite.com"
                  hasError={Boolean(touched.website && errors.website)}
                  error={errors.website}
                />
              </View>
            </View>

            <View style={styles.cardSection}>
              <View style={styles.inputBlock}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>Address</Text>
                  <Text style={styles.asterisk}>*</Text>
                </View>
                <CustomInputField
                  inputType="text"
                  onChange={handleChange('address')}
                  value={values.address}
                  placeholder="Enter Address"
                  hasError={Boolean(touched.address && errors.address)}
                  error={errors.address}
                />
              </View>

              <View style={styles.inputBlock}>
                <View style={styles.inputGrid}>
                  <View style={styles.gridItem}>
                    <View style={styles.titleRow}>
                      <Text style={styles.title}>City</Text>
                      <Text style={styles.asterisk}>*</Text>
                    </View>
                    <CustomInputField
                      inputType="text"
                      onChange={handleChange('city')}
                      value={values.city}
                      placeholder="Enter City"
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
                      capitalization={'none'}
                      inputType="numeric"
                      onChange={handleChange('zipCode')}
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
                  <Text style={styles.title}>Country</Text>
                  <Text style={styles.asterisk}>*</Text>
                </View>
                <CustomSelect
                  placeholder="Select Country"
                  value={mCountry}
                  setValue={setMCountry}
                  items={countriesArray}
                />
              </View>

              <View style={styles.inputBlock}>
                <View style={styles.titleRow}>
                  <Text style={styles.title}>State</Text>
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
                  <Text style={styles.title}>Phone Number</Text>
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
            </View>

            <View
              style={{
                marginBottom: appConstants.spacing.space2,
                height: 0.5,
                backgroundColor: '#ddd',
              }}
            />

            <View
              style={[
                styles.inputBlock,
                {paddingHorizontal: appConstants.spacing.space6},
              ]}>
              <PrimaryButton
                buttonText="Update Profile"
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: appConstants.spacing.space4,
    width: '100%',
  },
  cardSection: {
    backgroundColor: 'white',
    marginBottom: appConstants.spacing.space3,
    paddingHorizontal: appConstants.spacing.space6,
    paddingTop: appConstants.spacing.space3,
  },
  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 4,
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
    marginBottom: 4,
    display: 'flex',
    width: '100%',
  },
  asterisk: {
    color: appConstants.color.errorColor,
  },
  title: {
    fontSize: 11,
    fontWeight: '400',
    marginRight: 4,
  },
  spacer: {
    margin: 5,
  },
  inpRoot: {
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
