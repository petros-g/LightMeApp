import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

const ModalInside = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleButtonPress = () => {
    console.log(`Text 1: ${text1}, Text 2: ${text2}`);
    // do something with the text inputs here
  };

  return (
    <View style={styles.container}>
        <Text style={{fontFamily: 'RobotoCondesed', fontSize: 20, fontWeight: 'bold'}}>Subscribe Topic</Text>
      <TextInput
        style={styles.input}
        
        value={text1}
        onChangeText={(text) => setText1(text)}
      />
      
    <Text style={{fontFamily: 'RobotoCondesed', fontSize: 20, textAlign: 'right', fontWeight: 'bold'}}>Publisher Topic</Text>

      <TextInput
        style={styles.input}
        value={text2}
        onChangeText={(text) => setText2(text)}
      />
          <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}>
        <Text style={{fontSize:30, color: colors.white}}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: 250,
  },
  button: {
      width: 60,
      height: 60,
      padding: 10,
      color: colors.green,
      backgroundColor: colors.green,
      borderRadius: 10,
      textAlign: 'center',
  }
});

export default ModalInside;