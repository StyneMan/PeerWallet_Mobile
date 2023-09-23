import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import MyAppBar from '../../components/appbar';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PersonalProfile from './tabs/personal';
import CompanyProfile from './tabs/company';
import appConstants from '../../utils/constants/constants';

interface HProps {
  position: any;
  // jumpTo?: any;
  navigation: any;
  rootNavigation: any;
}

function CustomHeader({
  position,
  navigation,
}: // rootNavigation,
// jumpTo,
HProps): React.JSX.Element {
  const rootNavigation = useNavigation();

  const styles = StyleSheet.create({
    root: {
      backgroundColor: 'white',
      height: '100%',
    },
    content: {
      backgroundColor: 'white',
      paddingBottom: 1,
      marginBottom: Platform.OS === 'ios' ? -24 : 10,
    },
    spacer: {
      margin: 4,
    },
    btnBack: {
      marginHorizontal: appConstants.spacing.space4,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    btnLeft: {
      backgroundColor: position === 0 ? appConstants.color.infoLight : 'white',
      padding: 14,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 5,
      borderBottomColor:
        position === 0 ? appConstants.color.primaryColor : '#ddd',
    },
    txtLeft: {
      color: position === 0 ? appConstants.color.primaryColor : 'black',
      fontWeight: position === 0 ? '700' : '400',
    },
    btnRight: {
      backgroundColor: position === 1 ? appConstants.color.infoLight : 'white',
      padding: 14,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 5,
      borderBottomColor:
        position === 1 ? appConstants.color.primaryColor : '#ddd',
    },
    txtRight: {
      color: position === 1 ? appConstants.color.primaryColor : 'black',
      fontWeight: position === 1 ? '700' : '400',
    },
  });

  return (
    <SafeAreaView>
      <IconButton
        icon={'arrow-left'}
        onPress={() => navigation.goBack()}
        style={styles.btnBack}
      />

      <View style={styles.content}>
        <Text
          style={{
            paddingHorizontal: appConstants.spacing.space6,
            fontWeight: '700',
            fontSize: 21,
            color: 'black',
          }}>
          Edit Profile
        </Text>
        <View style={styles.spacer} />
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Personal')}
            style={styles.btnLeft}>
            <Text style={styles.txtLeft}>Personal</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Company')}
            style={styles.btnRight}>
            <Text style={styles.txtRight}>Company (public)</Text>
          </TouchableOpacity>
        </View>
        {/* <Tab.Screen name="Personal" component={PersonalProfile} />
        <Tab.Screen name="Company" component={CompanyProfile} /> */}
      </View>
    </SafeAreaView>
  );
}

export default function EditProfile({navigation}: any) {
  // const navigation = useNavigation();
  // navigation.getState().index;
  // navigation.getState().key;

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Personal"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {width: 100},
      }}
      tabBarPosition="top"
      tabBar={props => (
        <CustomHeader
          position={props.navigation.getState().index}
          navigation={props.navigation}
          rootNavigation={navigation}
          // jumpTo={props.jumpTo}
        />
      )}>
      <Tab.Screen name="Personal" component={PersonalProfile} />
      <Tab.Screen name="Company" component={CompanyProfile} />
    </Tab.Navigator>
  );
}
