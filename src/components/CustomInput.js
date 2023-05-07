import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../constants/colors';

const CustomInput = ({
  title = 'Username',
  secureEntry = false,
  inputValue = '',
  isReversed = false,
  setInputValue = () => {},
}) => {
  return (
    <View style={styles.container(isReversed)}>
      <View>
        <Text style={styles.text}>{title}</Text>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          secureTextEntry={secureEntry}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: isReversed => ({
    flex: 1,
    paddingLeft: isReversed ? 46 : 16,
    transform: isReversed ? [{scaleX: -1}] : undefined,
  }),
  input: {
    width: 220,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 22,
    color: colors.white,
    fontFamily: 'RobotoCondensed-Regular',
    marginBottom: 12,
  },
});
