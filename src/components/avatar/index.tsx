import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AvatarImageSource} from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';

interface AvatarProps {
  src: AvatarImageSource;
  size: number;
}

export default function MyAvatar({src, size}: AvatarProps) {
  const styles = StyleSheet.create({
    container: {
      borderRadius: (size + 4) / 2,
      width: size + 4,
      height: size + 4,
      borderColor: 'white',
      borderWidth: 2,
    },
  });

  return (
    <View style={styles.container}>
      <Avatar.Image size={size} source={src} />
    </View>
  );
}
