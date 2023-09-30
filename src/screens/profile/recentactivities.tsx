import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import appConstants from '../../utils/constants/constants';
import {Body1, Text2, Text4, Text5, Text6} from '../../components/text';
// import MyAppBar from '../../components/appbar';
import {Card, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ActivitiesModel, tempRecentActivities} from '../../data/activities';

// interface ActivityItemProps {
//   data: ActivitiesModel;
// }

export default function RecentActivities({navigation}: any): React.JSX.Element {
  const [searchKey, setSearchKey] = React.useState('');
  const [filteredActivities, setFilteredActivities] = React.useState<
    ActivitiesModel[] | null
  >();

  React.useEffect(() => {
    setFilteredActivities(tempRecentActivities);
  }, []);

  const handleSearch = (text: string) => {
    if (text) {
      const filtered = tempRecentActivities.filter(item =>
        item?.title.toLowerCase().includes(text.toLowerCase()),
      );

      setFilteredActivities(filtered);
      setSearchKey(text);
    } else {
      setFilteredActivities(tempRecentActivities);
      setSearchKey(text);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <IconButton
          icon={'arrow-left'}
          onPress={() => navigation.goBack()}
          style={styles.btnBack}
        />
        <View style={styles.content}>
          <Text2 text="Recent Activities" />
          <Text6 text="Here are your recent activities for your account" />
          <View style={styles.spacerMini} />
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
                value={searchKey}
                onChangeText={handleSearch}
                underlineColorAndroid={'transparent'}
                placeholder="Search by typing transactions, amount or date"
              />
            </View>
          </Card>

          <View style={styles.spacer} />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: appConstants.spacing.space5,
          }}>
          <FlatList
            data={filteredActivities}
            keyExtractor={(item: ActivitiesModel, index) => index.toString()}
            ItemSeparatorComponent={ItemDivider}
            renderItem={ActivityItem}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const ItemDivider = () => {
  return <View style={styles.itemSeparator} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
  },
  btnBack: {
    marginHorizontal: appConstants.spacing.space2,
  },
  content: {
    paddingHorizontal: appConstants.spacing.space5,
  },
  spacer: {
    margin: appConstants.spacing.space2,
  },
  spacerMini: {
    margin: 3,
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
  activityItemRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: appConstants.spacing.space1,
  },
  activityItemLHS: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  activityItemLHSChild: {
    width: '75%',
  },
  activityItemRHS: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  itemSeparator: {height: 0.5, width: '100%', backgroundColor: '#C8C8C8'},
});

function ActivityItem({item}: any) {
  return (
    <View style={styles.activityItemRow}>
      <View style={styles.activityItemLHS}>
        <Text style={styles.activityItemLHSChild}>{item?.title}</Text>
      </View>
      <View style={styles.activityItemRHS}>
        <Text5 text={item?.source} />
        <Body1 text={item?.ipAddress} />
        <Body1 text={item?.date} />
      </View>
    </View>
  );
}
