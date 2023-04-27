import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import {StyleSheet, Image, View} from 'react-native';
const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 100 }}
      source={require('../../assets/images/header.png')}
    />
  );
}
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle:(props)=> <LogoTitle {...props} /> }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
