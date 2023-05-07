import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomSnackBar from '../components/CustomSnackBar';
import MiddlePanel from '../components/Panels/MiddlePanel';
import TopPanel from '../components/Panels/TopPanel';
import ScreenHeader from '../components/ScreenHeader';
import {colors} from '../constants/colors';
import useMqttService from '../hooks/useMqttService';

const LoginScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const {connectToClient, isConnected} = useMqttService();
  const [callBackMessage, setCallbackMessage] = useState({
    type: '',
    payload: '',
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConnectPress = () => {
    setIsLoading(true);
    connectToClient({errorCallback, successCallback, username, password});
  };

  const successCallback = () => {
    setCallbackMessage({
      type: 'success',
      payload: 'Successfully connected to the server!',
    });
    setIsLoading(false);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1500);
  };

  const errorCallback = error => {
    setIsLoading(false);
    setCallbackMessage({
      type: 'error',
      payload: error,
    });
  };

  useEffect(() => {
    if (!isConnected() && callBackMessage.type) {
      setCallbackMessage({
        type: 'error',
        payload: 'Disconnected from the server',
      });
    }
  }, [isFocused]);

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

        <TouchableOpacity
          disabled={isLoading}
          onPress={handleConnectPress}
          style={confirmButton}>
          {isLoading && <ActivityIndicator size="small" color={colors.white} />}

          <Text style={confirmButtonText}>
            {isLoading ? 'Connecting...' : 'Connect'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <CustomSnackBar callBackMessage={callBackMessage} />
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
    paddingHorizontal: 16,
    height: 45,
    color: colors.green,
    backgroundColor: colors.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
    flexDirection: 'row',
  },
  confirmButtonText: {
    fontSize: 22,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 6,
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
