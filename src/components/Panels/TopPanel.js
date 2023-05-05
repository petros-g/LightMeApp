import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import CustomDot from '../CustomDot';

const TopPanel = () => {
  const {textStyle, iconStyle, imageBackgroundStyle, contentImageStyle} =
    styles;
  return (
    <ImageBackground
      style={imageBackgroundStyle}
      source={require('../../../assets/images/panel.png')}>
      <View>
        <View style={contentImageStyle}>
          <Image
            source={require('../../../assets/images/icon_droplet.png')}
            style={iconStyle}
          />
          <Text style={textStyle}>32%</Text>
        </View>
        <View style={contentImageStyle}>
          <Image
            source={require('../../../assets/images/icon_temperature.png')}
            style={iconStyle}
          />
          <Text style={textStyle}>23°C</Text>
        </View>
      </View>
      <CustomDot />
    </ImageBackground>
  );
};

export default TopPanel;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 260,
    height: 160,
    justifyContent: 'space-around',
    marginBottom: 20,
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

  textStyle: {
    fontSize: 30,
    color: colors.white,
    fontFamily: 'RobotoCondensed-Regular',
  },
});
