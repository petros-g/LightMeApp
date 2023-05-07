import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {colors} from '../constants/colors';

const CustomSnackBar = ({callBackMessage = ''}) => {
  const bottomStyleValue = useRef(new Animated.Value(-100)).current;
  const isSuccess = callBackMessage?.type === 'success';

  useEffect(() => {
    if (callBackMessage.type) {
      Animated.timing(bottomStyleValue, {
        toValue: 16,
        duration: 400,
        useNativeDriver: false,
      }).start(() =>
        Animated.timing(bottomStyleValue, {
          toValue: -100,
          duration: 500,
          delay: 1500,
          useNativeDriver: false,
        }).start(),
      );
    }
  }, [callBackMessage]);

  const {container, text} = styles;
  return (
    <Animated.View
      style={[
        container(isSuccess ? colors.success : colors.error),
        {bottom: bottomStyleValue},
      ]}>
      <Text style={text}>{callBackMessage.payload}</Text>
    </Animated.View>
  );
};

export default CustomSnackBar;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    marginHorizontal: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 16,
    justifyContent: 'center',
    paddingHorizontal: 22,
    zIndex: 9999,
    paddingVertical: 16,
  }),
  text: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
