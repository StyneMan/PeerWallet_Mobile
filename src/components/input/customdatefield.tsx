import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import appConstants from '../../utils/constants/constants';
import {HelperText} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

type CustomInputFieldProps = PropsWithChildren<{
  date: any;
  error?: string;
  hasError?: boolean;
  placeholder: string;
  setDate: any;
}>;

const CustomDateField = ({
  date,
  placeholder,
  error,
  hasError = false,
  setDate,
}: CustomInputFieldProps): React.JSX.Element => {
  const [isChanged, setChanged] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const styles = StyleSheet.create({
    root: {
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
    btnContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 46,
      width: '100%',
    },
    text: {
      textAlign: 'left',
      color: isChanged ? 'black' : '#ccc',
      fontSize: 13,
    },
  });

  return (
    <View
      style={[
        styles.root,
        {
          borderColor:
            hasError && error
              ? appConstants.color.errorColor
              : appConstants.color.strokeColor,
        },
      ]}>
      <TouchableWithoutFeedback onPress={() => setOpen(true)}>
        <View style={styles.btnContainer}>
          <Text style={styles.text}>
            {isChanged ? date.toLocaleDateString('en-GB') : placeholder}
          </Text>
          <Icon name="calendar" size={16} />
        </View>
      </TouchableWithoutFeedback>
      <DateTimePickerModal
        isVisible={open}
        mode="date"
        onConfirm={(val: any) => {
          setDate(val);
          setChanged(true);
          setOpen(false);
        }}
        // minimumDate={new Date('01/01/2001')}
        // maximumDate={new Date('01/01/2004')}
        onCancel={() => setOpen(false)}
      />

      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
    </View>
  );
};

export default CustomDateField;
