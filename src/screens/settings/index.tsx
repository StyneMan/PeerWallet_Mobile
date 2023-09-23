import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import appConstants from '../../utils/constants/constants';
import {Text2, Text6} from '../../components/text';
// import MyAppBar from '../../components/appbar';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Octicons';

export default function SettingsScreen({navigation}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <IconButton
          icon={'arrow-left'}
          onPress={() => navigation.goBack()}
          style={styles.btnBack}
        />
        <View style={styles.content}>
          <Text2 text="Settings" />
          <View style={styles.spacer} />
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('PinSettings')}>
            <Icon
              name="gear"
              size={18}
              color={appConstants.color.primaryColor}
            />
            <View style={styles.spacer} />
            <Text6 text="Pin Settings" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  btnBack: {
    marginHorizontal: appConstants.spacing.space4,
  },
  content: {
    paddingHorizontal: appConstants.spacing.space6,
  },
  spacer: {
    margin: appConstants.spacing.space2,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: appConstants.spacing.space1,
  },
});
