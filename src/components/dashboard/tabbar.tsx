import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import appConstants from '../../utils/constants/constants';
import Icon from 'react-native-vector-icons/Octicons';
// import VectorImage from 'react-native-vector-image';

export default function MyTabBar({state, descriptors, navigation}: any) {
  //   const icons = ['home-fill', '', '', ''];
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={styles.item}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon
              name={index === 0 ? 'home' : index === 1 ? 'checklist' : 'gear'}
              size={32}
              color={isFocused ? appConstants.color.primaryColor : '#222'}
            />
            {/* <VectorImage source={require('../../assets/images/home.svg')} /> */}
            <Text
              style={{
                color: isFocused ? appConstants.color.primaryColor : '#222',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: appConstants.spacing.space1,
    marginBottom: appConstants.spacing.space2,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
