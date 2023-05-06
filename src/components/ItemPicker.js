import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {types} from '../constants/types';

const ItemPicker = ({title, isSelected, setIsSelected = () => {}}) => {
  const topics = [types.temp, types.led, types.text];

  const {container, radioButtonStyle, textStyle, contentContainer} = styles;
  return (
    <View style={container}>
      {topics.map((item, i) => (
        <View key={i} style={contentContainer}>
          <Text style={textStyle}>{item}</Text>

          <TouchableOpacity
            onPress={() =>
              setIsSelected({...isSelected, [item]: !isSelected[item]})
            }
            style={radioButtonStyle(isSelected[item] ? colors.green : 'red')}>
            {isSelected[item] && <Text>✓</Text>}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ItemPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  radioButtonStyle: (backgroundColor = 'white') => ({
    height: 30,
    width: 30,
    borderWidth: 1,
    borderRadius: 32,
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textStyle: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed-Regular',
  },
  contentContainer: {
    paddingHorizontal: 26,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
