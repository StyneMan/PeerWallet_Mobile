import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import appConstants from '../../utils/constants/constants';
import MyAvatar from '../avatar';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AppbarProps {
  title?: string | null;
  titleColor: string;
  bgColor?: string;
  leading: React.ReactNode;
  hasAvatar?: boolean;
  actions?: React.JSX.Element[] | null;
  onPress?: any;
}

export default function MyAppBar({
  title,
  titleColor,
  hasAvatar = false,
  // actions,
  leading,
  onPress,
  bgColor = appConstants.color.dashboardColor,
}: AppbarProps) {
  const styles = StyleSheet.create({
    root: {
      position: 'relative',
      backgroundColor: bgColor,
    },
    container: {
      paddingHorizontal: appConstants.spacing.space3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 4,
    },
    textContainer: {
      position: 'absolute',
      width: '100%',
      left: 0,
      right: 0,
      top: 10,
      bottom: 10,
      color: titleColor,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: '500',
      color: titleColor,
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {hasAvatar ? (
          <TouchableOpacity onPress={onPress}>
            <MyAvatar
              size={36}
              src={require('../../assets/images/avatar.png')}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        {/* {actions} */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
}
