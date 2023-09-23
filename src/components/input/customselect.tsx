// import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, View} from 'react-native';
// import Picker from 'react-native-picker-select';
import SelectDropdown from 'react-native-select-dropdown';
import appConstants from '../../utils/constants/constants';
import Icon from 'react-native-vector-icons/Octicons';
import {HelperText} from 'react-native-paper';
// import RNPickerSelect from 'react-native-picker-select';

// import {SelectList} from 'react-native-dropdown-select-list';
// import appConstants from '../../utils/constants/constants';

interface CustomSelectProps {
  open?: boolean;
  setOpen?: any;
  value?: string;
  items?: any;
  setValue?: any;
  error?: string;
  hasError?: boolean;
  placeholder: string;
}

export default function CustomSelect({
  placeholder,
  setValue,
  items,
  hasError,
  error,
}: CustomSelectProps) {
  // const [clicked, setClicked] = React.useState(false);
  // const containerStyle = {backgroundColor: 'white', padding: 20};
  // const [data, setData] = React.useState(countries);

  // const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <View>
      <SelectDropdown
        data={items}
        searchPlaceHolder={placeholder}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setValue(selectedItem);
        }}
        searchPlaceHolderColor="grey"
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
        dropdownIconPosition="right"
        buttonStyle={styles.root}
        buttonTextStyle={styles.textStyle}
        renderDropdownIcon={() => (
          <Icon name="triangle-down" size={22} style={{marginRight: 2}} />
        )}
        defaultButtonText={placeholder}
        // defaultValue={value}
        dropdownOverlayColor="transparent"
      />
      <HelperText type="error" visible={hasError}>
        {error}
      </HelperText>
    </View>
  );
}

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 0.5,
//     borderColor: 'purple',
//     borderRadius: 8,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
// });

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    height: 48,
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    borderColor: appConstants.color.strokeColor,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
