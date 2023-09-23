import React from 'react';

import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import appConstants from '../../utils/constants/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinkButton from '../button/linkbutton';
import appstate from '../../utils/state/appstate';

interface KeypadProps {
  hasBio: boolean;
  setValue: any;
  value: string;
  routeTo: string;
  from: string;
}

function Keypad({hasBio = false, value, setValue, routeTo, from}: KeypadProps) {
  const navigation = useNavigation();

  const row1 = [
    {label: '1', value: 1},
    {label: '4', value: 4},
    {label: '7', value: 7},
    {label: '', value: 7},
  ];

  const row2 = [
    {label: '2', value: 2},
    {label: '5', value: 5},
    {label: '8', value: 8},
    {label: '0', value: 0},
  ];

  const row3 = [
    {label: '3', value: 3},
    {label: '6', value: 6},
    {label: '9', value: 9},
    {label: 'backspace-outline', value: 101},
  ];

  // const row4 = [
  //   {label: hasBio ? 'bio' : '', value: 100},
  //   {label: '0', value: 8},
  //   {label: 'backspace-outline', value: 101},
  // ];

  const handleKeyPress = (val: string) => {
    if (from === 'pinsetup') {
      if (appstate.pin.length < 4) {
        appstate.setPin(`${appstate.pin}${val}`);
      }
      if (value.length < 4) {
        setValue(`${value}${val}`);
      }

      if (appstate.pin.length === 4) {
        // Navigate to the next screen
        setTimeout(() => {
          navigation.navigate(`${routeTo}`, {
            pin: appstate.pin,
            from: 'pinsetup',
          });
        }, 1000);
      }
    } else if (from === 'confirmpin') {
      if (appstate.confirmPin.length < 4) {
        appstate.setConfirmPin(`${appstate.confirmPin}${val}`);
      }
      if (value.length < 4) {
        setValue(`${value}${val}`);
      }

      if (appstate.confirmPin.length === 4) {
        // Navigate to the next screen
        // appstate.setLoading(true);
        setTimeout(() => {
          appstate.setIsPinSet(true);
          appstate.setPin('');
          appstate.setConfirmPin('');
          // appstate.setLoading(false);
          navigation.navigate(`${routeTo}`);
        }, 1000);
      }
    }
  };

  const clearValue = () => {
    if (value.length === 1) {
      setValue('');
    } else if (value.length === 2) {
      setValue([...value][0]);
    } else if (value.length === 3) {
      setValue(value.slice(0, 2));
    } else if (value.length === 4) {
      setValue(value.slice(0, 3));
    }

    if (appstate.pin.length === 1) {
      appstate.setPin('');
    } else if (appstate.pin.length === 2) {
      appstate.setPin(appstate.pin.slice(0, 1));
    } else if (appstate.pin.length === 3) {
      appstate.setPin(appstate.pin.slice(0, 2));
    } else if (value.length === 4) {
      appstate.setPin(appstate.pin.slice(0, 3));
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.row}>
          {row1?.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.btn}
              onPress={() => handleKeyPress(item?.label)}>
              <Text style={styles.txt}>{item?.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {row2?.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.btn}
              onPress={() => handleKeyPress(item?.label)}>
              <Text style={styles.txt}>{item?.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.row}>
          {row3?.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.btn}
              onPress={
                index === 3 ? clearValue : () => handleKeyPress(item?.label)
              }>
              {index === 3 ? (
                <Icon name={item?.label} size={21} />
              ) : (
                <Text style={styles.txt}>{item?.label}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* <View style={styles.spacer} /> */}
      {/* <View style={styles.btnContainer}> */}
      <LinkButton buttonText={'Forgot Pin?'} onPress={() => {}} />
      {/* </View> */}
      <View style={styles.spacer} />
      <View style={styles.spacer} />
    </View>
  );
}

export default Keypad;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: appConstants.spacing.space2,
  },
  spacer: {
    margin: appConstants.spacing.space1,
  },
  row: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: appConstants.spacing.space2,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
  },
});
