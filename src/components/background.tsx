import React from 'react';
import {ImageBackground, SafeAreaView, useWindowDimensions} from 'react-native';

interface BackgroudProps {
  children: any;
}

const Background = ({children}: BackgroudProps): React.JSX.Element => {
  const {height, width} = useWindowDimensions();
  return (
    <ImageBackground
      source={require('../assets/images/app-bg.png')}
      resizeMode="cover"
      style={{width: width, height: height}}>
      <SafeAreaView>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Background;
