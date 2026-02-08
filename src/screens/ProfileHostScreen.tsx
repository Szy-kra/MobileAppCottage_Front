import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  ScrollView 
} from 'react-native';
// DODAJ TEN IMPORT:
import { styles } from '../styles/LoginStyles'; 
import { backgroundStyles } from '../styles/BackgroundStyles';

const backgroundImage = require('../assets/images/background.png');

const ProfileGuestScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const userEmail = "gosc@test.pl";

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={{color: '#fff', fontSize: 20, textAlign: 'center', marginBottom: 20}}>
            Profil Gościa: {userEmail}
          </Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input} // Teraz styles.input zadziała
              placeholder="Nowe hasło"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity 
              style={[styles.loginButton, {marginTop: 20}]} 
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.loginButtonText}>WRÓĆ DO LISTY DOMKÓW</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ProfileGuestScreen;