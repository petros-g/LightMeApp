import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const {container, textStyle, contentStyle} = styles;
  const navigation = useNavigation();

  const handleConnectPress = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={container}>
      <View style={contentStyle}>
        <Text style={textStyle}>LoginScreen</Text>
        <Button title="Connect" onPress={handleConnectPress} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentStyle: {
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'RobotoCondensed',
    fontSize: 20,
  },
});
