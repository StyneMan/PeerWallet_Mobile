import React from 'react';
import {
  useWindowDimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
} from 'react-native';

const OnboardingItem = (item: OnboardingProps): React.JSX.Element => {
  const {width, height} = useWindowDimensions();
  const {title} = item;

  const styles = StyleSheet.create({
    itemView: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 16,
      marginBottom: 16,
    },
    itemTitle: {
      fontSize: 24,
      fontFamily: 'Inter',
      fontWeight: '700',
      color: 'white',
    },
  });

  return (
    <ImageBackground
      source={require('../../assets/images/onboarding-slide-1.png')}
      resizeMode="cover"
      style={{width: width, height: height}}>
      <View style={{height: height, width: width}}>
        <SafeAreaView>
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={'default'}
            hidden={true}
          />
          <View style={styles.itemView}>
            <Text style={styles.itemTitle}>{title}</Text>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default OnboardingItem;
