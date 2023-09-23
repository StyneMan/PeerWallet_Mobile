import React from 'react';
// import {Observer} from 'mobx-react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
// import MyAppBar from '../../../components/appbar';
import {IconButton} from 'react-native-paper';
import appConstants from '../../../utils/constants/constants';
import {Text3} from '../../../components/text';
// import OTPTextInput from 'react-native-otp-textinput';
import Keypad from '../../../components/keypad';
import {useNavigation} from '@react-navigation/native';
// import appstate from '../../../utils/state/appstate';

function PinSetup() {
  const [pinCode, setPinCode] = React.useState('');
  const navigation = useNavigation();

  // appstate.setPin

  return (
    <View>
      <SafeAreaView>
        <IconButton
          icon={'arrow-left'}
          onPress={() => navigation.goBack()}
          style={styles.btnBack}
        />
        <View style={styles.container}>
          <View>
            <Text3 text="Pin Setup" color={'black'} align={'center'} />
            <Text style={styles.text}>Enter a 4-digit pin to continue</Text>
            <View style={styles.spacer} />
            {/* <OTPTextInput
              handleTextChange={e => setPinCode(e)}
              inputCount={4}
              tintColor={appConstants.color.strokeColor}
              keyboardType="numeric"
              offTintColor={appConstants.color.primaryColor}
              textInputStyle={styles.inputContainer}
            /> */}
            <View style={styles.otpRow}>
              <View style={styles.inputContainer}>
                <Text style={styles.txt}>{`${
                  [...pinCode][0] === undefined ? '' : [...pinCode][0]
                }`}</Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.txt}>{`${
                  [...pinCode][1] === undefined ? '' : [...pinCode][1]
                }`}</Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.txt}>{`${
                  [...pinCode][2] === undefined ? '' : [...pinCode][2]
                }`}</Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.txt}>{`${
                  [...pinCode][3] === undefined ? '' : [...pinCode][3]
                }`}</Text>
              </View>
            </View>
          </View>
          <View style={styles.keypad}>
            <Keypad
              from="pinsetup"
              hasBio={false}
              setValue={setPinCode}
              value={pinCode}
              routeTo="ConfirmPin"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: appConstants.spacing.space3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '94%',
  },
  spacer: {
    margin: appConstants.spacing.space2,
  },
  btnBack: {
    marginHorizontal: appConstants.spacing.space4,
  },
  text: {
    textAlign: 'center',
  },
  inputContainer: {
    borderRadius: 8,
    height: '100%',
    width: 56,
    margin: 2,
    borderWidth: 1,
    marginHorizontal: appConstants.spacing.space1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderColor: appConstants.color.strokeColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    verticalAlign: 'middle',
    textAlignVertical: 'center',
  },
  keypad: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  otpRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  txt: {
    textAlign: 'center',
    fontSize: 24,
  },
});

export default PinSetup;
