import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
// import appConstants from '../../utils/constants/constants';

interface CustomButtonProps {
  onPress: any;
  title: string;
  color: string;
  icon: any;
}

export default function CustomButton({
  color,
  onPress,
  title,
  icon,
}: CustomButtonProps): React.JSX.Element {
  const styles = StyleSheet.create({
    root: {
      backgroundColor: 'white',
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    part1: {
      backgroundColor: color,
      padding: 13,
      borderTopLeftRadius: 16,
      borderBottomLeftRadius: 16,
    },
    part2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    part3: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    top: {
      width: 10,
      height: 10,
      left: -4,
      borderLeftWidth: 10,
      borderLeftColor: color,
      borderRightWidth: 20,
      borderRightColor: 'transparent',
      borderTopWidth: 20,
      borderTopColor: color,
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 55,
      borderTopRightRadius: 5,
      backgroundColor: color,
      transform: [{translateX: 1}],
    },
    bottom: {
      width: 10,
      height: 10,
      left: -4,
      borderLeftWidth: 10,
      borderLeftColor: color,
      borderRightWidth: 20,
      borderRightColor: 'transparent',
      borderTopWidth: 20,
      borderTopColor: color,
      borderRadius: 10,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 55,
      backgroundColor: color,
      transform: [{translateX: 1}],
    },
    text: {
      color: 'white',
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <View style={styles.part1}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.part2}>
        <View style={styles.top} />
        <View style={styles.bottom} />
      </View>
      <View style={styles.part3}>
        <Image source={icon} />
      </View>
    </TouchableOpacity>
  );
}
