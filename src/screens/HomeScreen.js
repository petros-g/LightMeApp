import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomModal from '../components/CustomModal';
import BottomPanel from '../components/Panels/BottomPanel';
import MiddlePanel from '../components/Panels/MiddlePanel';
import TopPanel from '../components/Panels/TopPanel';
import ScreenHeader from '../components/ScreenHeader';
import {colors} from '../constants/colors';

const HomeScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {container, roundButton, roundButtonText} = styles;
  return (
    <View style={container}>
      <ScreenHeader />
      {/* Round button */}

      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={roundButton}>
        <Text style={roundButtonText}>+</Text>
      </TouchableOpacity>

      <TopPanel />

      <MiddlePanel />

      <BottomPanel />

      <CustomModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onPress={() => {}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.light_grey,
  },
  roundButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: colors.green,
    marginLeft: '80%',
    marginTop: -40,
  },
  roundButtonText: {fontSize: 36, color: colors.white, fontWeight: '600'},
});
