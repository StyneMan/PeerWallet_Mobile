import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import appConstants from '../../utils/constants/constants';
import {IconButton} from 'react-native-paper';
import {Text1, Body1, Text5, Text6, Text3} from '../../components/text';
import MyAvatar from '../../components/avatar';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import BrandImageMin from '../../components/image/brandmin';

export default function TransferReceipt({navigation}: any) {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <IconButton
          icon="arrow-left"
          onPress={() => navigation.goBack()}
          iconColor="white"
        />
        <View style={styles.logoFlex}>
          <Image
            source={{
              uri: 'https://i.imgur.com/k2n4rY8.png',
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.top}>
          <Text5 text="Sent Successfully" color="white" align="center" />
          <Text1
            text="-$1,255"
            color={appConstants.color.errorColor}
            align="center"
          />
          <Text5 text="( £1,949.45 )" color="white" align="center" />
        </View>
        <View style={styles.spacer} />
        <View style={styles.rel}>
          <View style={styles.cont}>
            <Text style={styles.exchangeText}>Exchange rate: $1.27 = £1</Text>
          </View>
          <View style={styles.download}>
            <IconButton
              icon="tray-arrow-down"
              iconColor={appConstants.color.primaryColor}
            />
          </View>
          <View style={styles.share}>
            <IconButton icon="share-variant" iconColor="white" />
          </View>
        </View>
        <View style={styles.spacer} />
        <View style={styles.receiptContainer}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={styles.sender}>
              <Text5 text="Sender:" color={appConstants.color.errorColor} />
              <View style={styles.row}>
                <MyAvatar
                  size={24}
                  src={{
                    uri: 'https://cdn-icons-png.flaticon.com/256/147/147142.png',
                  }}
                />
                <Text3 text="Cameron Williamson" />
              </View>
              <Body1 text="No 15 Micheal Street" color={'black'} />
              <Body1 text="Epe, Lagos" color={'black'} />
              <Body1 text="100242, Nigeria" color={'black'} />
              <Body1 text="+234 891 4894 849" color={'black'} />
              <Body1
                text="john.doe@gmail.com"
                color={appConstants.color.infoColor}
              />
            </View>
            <View style={styles.spacer} />
            <View style={styles.receiver}>
              <Text5
                text="Recipient:"
                color={appConstants.color.successColor}
              />
              <View style={styles.row}>
                <Text3 text="John Doe" />
                <MyAvatar
                  size={24}
                  src={{
                    uri: 'https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png',
                  }}
                />
              </View>
              <Body1 text="No 15 Micheal Street" color={'black'} />
              <Body1 text="Epe, Lagos" color={'black'} />
              <Body1 text="100242, Nigeria" color={'black'} />
              <Body1 text="+234 891 4894 849" color={'black'} />
              <Body1
                text="john.doe@gmail.com"
                color={appConstants.color.infoColor}
              />
            </View>
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <View>
              <View style={styles.receiptRow}>
                <Text6 text="Date paid:" />
                <Text6 text="9th of July 2023 04:42:44 PM" />
              </View>

              <View style={styles.divider} />
              <View style={styles.receiptRow}>
                <Text6 text="Transaction description:" />
                <Text6 text="GT bank 2036638098" />
              </View>

              <View style={styles.divider} />
              <View style={styles.receiptRow}>
                <Text6 text="Payment method:" />
                <Text6 text="Wallet" />
              </View>

              <View style={styles.divider} />
              <View style={styles.receiptRow}>
                <Text6 text="Payment type:" />
                <Text6 text="Funds trasfer" />
              </View>

              <View style={styles.divider} />
              <View style={styles.receiptRow}>
                <Text6 text="Sender fees:" />
                <Text6 text="$0.00" />
              </View>

              <View style={styles.divider} />
              <View style={styles.receiptRow}>
                <Text6 text="Receiver fees:" />
                <Text6 text="$0.11" />
              </View>

              <View style={styles.divider} />
              <View style={styles.receiptRow}>
                <Text6 text="Total refunded:" />
                <Text6 text="$0.00" />
              </View>

              <View style={styles.divider} />
              <View style={styles.receiptRow}>
                <Text6 text="Invoice number:" />
                <Text6 text="#02228C58D1" />
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
    backgroundColor: appConstants.color.dashboardColor,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  logoFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {width: 48, height: 48, marginTop: -24, marginHorizontal: 16},
  top: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: appConstants.spacing.space5,
  },
  rel: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  share: {
    position: 'absolute',
    right: 2,
  },
  download: {
    position: 'absolute',
    left: 2,
  },
  cont: {
    position: 'absolute',
    left: 1,
    right: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exchangeText: {
    color: 'white',
    fontfamily: 'Inter',
  },
  spacer: {
    margin: appConstants.spacing.space2,
  },
  receiptContainer: {
    backgroundColor: 'white',
    padding: appConstants.spacing.space3,
    flex: 1,
    height: '100%',
    display: 'flex',
    marginTop: 8,
  },
  sender: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  receiver: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: appConstants.spacing.space1,
  },
  divider: {
    width: '100%',
    height: 1.2,
    backgroundColor: '#E9E9E9',
  },
});
