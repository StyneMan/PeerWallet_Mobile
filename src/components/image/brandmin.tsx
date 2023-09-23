import {Image, StyleSheet} from 'react-native';
import React from 'react';

export default function BrandImageMin(): React.JSX.Element {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://i.imgur.com/EyVlFQI.png',
      }}
    />
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 56,
    height: 56,
  },
});
