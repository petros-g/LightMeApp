import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import CustomDot from '../CustomDot';

const TopPanel = ({
  children,
  width,
  temp = '-- ',
  humidity = '-- ',
  isTopicOnline = false,
}) => {
  const {textStyle, iconStyle, imageBackgroundStyle, contentImageStyle} =
    styles;
  return (
    <ImageBackground
      style={imageBackgroundStyle(width)}
      resizeMode="stretch"
      source={require('../../../assets/images/panel.png')}>
      {children ? (
        children
      ) : (
        <>
          <View>
            <View style={contentImageStyle}>
              <Image
                source={require('../../../assets/images/icon_droplet.png')}
                style={iconStyle}
              />
              <Text style={textStyle}>{temp}%</Text>
            </View>
            <View style={contentImageStyle}>
              <Image
                source={require('../../../assets/images/icon_temperature.png')}
                style={iconStyle}
              />
              <Text style={textStyle}>{humidity}°C</Text>
            </View>
          </View>
          <CustomDot isOnline={isTopicOnline} />
        </>
      )}
    </ImageBackground>
  );
};

export default TopPanel;

const styles = StyleSheet.create({
  imageBackgroundStyle: (width = 260) => ({
    flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: 160,
    justifyContent: 'space-around',
    marginBottom: 20,
  }),
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
