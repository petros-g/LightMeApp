import React,{useState} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, Switch, TouchableOpacity, Modal, Button} from 'react-native';
import {colors} from '../constants/colors';
import ModalInside from './Modal';

const HomeScreen = () => {
  const {container} = styles;
  
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={container}>
    
      <ImageBackground
      style={{ width: '100%', height: 200 }}
      source={require('../../assets/images/header.png')}
    >
      <Image
      style={styles.image1}
      source={require('../../assets/images/icon_deloitte_logo.png')}
    />    
      <Image
      style={styles.image2}
      source={require('../../assets/images/icon_mobilers_logo.png')}
    />
      
    </ImageBackground>
    {/* button */}
    <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.roundButton1}>
        <Text style={{fontSize:30, color: colors.white}}>+</Text>
      </TouchableOpacity>
    <ImageBackground
      style={styles.image3}
      source={require('../../assets/images/panel.png')}
    > 
 <View style={styles.container2}>
      <Image source={require('../../assets/images/icon_droplet.png')} style={styles.image4} />
      <Text style={styles.text}>32%</Text>
    </View>
    <View style={styles.container2}>
      <Image source={require('../../assets/images/icon_temperature.png')} style={styles.image4} />
      <Text style={styles.text}>23%</Text>
    </View>
  
    </ImageBackground>  
          {/* second panel reversed */}
    <ImageBackground
      style={styles.image5}
      source={require('../../assets/images/panel.png')}
    > 

    <View style={styles.container3}>
      <Image source={require('../../assets/images/icon_light.png')} style={styles.image7} />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switcher}
        
      />

    </View>
  
    </ImageBackground> 
        {/* //3rd panel  */} 
    <ImageBackground
      style={styles.image8}
      source={require('../../assets/images/panel.png')}
    > 

 <View style={styles.container4}>
      <Image source={require('../../assets/images/icon_broadcast.png')} style={styles.image4} />

      <Text style={styles.lastPanelText1}>2</Text>
      <Text style={styles.lastPanelText2}>Send</Text>

    </View>
  
    </ImageBackground>  

    <Modal visible={modalVisible} animationType="slide">
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ModalInside/>
    <Button title="Close" onPress={() => setModalVisible(false)} />
  </View>
</Modal>
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
  image1: {
     width: '25%',
     height: 20,
     marginLeft: 20,
     marginTop: '15%' ,
  },
  image2: {
    flex: 0.5,
    width: '25%', 
    height: 1  ,
    // alignItems: 'flex-end',
    // justifyContent: 'flex-start',
    marginLeft: '75%',
    marginTop: -60,
    },
    image3: {
      width: 200,
      height: 120,
       
    }, 
    container2: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5
    },
    image4: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    text: {
      fontSize: 18,
      color: colors.white
    },
    image5: {
      width: 200,
      height: 120,
      marginLeft: '50%',
      transform: [
        {scaleX: -1}
      ]
    },
    container3: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
      transform: [
        {scaleX: -1}
      ]
    },
    image6: {
      width: 50,
      height: 50,
      marginRight: 10,
      transform: [
        {scaleX: -1}
      ]
    },
    image7: {
      width: 50,
      height: 50,
      marginLeft: 10,
      marginTop: 20
    },
    switcher:{
      marginLeft: 10,
      marginTop: 20
    },
  roundButton1: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: colors.green,
      marginLeft: '80%',
      marginTop: -40
    },
    container4: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 5,
      width: 100,
      height: 100,
      padding: 10
    },
    image8: {
      
        width: 250,
        height: 140,
        marginTop: 10
         
      
    },
    lastPanelText1:{
      borderColor: colors.black,
      padding: 8,
      backgroundColor: colors.light_grey,
      fontSize: 15,
      margin: 5,
      textAlign: 'center',
      width: 40

      
    },
    lastPanelText2:{
      borderColor: colors.black,
      padding: 8,
      backgroundColor: colors.green,
      fontSize: 15,
      width: 80,
      color: colors.white,
      marginLeft: 5,
      textAlign: 'center'
      
    }
});
