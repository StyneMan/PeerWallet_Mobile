import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import appConstants from '../../utils/constants/constants';
import {Text2} from '../../components/text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Card} from 'react-native-paper';

export default function TransactionScreen() {
  const [searchKey, setSearchKey] = React.useState('');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text2 text="Transactions" />
          <View style={styles.spacer} />
          <Card
            elevation={0}
            style={[
              styles.searchCard,
              {
                backgroundColor: searchKey
                  ? appConstants.color.infoLight
                  : 'white',
                borderWidth: 1,
                borderColor: searchKey ? appConstants.color.infoColor : 'white',
              },
            ]}>
            <View style={styles.searchBox}>
              <Icon
                name="magnify"
                color={searchKey ? appConstants.color.infoColor : '#969797'}
                size={18}
              />
              <TextInput
                style={styles.searchInput}
                onChangeText={(text: string) => {
                  setSearchKey(text);
                }}
                placeholder="Search by typing transactions, amount or date"
              />
            </View>
          </Card>
          <ScrollView />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
  },
  content: {
    padding: appConstants.spacing.space3,
  },
  spacer: {
    margin: 10,
  },
  spacerMini: {
    margin: 2,
  },
  searchCard: {
    borderRadius: 21,
    backgroundColor: 'white',
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
    paddingVertical: appConstants.spacing.space1,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    paddingLeft: 8,
    paddingRight: 16,
  },
});
