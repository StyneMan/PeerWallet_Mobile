import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import appConstants from '../../utils/constants/constants';
// import MyAppBar from '../../components/appbar';
// import MyAvatar from '../../components/avatar';
import Icon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import {Text1, Text4, Text5} from '../../components/text';
import CustomButton from '../../components/button/custombutton';
import QuickAction from '../../components/quickaction';
import {Card} from 'react-native-paper';
import RecentTransactions from '../transactions/components/recenttransactions';
import {useNavigation} from '@react-navigation/native';
import {useToast} from 'react-native-toast-notifications';
import MyAppBar from '../../components/appbar';

export default function HomeScreen() {
  const [showBalance, setShowBalance] = React.useState(false);
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const toast = useToast();

  const styles = StyleSheet.create({
    root: {
      height: '100%',
      backgroundColor: appConstants.color.dashboardColor,
    },
    container: {
      height: '100%',
    },
    avtrRoot: {
      position: 'relative',
      backgroundColor: appConstants.color.dashboardColor,
    },
    avtrContainer: {
      paddingHorizontal: appConstants.spacing.space3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 4,
    },
    textContainer: {
      position: 'absolute',
      width: '100%',
      left: 0,
      right: 0,
      top: 10,
      bottom: 10,
      color: 'white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: '500',
      color: 'white',
    },
    content: {
      padding: appConstants.spacing.space3,
    },
    view1: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: appConstants.spacing.space2,
    },
    spacer: {
      height: appConstants.spacing.space4,
    },
    view2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'white',
      borderTopLeftRadius: 48,
      borderTopRightRadius: 48,
      // paddingBottom: 16,
      marginTop: 21,
      height: height * 0.58,
    },
    toggleRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    v: {
      margin: 'auto',
    },
    btnRow: {
      display: 'flex',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '70%',
      marginHorizontal: appConstants.spacing.space8,
    },
    transCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: 'white',
      borderRadius: 24,
      height: height * 0.36,
      padding: appConstants.spacing.space3,
    },
  });

  return (
    <View style={styles.root}>
      <SafeAreaView>
        <View style={styles.container}>
          <MyAppBar
            title={'Welcome back'}
            titleColor="white"
            hasAvatar={true}
            onPress={() => {
              // console.log('CHECKing IT :::: ');
              // toast.show('Copie', {
              //   type: 'normal ',
              //   placement: 'center',
              //   duration: 4000,
              //   animationType: 'zoom-in',
              // });
              navigation.navigate('Account', {screen: 'MyProfile'});
            }}
            leading={<View />}
            actions={[<SimpleIcon name="bell" size={24} color={'white'} />]}
          />

          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={styles.view1}>
              <TouchableWithoutFeedback
                onPress={() => setShowBalance(!showBalance)}>
                <View style={styles.toggleRow}>
                  <Text4 text="Account Balance" color={'white'} />
                  <View style={{width: 10}} />
                  <Icon
                    name={showBalance ? 'eye-outline' : 'eye-off-outline'}
                    size={18}
                    color={'white'}
                  />
                </View>
              </TouchableWithoutFeedback>
              <View style={{height: 8}} />
              <Text1
                color={'white'}
                text={showBalance ? '$5,326.06' : '******'}
              />
              <Text5
                color={'red'}
                text={showBalance ? '($326.06)' : '******'}
              />
              <View style={{height: 16}} />
              <View style={styles.v}>
                <View style={styles.btnRow}>
                  <CustomButton
                    color={appConstants.color.successColor}
                    title="Add Funds"
                    onPress={() => {}}
                    icon={require('../../assets/images/fund_icon.png')}
                  />
                  <View style={{width: 16}} />
                  <CustomButton
                    color={appConstants.color.infoColor}
                    title="Transfer "
                    onPress={() => {}}
                    icon={require('../../assets/images/transfer_icon.png')}
                  />
                </View>
              </View>
            </View>
            {/* <View style={styles.spacer} /> */}
            <View style={styles.view2}>
              <QuickAction />
              <View style={styles.spacer} />
              <Card elevation={2} style={styles.transCard}>
                <RecentTransactions />
              </Card>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
