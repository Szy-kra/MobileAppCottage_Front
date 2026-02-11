import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  Image,
  ScrollView,
  Alert
} from 'react-native';

// Importy zgodnie z Twoją strukturą [cite: 2026-01-11]
import { styles } from '../styles/LoginStyles';
import { backgroundStyles } from '../styles/BackgroundStyles';

const backgroundImage = require('../assets/images/background.png');
const logoImage = require('../assets/images/logo.png');

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email.length > 0 && password.length > 0) {
      try {
        // Logowanie do Twojego API .NET 8 na porcie 8080 [cite: 2026-02-03]
        const response = await fetch('http://10.0.2.2:8080/identity/login', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          const data = await response.json();
          // Nawigacja do Home z przekazaniem roli [cite: 2026-01-12]
          navigation.navigate('Home', { 
            isHost: data.isHost, 
            userEmail: email 
          });
        } else {
          Alert.alert("Błąd logowania", "Nieprawidłowy e-mail lub hasło.");
        }
      } catch {
        Alert.alert("Błąd połączenia", "Serwer .NET nie odpowiada (10.0.2.2:8080).");
      }
    } else {
      Alert.alert("Błąd walidacji", "Proszę uzupełnić wszystkie pola.");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          
          <View style={styles.headerContainer}>
            <Image source={logoImage} style={styles.logo} />
            <Text style={styles.headerText}>Cottage App</Text>
          </View>

          <View style={styles.formContainer}>
            {/* Pole E-mail [cite: 2026-01-14] */}
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.formatHint}>Format: nazwa@domena.pl</Text>
            </View>

            {/* Pole Hasło [cite: 2026-01-14] */}
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Hasło"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Text style={styles.formatHint}>Min. 6 znaków</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>ZALOGUJ SIĘ</Text>
            </TouchableOpacity>

            {/* Link do rejestracji jako jeden klikalny obszar */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Register')}
              style={styles.registerTouchArea}
            >
              <Text style={styles.noAccountText}>
                Nie masz konta? <Text style={styles.registerLinkText}>Zarejestruj się</Text>
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;