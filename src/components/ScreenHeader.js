import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

const ScreenHeader = ({isLogginScreen = false}) => {
  const {container, content, leftImage, rightImage, title, coloredLetter} =
    styles;
  return (
    <ImageBackground
      style={container}
      source={require('../../assets/images/header.png')}>
      <View style={content}>
        <Image
          style={leftImage}
          source={require('../../assets/images/icon_deloitte_logo.png')}
        />
        {isLogginScreen && (
          <Text style={title}>
            WELCOME<Text style={coloredLetter}>!</Text>
          </Text>
        )}
        <Image
          style={rightImage}
          source={require('../../assets/images/icon_mobilers_logo.png')}
        />
      </View>
    </ImageBackground>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  leftImage: {
    width: 80,
    height: 30,
  },
  rightImage: {
    width: 70,
    height: 70,
  },
  title: {
    color: colors.white,
    fontSize: 32,
    top: 20,
    fontFamily: 'RobotoCondensed-Regular',
  },
  coloredLetter: {
    color: colors.green,
  },
});
