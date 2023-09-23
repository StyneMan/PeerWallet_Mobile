import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Chip, Card, Text} from 'react-native-paper';

export default function QuickAction() {
  return (
    <Card elevation={1} style={styles.root}>
      <Text style={styles.text}>Quick actions</Text>
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.item}>
          <View style={styles.avtrContainer1}>
            <Image
              source={require('../../assets/images/vcards.png')}
              resizeMode="contain"
            />
          </View>
          <Chip style={styles.chip1} textStyle={{color: '#5E38CB'}}>
            Virtual Cards
          </Chip>
        </TouchableOpacity>
        <View style={{width: 12}} />
        <TouchableOpacity style={styles.item}>
          <View style={styles.avtrContainer2}>
            <Image
              source={require('../../assets/images/vcards.png')}
              resizeMode="contain"
            />
          </View>
          <Chip style={styles.chip2}>Virtual Cards</Chip>
        </TouchableOpacity>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 21,
    zIndex: 1000,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 48,
  },
  actionRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avtrContainer1: {
    backgroundColor: '#5E38CB',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
  avtrContainer2: {
    backgroundColor: '#25A1A9',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 500,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  chip1: {
    backgroundColor: '#F3EFFF',
    marginLeft: -12,
    padding: 8,
  },
  chip2: {
    backgroundColor: '#ECFEFF',
    marginLeft: -12,
    padding: 8,
  },
});
