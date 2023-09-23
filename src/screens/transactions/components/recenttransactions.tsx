import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text6} from '../../../components/text';
import {Text} from 'react-native-paper';
// import appConstants from '../../../utils/constants/constants';
import {
  TransactionModel,
  dummyRecentTransnactions,
} from '../../../data/transactions-temp';
import TransactionRow from '../../../components/transaction/transactionrow';
import NoTransaction from '../../../components/transaction/notransactions';

export default function RecentTransactions(): React.JSX.Element {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.text}>Recent Trannsactions</Text>
        <TouchableOpacity>
          <Text6 text="View all" />
        </TouchableOpacity>
      </View>
      {dummyRecentTransnactions ? (
        <View>
          {dummyRecentTransnactions?.map(
            (item: TransactionModel, index: number) => (
              <TransactionRow key={index} item={item} />
            ),
          )}
        </View>
      ) : (
        <View>
          <NoTransaction
            image={require('../../../assets/images/not-found-icon.png')}
            title={'No Activity to show!'}
            description={
              "You don't have any transactionns yet. Once you make any transactions, it will show here."
            }
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: appConstants.spacing.space1,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});
