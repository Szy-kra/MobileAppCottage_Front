import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importy ekranów
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import CottageDetailScreen from './src/screens/CottageDetailScreen';
import CottageScreen from './src/screens/CottageScreen';
import ProfileGuestScreen from './src/screens/ProfileGuestScreen';
import ProfileHostScreen from './src/screens/ProfileHostScreen';

// Definicja dostępnych tras
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  CottageDetail: { cottageId: string };
  Cottage: undefined;
  ProfileGuest: undefined;
  ProfileHost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: 'fade'
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CottageDetail" component={CottageDetailScreen} />
        <Stack.Screen name="Cottage" component={CottageScreen} />
        <Stack.Screen name="ProfileGuest" component={ProfileGuestScreen} />
        <Stack.Screen name="ProfileHost" component={ProfileHostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;