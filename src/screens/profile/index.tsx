import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import MyAppBar from '../../components/appbar';
import {Chip, Text} from 'react-native-paper';
import {Body1, Text2, Text3, Text4, Text6} from '../../components/text';
import appConstants from '../../utils/constants/constants';
import MyAvatar from '../../components/avatar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import Clipboard from '@react-native-clipboard/clipboard';

import {useToast} from 'react-native-toast-notifications';

// import {useNavigation} from '@react-navigation/native';

type ListItem = {
  title: string;
  icon: string;
  route: string;
};

export default function MyProfile({navigation}: any) {
  const refLInk: string = 'peerwallet.com/u/sly';
  const listItems: ListItem[] = [
    {title: 'Edit Profile', icon: 'person-outline', route: 'EditProfile'},
    {title: 'Verification', icon: 'shield-check-outline', route: ''},
    {title: 'Recent Activities', icon: 'progress-clock', route: ''},
    {title: 'Settings', icon: 'gear', route: 'Settings'},
    {title: 'Support', icon: 'support-agent', route: ''},
  ];

  const toast = useToast();

  // const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <SafeAreaView>
        {/* <MyAppBar
          leading={<IconButton icon={'arrow-left'} onPress={() => {}} />}
          titleColor="black"
          bgColor="white"
        /> */}
        <View>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Text2 text="Account" />
              <View style={styles.spacer} />
              <View style={styles.personRow}>
                <TouchableOpacity style={styles.avtrContainer}>
                  <MyAvatar
                    size={64}
                    src={require('../../assets/images/avatar.png')}
                  />
                  <View style={styles.cameraIcon}>
                    <Icon
                      size={18}
                      name="camera"
                      color={appConstants.color.primaryColor}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.spacerMini} />
                <View style={styles.nameCol}>
                  <Text style={styles.nameTxt}>John Doe</Text>
                  <Chip style={styles.statusChip} textStyle={styles.chipText}>
                    Individual Verified
                  </Chip>
                </View>
              </View>
            </View>
            <View style={styles.spacerMini} />
            <View style={styles.refLinkContainer}>
              <TouchableOpacity
                style={styles.refLinkBtn}
                onPress={() => {
                  Clipboard.setString(refLInk);
                  toast.show('Copied successfully', {
                    type: 'normal ',
                    placement: 'center',
                    duration: 4000,
                    animationType: 'zoom-in',
                  });
                }}>
                <Text6
                  text={`Your referal link is ${refLInk}`}
                  color={'white'}
                />
                <Icon
                  name="content-copy"
                  color={'white'}
                  style={styles.iconCopy}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.spacerMini} />
            <View style={styles.accountNumContainer}>
              <View style={styles.nameCol}>
                <Text6 text="Peerwallet Account Number" />
                <Text3
                  text="785273726385"
                  color={appConstants.color.infoColor}
                />
              </View>
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
            <View style={styles.spacer} />
            <View style={styles.spacerMini} />
            <View style={styles.itemsContainer}>
              {listItems?.map((item: ListItem, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={styles.listItem}
                  onPress={() => navigation.navigate(item?.route)}>
                  <View style={styles.personRow}>
                    {index === 4 || index === 0 ? (
                      <MaterialIcon
                        name={item?.icon}
                        color={appConstants.color.primaryColor}
                        size={index === 0 ? 24 : 20}
                      />
                    ) : index === 3 ? (
                      <OctIcon
                        name={item?.icon}
                        color={appConstants.color.primaryColor}
                        size={21}
                      />
                    ) : (
                      <Icon
                        name={item?.icon}
                        color={appConstants.color.primaryColor}
                        size={22}
                      />
                    )}

                    <Text style={[styles.itemTxt, {marginHorizontal: 10}]}>
                      {item?.title}
                    </Text>
                  </View>
                  <Icon
                    name="chevron-right"
                    size={21}
                    color={appConstants.color.textColor}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.spacer} />
            <View style={styles.spacerMini} />
            <TouchableOpacity
              style={[styles.itemsContainer, styles.refLinkBtn]}>
              <Icon
                name="logout"
                size={24}
                color={appConstants.color.errorColor}
              />
              <Text4 text="Log out" color={appConstants.color.errorColor} />
            </TouchableOpacity>
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
    paddingHorizontal: appConstants.spacing.space6,
  },
  spacer: {
    margin: 10,
  },
  spacerMini: {
    margin: 2,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: appConstants.spacing.space1,
  },
  personRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avtrContainer: {
    position: 'relative',
    width: 75,
    height: 75,
  },
  cameraIcon: {
    position: 'absolute',
    right: 6,
    bottom: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  nameTxt: {
    fontSize: 24,
  },
  itemTxt: {
    fontSize: 16,
    color: appConstants.color.textColor,
  },
  statusChip: {
    backgroundColor: appConstants.color.successLight,
  },
  chipText: {
    color: appConstants.color.successColor,
  },
  refLinkContainer: {
    backgroundColor: appConstants.color.infoColor,
    padding: appConstants.spacing.space1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refLinkBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconCopy: {marginHorizontal: 2},
  accountNumContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appConstants.color.infoLight,
    paddingHorizontal: appConstants.spacing.space6,
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
