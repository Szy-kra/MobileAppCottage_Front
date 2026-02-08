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
import { styles } from '../styles/LoginStyles';
import { backgroundStyles } from '../styles/BackgroundStyles';

const backgroundImage = require('../assets/images/background.png');
const logoImage = require('../assets/images/logo.png');

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Błąd", "Hasła nie są identyczne!");
      return;
    }

    if (email.includes('@') && password.length >= 6) {
      // Przygotowane pod Twój backend .NET 8
      Alert.alert("Rejestracja", "Dane zostały wysłane do serwera.");
      navigation.navigate('Login');
    } else {
      Alert.alert("Błąd walidacji", "Sprawdź poprawność danych.");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.headerContainer}>
            <Image source={logoImage} style={styles.logo} />
            <Text style={styles.headerText}>Załóż konto</Text>
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
              <Text style={styles.formatHint}>Wymagany e-mail: nazwa@poczta.pl</Text>
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
              <Text style={styles.formatHint}>Minimum 6 znaków (litery i cyfry)</Text>
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Powtórz hasło"
                placeholderTextColor="#888"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
              <Text style={styles.formatHint}>Powtórz wpisane powyżej hasło</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
              <Text style={styles.loginButtonText}>ZAREJESTRUJ SIĘ</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{ marginTop: 20, alignItems: 'center' }} 
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.registerText}>Masz już konto? Zaloguj się</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;