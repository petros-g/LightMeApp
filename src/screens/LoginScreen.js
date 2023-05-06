import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import MiddlePanel from '../components/Panels/MiddlePanel';
import TopPanel from '../components/Panels/TopPanel';
import ScreenHeader from '../components/ScreenHeader';
import {colors} from '../constants/colors';
const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleConnectPress = () => {
    navigation.navigate('Home');
  };

  const {
    confirmButton,
    confirmButtonText,
    footerTitle,
    scrollViewStyle,
    screenFooterStyle,
  } = styles;

  return (
    <View style={{flex: 1}}>
      <ScreenHeader isLogginScreen />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior={true}
        contentContainerStyle={scrollViewStyle}>
        <TopPanel width={300}>
          <CustomInput inputValue={username} setInputValue={setUsername} />
        </TopPanel>

        <MiddlePanel width={300}>
          <CustomInput
            inputValue={password}
            setInputValue={setPassword}
            title="Password"
            secureEntry
            isReversed
          />
        </MiddlePanel>

        <TouchableOpacity onPress={handleConnectPress} style={confirmButton}>
          <Text style={confirmButtonText}>Connect</Text>
        </TouchableOpacity>
      </ScrollView>

      <ImageBackground
        style={screenFooterStyle}
        source={require('../../assets/images/header.png')}>
        <Text style={footerTitle}>LIGHT ME APP</Text>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light_grey,
  },
  confirmButton: {
    width: 120,
    height: 45,
    color: colors.green,
    backgroundColor: colors.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  confirmButtonText: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
  },
  footerTitle: {
    fontSize: 28,
    color: colors.white,
    transform: [{scaleY: -1}, {scaleX: -1}],
  },
  scrollViewStyle: {flexGrow: 1, paddingVertical: 180},
  screenFooterStyle: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{scaleY: -1}, {scaleX: -1}],
  },
});
