import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {Body1, Text2, Text3, Text5, Text6} from '../../components/text';
import appConstants from '../../utils/constants/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useToast} from 'react-native-toast-notifications';
import Clipboard from '@react-native-clipboard/clipboard';

export default function AddFunds({navigation}: any) {
  const toast = useToast();
  //   const accNum =

  // const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <SafeAreaView>
        <IconButton
          icon={'arrow-left'}
          onPress={() => navigation.goBack()}
          style={styles.btnBack}
        />

        <View>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Text2 text="Add funds" />
              <Text6 text="Add funds to your PeerWallet balance" />
              <View style={styles.spacer} />
            </View>
            <View style={styles.spacerMini} />
            <View>
              <View style={styles.content}>
                <Text5 text="Peerwallet Account Number" />
              </View>
              <View style={styles.accountNumContainer}>
                <Text3
                  text="785273726385"
                  color={appConstants.color.infoColor}
                />
                <TouchableOpacity
                  style={styles.refLinkBtn}
                  onPress={() => {
                    Clipboard.setString('785273726385');
                    toast.show('Copied successfully', {
                      type: 'normal ',
                      placement: 'center',
                      duration: 4000,
                      animationType: 'zoom-in',
                    });
                  }}>
                  <Body1 text="copy" />
                  <Icon
                    name="content-copy"
                    color={appConstants.color.primaryColor}
                    style={styles.iconCopy}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.spacer} />
            <View style={styles.spacerMini} />
            <Text style={styles.content}>Add funds via crypto:</Text>
            <View style={styles.spacer} />
            <View>
              <View style={styles.content}>
                <Text5 text="PWAT" />
              </View>
              <View style={styles.accountNumContainer}>
                <Text6 text="0x24ea6709b77aaf83d10f22d9dc5ac47e58ba8e6f" />
                <TouchableOpacity
                  style={styles.refLinkBtn}
                  onPress={() => {
                    Clipboard.setString('785273726385');
                    toast.show('Copied successfully', {
                      type: 'normal ',
                      placement: 'center',
                      duration: 4000,
                      animationType: 'zoom-in',
                    });
                  }}>
                  <Icon
                    name="content-copy"
                    color={appConstants.color.primaryColor}
                    style={styles.iconCopy}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.spacer} />
            <View style={styles.spacerMini} />
            <View>
              <View style={styles.content}>
                <Text5 text="USDT BEP20" />
              </View>
              <View style={styles.accountNumContainer}>
                <Text6 text="0x24ea6709b77aaf83d10f22d9dc5ac47e58ba8e6f" />
                <TouchableOpacity
                  style={styles.refLinkBtn}
                  onPress={() => {
                    Clipboard.setString('785273726385');
                    toast.show('Copied successfully', {
                      type: 'normal ',
                      placement: 'center',
                      duration: 4000,
                      animationType: 'zoom-in',
                    });
                  }}>
                  <Icon
                    name="content-copy"
                    color={appConstants.color.primaryColor}
                    style={styles.iconCopy}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.spacer} />
            <View style={styles.spacerMini} />
            <View style={styles.content}>
              <Text>
                You can send send funds to your custom address each time you
                want to add funds.
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    display: 'flex',
  },
  content: {
    paddingHorizontal: appConstants.spacing.space5,
  },
  spacer: {
    margin: 10,
  },
  spacerMini: {
    margin: 2,
  },

  btnBack: {
    marginHorizontal: appConstants.spacing.space2,
  },
  refLinkBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  nameCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  chipText: {
    color: appConstants.color.successColor,
  },

  iconCopy: {marginHorizontal: 2},
  accountNumContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appConstants.color.infoLight,
    paddingHorizontal: appConstants.spacing.space5,
    paddingVertical: appConstants.spacing.space3,
    alignItems: 'center',
    marginVertical: 6,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: appConstants.spacing.space6,
    paddingVertical: appConstants.spacing.space3,
    alignItems: 'stretch',
    marginVertical: 6,
  },
});
