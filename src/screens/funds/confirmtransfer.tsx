import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import appConstants from '../../utils/constants/constants';
import error from '../../assets/images/arrow_error.png';
import success from '../../assets/images/arrow_success.png';
import {Body1} from '../../components/text';
import CustomInputField from '../../components/input/custominput';
import PrimaryButton from '../../components/button/primarybutton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActionDialog} from '../../components/dialog';
// import {IconButton} from 'react-native-paper';

export default function ConfirmTransfer({navigation}: any) {
  const [note, setNote] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  return (
    <View style={styles.root}>
      <ActionDialog
        open={openDialog}
        setOpen={setOpenDialog}
        action={() => navigation.navigate('Login')}
        buttonText="View Receipt"
        description="You have successfully sent $1,535 to John Michael James"
        title="Transfer successful"
        route="TransferReceipt"
      />
      <SafeAreaView>
        <View style={styles.btnBack}>
          {/* <IconButton
            style={{zIndex: 100}}
            icon={'arrow-left'}
            onPress={() => navigation.goBack()}
          /> */}

          <View style={styles.textContainer}>
            <Text style={styles.text}>Confirm Transfer</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log('JHJU');

              navigation.goBack();
            }}>
            <View>
              <Icon name="arrow-left" size={24} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.spacer} />

        <View>
          <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
              <Text style={styles.heading}>Pay John Michael James</Text>
              <Text>{'( john.m.james@gmail.com )'}</Text>
              <View style={styles.spacer} />
            </View>
            <View style={styles.exchangeContainenr}>
              <Text style={styles.exchangeText}>
                {'Exchange rate:  $1.27 = £1 '}
              </Text>
            </View>
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <View style={styles.row}>
              <View style={styles.column}>
                <Image
                  source={require('../../assets/images/arrow_error.png')}
                  resizeMode="contain"
                  style={{width: 32, height: 32}}
                />
                <Text style={styles.txt}>{'$1,535'}</Text>
                <Text style={styles.txt2}>You are sending</Text>
                <View style={styles.underline} />
                <Text>Fee: $0</Text>
                <View style={styles.underline} />
                <Text>You will pay: $0.20</Text>
              </View>
              <Image
                source={require('../../assets/images/transfer_icon.png')}
                resizeMode="contain"
                style={{width: 22, height: 22}}
              />
              <View style={styles.column}>
                <Image
                  source={require('../../assets/images/arrow_success.png')}
                  resizeMode="contain"
                  style={{width: 32, height: 32}}
                />
                <Text style={styles.txt}>{'$1,535'}</Text>
                <Text style={styles.txt2}>Receiver value</Text>
                <View style={styles.underline} />
                <Text>Fee: £19.48</Text>
                <View style={styles.underline} />
                <Text>User receives: £1,929.97</Text>
              </View>
            </View>
            <View style={styles.spacer} />
            <View style={styles.content}>
              <Text style={styles.txtSuccess}>
                You chose instant transfer, funds will be available immediately.
              </Text>
              <View style={styles.spacer} />
              <View style={styles.spacer} />
            </View>
            <View style={styles.noteSection}>
              <Text>{'Note (optional)'}</Text>
              <View style={styles.spacerMini} />
              <CustomInputField
                placeholder="Enter transfer note (optional)"
                capitalization={'words'}
                inputType="text"
                value={note}
                onChange={(e: any) => setNote(e)}
              />
              <View style={styles.spacer} />
              <View style={styles.stretched}>
                <PrimaryButton
                  buttonText="Confirm"
                  onPress={() => setOpenDialog(true)}
                />
                <View style={styles.spacerMini} />
                <Body1
                  text="Please Note: Transfers are irreversible."
                  align={'center'}
                  color="red"
                />
              </View>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  noteSection: {
    paddingHorizontal: appConstants.spacing.space5,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  stretched: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  row: {
    paddingHorizontal: appConstants.spacing.space5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  column: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Inter',
    textTransform: 'uppercase',
  },
  spacer: {
    margin: 10,
  },
  spacerMini: {
    margin: 2,
  },
  btnBack: {
    marginHorizontal: appConstants.spacing.space3,
    position: 'relative',
  },
  textContainer: {
    position: 'absolute',
    left: 32,
    right: 32,
    top: 1,
    bottom: 0,
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
  text: {
    fontSize: 19,
    fontWeight: '700',
    color: 'black',
  },
  exchangeContainenr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: appConstants.color.infoLight,
    paddingHorizontal: appConstants.spacing.space5,
    paddingVertical: appConstants.spacing.space3,
    alignItems: 'center',
    marginVertical: 6,
  },
  exchangeText: {
    color: appConstants.color.primaryColor,
    fontWeight: '700',
  },
  txt: {
    padding: 4,
    fontSize: 21,
    fontWeight: '700',
    color: appConstants.color.primaryColor,
  },
  txt2: {
    fontSize: 16,
    fontWeight: '600',
    borderBottomColor: appConstants.color.infoColor,
  },
  underline: {
    backgroundColor: appConstants.color.infoColor,
    height: 2.5,
    width: '80%',
    marginVertical: 4,
  },
  txtSuccess: {
    color: appConstants.color.successColor,
    textAlign: 'center',
    fontSize: 10,
  },
});
