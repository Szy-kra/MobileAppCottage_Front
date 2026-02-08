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

// KLUCZOWE: Musimy zaimportować styles, inaczej dostaniesz błąd z Twojego screena
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
        // Używamy portu 8080 zgodnie z Twoim sukcesem w Postmanie [image_99059a.png]
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
          // Przekazujemy dane do Home, aby wiedział czy użytkownik to Host (bool)
          navigation.navigate('Home', { 
            isHost: data.isHost, 
            userEmail: email 
          });
        } else {
          Alert.alert("Błąd logowania", "Nieprawidłowe dane uwierzytelniające.");
        }
      } catch  {
        Alert.alert("Błąd połączenia", "Nie udało się połączyć z API (10.0.2.2:8080).");
      }
    } else {
      Alert.alert("Błąd walidacji", "Proszę uzupełnić wszystkie pola.");
    }
  };

  // Przycisk "wytrych" do szybkiego testowania UI
  const handleTestBypass = () => {
    navigation.navigate('Home', { isHost: false, userEmail: 'test-bypass@user.pl' });
  };

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.headerContainer}>
            <Image source={logoImage} style={styles.logo} />
            <Text style={styles.headerText}>Cottage App</Text>
          </View>

          <View style={styles.formContainer}>
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

            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Hasło"
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Text style={styles.formatHint}>Min. 6 znaków (litery i cyfry)</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>ZALOGUJ SIĘ</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.loginButton, { backgroundColor: '#7f8c8d', marginTop: 12 }]} 
              onPress={handleTestBypass}
            >
              <Text style={styles.loginButtonText}>TESTOWE WEJŚCIE (BYPASS)</Text>
            </TouchableOpacity>

            <View style={styles.footerLinksContainer}>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Register')}
                style={{ marginTop: 15 }}
              >
                <Text style={styles.registerText}>Nie masz konta? Zarejestruj się</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;