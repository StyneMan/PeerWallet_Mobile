import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TransactionModel} from '../../data/transactions-temp';
import {Body1, Text4} from '../text';
import appConstants from '../../utils/constants/constants';

type TransactionsProp = {
  item: TransactionModel;
};

export default function TransactionRow({item}: TransactionsProp) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={item?.image}
          resizeMode="contain"
          style={{width: 32, height: 32, marginRight: 8}}
        />

        <View style={styles.col}>
          <Text4 text={item?.name} />
          <Body1 text={item?.summary} />
        </View>
      </View>
      <Text4
        text={item?.amount}
        color={
          item?.status === 'success'
            ? appConstants.color.successColor
            : appConstants.color.errorColor
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: appConstants.spacing.space1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
