import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function BiometricButton({onPress}): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: 'https://i.imgur.com/xycwOfC.png'}}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: 60,
    height: 60,
  },
  image: {
    width: 48,
    height: 48,
  },
});
