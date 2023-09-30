import React from 'react';

import OTPTextInput from 'react-native-otp-textinput';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
// import LinkButton from '../../../components/button/linkbutton';
import BrandImageMax from '../../../components/image/brandmax';

import {Text2, Text5} from '../../../components/text';
import Background from '../../../components/background';
import PrimaryButton from '../../../components/button/primarybutton';
import LinkButton from '../../../components/button/linkbutton';
import appConstants from '../../../utils/constants/constants';
import SuccessDialog from '../../../components/dialog';
import appStore from '../../../utils/state/appstate';

export default function OTPScreen({navigation, route}: any) {
  const [otpCode, setOTPCode] = React.useState<string | null>();
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const {from} = route.params;
  return (
    <Background>
      <SuccessDialog
        open={openDialog}
        setOpen={setOpenDialog}
        action={() => navigation.navigate('Login')}
        buttonText="Log in"
        description="Your account has been successfully created."
        title="Registration Successful!"
        route="Login"
      />
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.spacer} />
          <BrandImageMax />
          <View style={styles.spacer} />
          <Text2 text="Input OTP" />
          <View>
            <Text>Please enter the OTP sent to your Email</Text>
          </View>
          <View style={styles.spacerMini} />
          <OTPTextInput
            handleTextChange={e => setOTPCode(e)}
            inputCount={6}
            tintColor={appConstants.color.strokeColor}
            keyboardType="numeric"
            offTintColor={appConstants.color.primaryColor}
            textInputStyle={styles.inputContainer}
          />
          {/* <OtpInputs
            autofillFromClipboard={false}
            handleChange={(code: string) => setOTPCode(code)}
            numberOfInputs={6}
            editable={true}
            inputContainerStyles={styles.inputContainer}
          /> */}
          <View style={styles.spacerMini} />
          <PrimaryButton
            buttonText="Proceed"
            onPress={() => {
              appStore.setLoading(true);
              setTimeout(() => {
                appStore.setLoading(false);
                setOTPCode('');
                if (from === 'login') {
                  navigation.navigate('Dashboard');
                } else if (from === 'register') {
                  setOpenDialog(true);
                } else {
                  navigation.navigate('SecurityQuestion');
                }
              }, 3000);
            }}
            isEnabled={otpCode?.length === 6 ? true : false}
          />
          <View style={{margin: 8}} />
          <View style={styles.bottomRow}>
            <Text5 text={"Didn't receive code? "} />
            <LinkButton buttonText={'Resend'} onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: appConstants.spacing.space3,
  },
  spacer: {
    margin: 24,
  },
  spacerMini: {
    margin: 16,
  },
  inputContainer: {
    borderRadius: 8,
    height: 64,
    width: 40,
    margin: 2,
    borderWidth: 1,
    marginHorizontal: 4,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderColor: appConstants.color.primaryColor,
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inp: {
    backgroundColor: 'red',
  },
});
