import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors';

const LoginScreen = () => {
  const {container, textStyle, contentStyle} = styles;
  return (
    <View style={container}>
      <View style={contentStyle}>
        <Text style={textStyle}>LoginScreen</Text>
        <Button title="Connect" onPress={() => {}} />
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
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 20,
  },
});
