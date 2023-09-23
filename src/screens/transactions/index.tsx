import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import appConstants from '../../utils/constants/constants';

export default function TransactionScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <ScrollView />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appConstants.color.dashboardColor,
  },
  content: {
    padding: appConstants.spacing.space3,
  },
});
