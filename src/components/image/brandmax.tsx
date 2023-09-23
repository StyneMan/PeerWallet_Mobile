import {Image, StyleSheet} from 'react-native';
import React from 'react';

export default function BrandImageMax(): React.JSX.Element {
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
    width: 124,
    height: 30,
  },
});
