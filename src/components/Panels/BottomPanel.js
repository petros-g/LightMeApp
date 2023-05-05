import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import CustomDot from '../CustomDot';

const BottomPanel = () => {
  const {iconStyle, imageBackgroundStyle, contentImageStyle} = styles;
  return (
    <ImageBackground
      resizeMode="stretch"
      style={imageBackgroundStyle}
      source={require('../../../assets/images/panel.png')}>
      <View>
        <View style={contentImageStyle}>
          <Image
            source={require('../../../assets/images/icon_broadcast.png')}
            style={iconStyle}
          />

          <Text style={styles.lastPanelText1}>2</Text>
          <Text style={styles.lastPanelText2}>Send</Text>
        </View>
      </View>
      <CustomDot />
    </ImageBackground>
  );
};

export default BottomPanel;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    width: 300,
    height: 160,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  iconStyle: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  contentImageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  lastPanelText1: {
    borderColor: colors.black,
    padding: 8,
    backgroundColor: colors.light_grey,
    fontSize: 15,
    margin: 5,
    textAlign: 'center',
    width: 40,
  },
  lastPanelText2: {
    borderColor: colors.black,
    padding: 8,
    backgroundColor: colors.green,
    fontSize: 15,
    width: 80,
    color: colors.white,
    marginLeft: 5,
    textAlign: 'center',
  },
});
