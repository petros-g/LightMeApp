import Paho from 'paho-mqtt';
import {useEffect, useState} from 'react';
import {broker, types} from '../constants/types';

const client = new Paho.Client(broker.host, broker.port, broker.clientId);

const useMqttService = () => {
  const [measurements, setMeasurements] = useState();
  const [ledStatus, setLedStatus] = useState();
  const [displayText, setDisplayText] = useState();

  useEffect(() => {
    client.onMessageArrived = dataReceived => {
      let payload;
      try {
        payload = JSON.parse(dataReceived?.payloadString);
      } catch {
        payload = dataReceived.payloadString;
      }

      switch (dataReceived.topic) {
        case types.temp:
          if (payload?.humidity || payload?.temperature) {
            setMeasurements(payload);
          }
          break;
        case types.led:
          setLedStatus(payload);
          break;
        case types.text:
          setDisplayText(payload);
          break;
        default:
      }
    };
  }, []);

  const connectToClient = ({
    successCallback = () => {},
    errorCallback = () => {},
    username,
    password,
  }) => {
    try {
      client.connect({
        useSSL: true,

        userName: username,
        password,
        onSuccess: () => {
          successCallback();
        },
        onFailure: error => {
          errorCallback(error.errorMessage);
        },
      });
    } catch {}
  };

  const subscribeToTopic = async ({
    topic,
    successCallback = () => {},
    errorCallback = () => {},
  }) => {
    try {
      await client.subscribe(topic, {
        onSuccess: e => {
          successCallback();
        },
        onFailure: err => {
          errorCallback();
        },
      });
    } catch {}
  };

  const unsubscribeToTopic = ({
    topic,
    successCallback = () => {},
    errorCallback = () => {},
  }) => {
    try {
      client.unsubscribe(topic, {
        onSuccess: e => {
          successCallback();
        },
        onFailure: err => {
          errorCallback();
        },
      });
    } catch {}
  };

  const publishToTopic = ({topic, message}) => {
    try {
      client.send(topic, message, 0);
    } catch {}
  };

  const disconnect = () => {
    if (client.isConnected()) {
      try {
        client.disconnect();
      } catch {}
    }
  };

  const isConnected = () => {
    return client.isConnected();
  };

  return {
    connectToClient,
    subscribeToTopic,
    unsubscribeToTopic,
    publishToTopic,
    isConnected,
    disconnect,
    displayText,
    ledStatus,
    measurements,
    client,
  };
};

export default useMqttService;
