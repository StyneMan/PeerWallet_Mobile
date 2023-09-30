import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
// import MyAppBar from '../../components/appbar';
import {IconButton} from 'react-native-paper';
import {Text2, Text6} from '../../components/text';
import appConstants from '../../utils/constants/constants';
import TransferForm from '../../components/forms/transfer';

export default function TransferFunds({navigation}: any) {
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
              <Text2 text="Transfer funds" />
              <Text6 text="Transfer funds to another Peerwallet user easily" />
              <View style={styles.spacer} />
              <TransferForm />
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
