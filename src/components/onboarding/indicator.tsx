import {View, StyleSheet, Animated, useWindowDimensions} from 'react-native';
import React from 'react';

export interface SlideProps {
  data: any;
  scrollX: any;
}

export default function SlideIndicator({
  data,
  scrollX,
}: SlideProps): React.JSX.Element {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data?.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [9, 48, 9],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth}]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  dot: {
    height: 6,
    borderRadius: 5,
    backgroundColor: '#009FDD',
    marginHorizontal: 3,
  },
});
