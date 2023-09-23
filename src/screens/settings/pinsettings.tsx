import React from 'react';
import {SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import {Text2} from '../../components/text';
import {TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import appConstants from '../../utils/constants/constants';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import appstate from '../../utils/state/appstate';
// import CheckBox from '@react-native-community/checkbox';

export default function PinSettings({navigation}: any) {
  const [switched, setSwitched] = React.useState(true);
  // const items: readonly any[] = [
  //   {
  //     title: 'Setup Pin',
  //     route: '',
  //   },
  //   {
  //     title: 'Change Pin',
  //     route: '',
  //   },
  // ];
  return (
    <View>
      <SafeAreaView>
        <IconButton
          icon={'arrow-left'}
          onPress={() => navigation.goBack()}
          style={styles.btnBack}
        />
        <View style={[styles.content, styles.container]}>
          <Text2 text="Pin Settings" />
          <View style={styles.spacer} />
        </View>
        <View style={styles.spacer} />

        {appstate.isPinSet ? (
          <View style={[styles.content, styles.container]}>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('ChangePin')}>
              <View style={styles.lhs}>
                <View style={styles.bullet} />
                <Text style={styles.text}> Change Pin</Text>
              </View>
              <Icon name="arrow-right" size={14} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={[styles.content, styles.container]}>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate('PinSetup')}>
              <View style={styles.lhs}>
                <View style={styles.bullet} />
                <Text style={styles.text}> Setup Pin</Text>
              </View>
              <Icon name="arrow-right" size={14} />
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.spacer} />

        <View style={[styles.content, styles.container]}>
          <View style={styles.listItem}>
            <View style={styles.lhs}>
              <View style={styles.bullet} />
              <Text style={styles.text}>Biometrics</Text>
            </View>
            <Switch
              value={switched}
              onValueChange={() => setSwitched(!switched)}
              trackColor={{
                true: appConstants.color.primaryColor,
              }}
              // trackColor={ appConstants.color.primaryColor}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: appConstants.spacing.space6,
  },
  spacer: {
    margin: appConstants.spacing.space2,
  },
  btnBack: {
    marginHorizontal: appConstants.spacing.space4,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: appConstants.spacing.space2,
  },
  lhs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: appConstants.color.primaryColor,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: appConstants.spacing.space1,
  },
});
