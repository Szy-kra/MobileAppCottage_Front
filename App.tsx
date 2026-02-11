import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importy ekranów - dodano brakujący RegisterScreen
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import CottageDetailScreen from './src/screens/CottageDetailScreen';
import AddEditCottageScreen from './src/screens/AddEditCottageScreen'; 
import ProfileHostScreen from './src/screens/ProfileHostScreen';
import ProfileGuestScreen from './src/screens/ProfileGuestScreen';

// Definicja typów nawigacji - dodano Register oraz ProfileGuest [cite: 2026-02-11]
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: { isHost?: boolean; userEmail?: string };
  CottageDetail: { id: number };
  AddEditCottage: { cottage?: any }; 
  ProfileHost: undefined;
  ProfileGuest: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{ headerShown: false }}
      >
        {/* Ekran logowania */}
        <Stack.Screen name="Login" component={LoginScreen} />
        
        {/* NAPRAWIONO: Dodano ekran rejestracji [cite: 2026-02-11] */}
        <Stack.Screen name="Register" component={RegisterScreen} />
        
        {/* Ekran główny */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* Szczegóły domku */}
        <Stack.Screen name="CottageDetail" component={CottageDetailScreen} />
        
        {/* Dodawanie/Edycja domku */}
        <Stack.Screen name="AddEditCottage" component={AddEditCottageScreen} />
        
        {/* Profile użytkowników */}
        <Stack.Screen name="ProfileHost" component={ProfileHostScreen} />
        <Stack.Screen name="ProfileGuest" component={ProfileGuestScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}