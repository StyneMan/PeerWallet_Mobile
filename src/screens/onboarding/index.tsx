import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import SlideIndicator from '../../components/onboarding/indicator';

import React, {useState, useRef} from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export interface OnboardingProps {
  title: string;
  image: string;
}

const items: OnboardingProps[] = [
  {
    title: 'Semi Decentralized Finance MarketPlace',
    image: require('../../assets/images/onboarding-slide-1.png'),
  },
  {
    title: 'Multiple Virtual Card Vendors',
    image: require('../../assets/images/onboarding-slide-2.png'),
  },
  {
    title: 'Send & Receive Money Easily',
    image: require('../../assets/images/onboarding-slide-3.png'),
  },
];

const OnboardingItem = ({title, image}: OnboardingProps): React.JSX.Element => {
  const {width, height} = useWindowDimensions();
  // const {title, image} = item;

  const mStyles = StyleSheet.create({
    itemView: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 16,
      marginBottom: 16,
      height: height - 116,
      width: width * 0.7,
    },
  });

  return (
    <ImageBackground source={image} resizeMode="cover" style={{width: width}}>
      <View style={{height: height, width: width}}>
        <SafeAreaView>
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={'default'}
            hidden={true}
          />
          <View style={mStyles.itemView}>
            <Text style={styles.itemTitle}>{title}</Text>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default function Onboarding({navigation}: any): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skrollX = useRef(new Animated.Value(0)).current;
  const sliderRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < items?.length - 1) {
      sliderRef.current?.scrollToIndex({index: currentIndex + 1});
    }
    if (currentIndex === items?.length - 1) {
      navigation.navigate('GetStarted');
    }
  };

  return (
    <View style={styles.root}>
      <FlatList
        ref={sliderRef}
        data={items}
        renderItem={({item}) => (
          <OnboardingItem title={item?.title} image={item.image} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item?.title}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: skrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://i.imgur.com/k2n4rY8.png',
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.indicatorRow}>
        <SlideIndicator data={items} scrollX={skrollX} />
        <TouchableOpacity onPress={scrollTo}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Next</Text>
            <Image
              style={styles.arrowImage}
              source={require('../../assets/images/button-arrow-right.png')}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {position: 'relative'},
  tinyLogo: {
    width: 50,
    height: 50,
  },

  itemTitle: {
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: 'white',
  },
  imageContainer: {
    position: 'absolute',
    padding: 10,
    left: 0,
    right: 0,
    top: 58,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorRow: {
    position: 'absolute',
    padding: 10,
    left: 12,
    right: 12,
    bottom: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#009FDD',
    padding: 10,
    paddingHorizontal: 32,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  arrowImage: {
    width: 24,
    marginLeft: 6,
  },
});
