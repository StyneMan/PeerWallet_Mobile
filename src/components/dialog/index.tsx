import React from 'react';
import {StyleSheet, View, Modal, Image} from 'react-native';
import appConstants from '../../utils/constants/constants';
import {Body1, Text2} from '../text';
import PrimaryButton from '../button/primarybutton';
// import {PaperProvider, Portal} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import LinkButton from '../button/linkbutton';

type DialogProps = {
  open: boolean;
  setOpen: any;
  title: string;
  description: string;
  action: any;
  buttonText: string;
  route: string;
};

const SuccessDialog = (item: DialogProps) => {
  const {buttonText, description, open, setOpen, title, route} = item;
  const navigation = useNavigation();
  return (
    <Modal
      visible={open}
      animationType="slide"
      onRequestClose={() => setOpen(false)}
      transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/success.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <View style={styles.spacer} />
          <Text2 text={title} color={appConstants.color.successColor} />
          <View style={styles.spacer} />
          <Body1 text={description} />
          <View style={styles.spacer} />
          <View style={styles.actionContainer}>
            <PrimaryButton
              onPress={() => {
                setOpen(false);
                navigation.navigate(`${route}`);
                // setTimeout(() =>
                //   action;
                // }, 1000);
              }}
              buttonText={buttonText}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const ActionDialog = (item: DialogProps) => {
  const {buttonText, description, open, setOpen, title, route} = item;
  const navigation = useNavigation();
  return (
    <Modal
      visible={open}
      animationType="slide"
      onRequestClose={() => setOpen(false)}
      transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/succesful_trans.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <View style={styles.spacer} />
          <Text2 text={title} color={appConstants.color.successColor} />
          <View style={styles.spacer} />
          <Body1 text={description} />
          <View style={styles.spacer} />
          <View style={styles.actionContainer}>
            <PrimaryButton
              onPress={() => {
                setOpen(false);
                navigation.navigate(route);
              }}
              buttonText={buttonText}
            />
            <View style={styles.spacer} />
            <LinkButton
              buttonText={'back to home'}
              onPress={() => {
                setOpen(false);
                navigation.navigate('HomeScreen');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 21,
  },
  container: {
    padding: appConstants.spacing.space3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: appConstants.spacing.space2,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '86%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 64,
    height: 64,
    padding: 4,
    marginTop: appConstants.spacing.space3,
  },
  spacer: {
    height: appConstants.spacing.space1,
  },
  actionContainer: {
    padding: appConstants.spacing.space3,
  },
});

export default SuccessDialog;
