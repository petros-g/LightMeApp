import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import {types} from '../../constants/types';
import CustomDot from '../CustomDot';

const BottomPanel = ({isTopicOnline = false, publishToTopic}) => {
  const [inputValue, setInputValue] = useState('');

  const onPressHandler = () => {
    publishToTopic({topic: types.text, message: inputValue});
  };

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

          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={textInputStyle}
          />
          <TouchableOpacity onPress={onPressHandler} style={confirmButton}>
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
    width: 80,
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
    width: 80,
    marginHorizontal: 12,
    height: 40,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
});
