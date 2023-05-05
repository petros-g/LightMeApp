import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomDot = ({isOnline = false}) => {
  return <View style={styles.dot(isOnline ? 'green' : 'red')} />;
};

export default CustomDot;

const styles = StyleSheet.create({
  dot: backgroundColor => ({
    width: 10,
    height: 10,
    backgroundColor: backgroundColor,
    borderRadius: 12,
  }),
});
