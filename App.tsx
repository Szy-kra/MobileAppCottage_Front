import React from 'react';
import { View, StatusBar } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Przezroczysty pasek statusu, aby tło było pod ikonami systemowymi */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <LoginScreen />
    </View>
  );
};

export default App;