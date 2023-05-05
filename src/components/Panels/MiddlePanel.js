import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import {colors} from '../../constants/colors';
import CustomDot from '../CustomDot';

const MiddlePanel = () => {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const {iconStyle, imageBackgroundStyle, contentImageStyle} = styles;
  return (
    <ImageBackground
      style={imageBackgroundStyle}
      source={require('../../../assets/images/panel.png')}>
      <View>
        <View style={contentImageStyle}>
          <Image
            source={require('../../../assets/images/icon_light.png')}
            style={iconStyle}
          />
          <Switch
            trackColor={{true: colors.green, false: 'gray'}}
            thumbColor={colors.white}
            ios_backgroundColor="gray"
            onValueChange={setIsSwitchEnabled}
            value={isSwitchEnabled}
            style={{marginLeft: 10}}
          />
        </View>
      </View>
      <CustomDot />
    </ImageBackground>
  );
};

export default MiddlePanel;

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flexDirection: 'row',
    width: 260,
    height: 160,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-end',
    transform: [{scaleX: -1}],
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
    transform: [{scaleX: -1}],
  },

  textStyle: {
    fontSize: 18,
    color: colors.white,
  },
});
