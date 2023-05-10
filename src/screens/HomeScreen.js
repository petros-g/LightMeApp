import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import CustomModal from '../components/CustomModal';
import BottomPanel from '../components/Panels/BottomPanel';
import MiddlePanel from '../components/Panels/MiddlePanel';
import TopPanel from '../components/Panels/TopPanel';
import ScreenHeader from '../components/ScreenHeader';
import {colors} from '../constants/colors';
import useMqttService from '../hooks/useMqttService';
import {types} from '../constants/types';
import CustomSnackBar from '../components/CustomSnackBar';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    disconnect,
    client,
    subscribeToTopic,
    unsubscribeToTopic,
    publishToTopic,
    measurements,
    ledStatus,
  } = useMqttService();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const [topicsSelected, setTopicsSelected] = useState({
    [types.temp]: false,
    [types.led]: false,
    [types.text]: false,
  });
  const [isTopicOnline, setIsTopicOnline] = useState({
    [types.temp]: false,
    [types.led]: false,
    [types.text]: false,
  });
  const [callBackMessage, setCallbackMessage] = useState({
    type: '',
    payload: '',
  });

  useEffect(() => {
    client.onConnectionLost = () => {
      navigation.navigate('Login');
    };

    client.onMessageDelivered = e => {
      if (e.topic === types.led) return;
      setCallbackMessage({
        type: 'success',
        payload: 'Message delivered!',
      });
    };
    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    setIsSwitchEnabled(ledStatus == '1' ? true : false);
  }, [ledStatus]);

  const subscribeToTopicsHandler = () => {
    for (let key in topicsSelected) {
      if (!isTopicOnline[key] && topicsSelected[key]) {
        subscribeToTopic({
          topic: key,
          successCallback: () => {
            setIsTopicOnline(prev => ({
              ...prev,
              [key]: true,
            }));
          },
          errorCallback: () => {},
        });
      } else if (isTopicOnline[key] && !topicsSelected[key]) {
        unsubscribeToTopic({
          topic: key,
          successCallback: () => {
            setIsTopicOnline(prev => ({
              ...prev,
              [key]: false,
            }));
          },
          errorCallback: () => {},
        });
      }
    }
  };

  const switchHandler = e => {
    if (isTopicOnline[types.led]) {
      publishToTopic({topic: types.led, message: `${e ? '1' : '0'}`});
    } else {
      Alert.alert('Oops!', 'You need to subscribe to the topic "led" first', [
        {text: 'OK'},
      ]);
    }
  };
  console.log(isTopicOnline);
  const {container, roundButton, roundButtonText, scrollViewStyle} = styles;
  return (
    <View style={container}>
      <ScreenHeader />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={scrollViewStyle}>
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={roundButton}>
          <Text style={roundButtonText}>+</Text>
        </TouchableOpacity>

        <TopPanel
          temp={measurements?.temperature}
          humidity={measurements?.humidity}
          isTopicOnline={isTopicOnline[types.temp]}
        />

        <MiddlePanel
          isSwitchEnabled={isSwitchEnabled}
          setIsSwitchEnabled={switchHandler}
          isTopicOnline={isTopicOnline[types.led]}
        />

        <BottomPanel
          publishToTopic={publishToTopic}
          isTopicOnline={isTopicOnline[types.text]}
        />
      </ScrollView>
      <CustomModal
        topicsSelected={topicsSelected}
        setTopicsSelected={setTopicsSelected}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        modalAction={subscribeToTopicsHandler}
      />
      <CustomSnackBar callBackMessage={callBackMessage} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  scrollViewStyle: {
    flexGrow: 1,
    paddingTop: 170,
    paddingBottom: 16,
  },
});
