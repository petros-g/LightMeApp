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
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import CustomDot from '../CustomDot';

const BottomPanel = ({isTopicOnline = false}) => {
  const {
    iconStyle,
    imageBackgroundStyle,
    contentImageStyle,
    confirmButton,
    confirmButtonText,
    textInputStyle,
  } = styles;
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

          <TextInput style={textInputStyle} />
          <TouchableOpacity onPress={{}} style={confirmButton}>
            <Text style={confirmButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CustomDot isOnline={isTopicOnline} />
    </ImageBackground>
  );
};

export default BottomPanel;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    width: 300,
    height: 160,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    width: 50,
    height: 50,
  },

  contentImageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  confirmButton: {
    width: 90,
    height: 45,
    color: colors.green,
    backgroundColor: colors.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
  },
  textInputStyle: {
    width: 70,
    marginHorizontal: 12,
    height: 40,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
});
