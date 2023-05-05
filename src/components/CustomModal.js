import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors} from '../constants/colors';
import ItemPicker from './ItemPicker';

const CustomModal = ({isModalVisible, setIsModalVisible}) => {
  const [topicsSelected, setTopicsSelected] = useState({
    temp: false,
    led: false,
    text: false,
  });

  const {headerTitle, confirmButton, confirmButtonText, backDropStyle} = styles;
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={headerTitle}>Select topics to enable:</Text>
          <ItemPicker
            setIsSelected={setTopicsSelected}
            isSelected={topicsSelected}
          />
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            style={confirmButton}>
            <Text style={confirmButtonText}>OK</Text>
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={backDropStyle} />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 10,
    width: 300,
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.65,
    shadowRadius: 15.84,
    elevation: 10,
  },
  headerTitle: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 16,
    alignSelf: 'center',
  },
  confirmButton: {
    width: 70,
    height: 40,
    color: colors.green,
    backgroundColor: colors.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  confirmButtonText: {
    fontSize: 20,
    color: colors.white,
    fontFamily: 'RobotoCondensed-Regular',
  },
  backDropStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: -1,
  },
});

export default CustomModal;
