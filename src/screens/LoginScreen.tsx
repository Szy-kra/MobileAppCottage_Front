import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  Image,
  ScrollView 
} from 'react-native';
import { styles } from '../styles/LoginStyles';
import { backgroundStyles } from '../styles/BackgroundStyles';

// Ścieżki do Twoich grafik
const backgroundImage = require('../assets/images/background.png');
const logoImage = require('../assets/images/logo.png');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground 
      source={backgroundImage} 
      style={backgroundStyles.backgroundImage}
      resizeMode="cover"
    >
      <View style={backgroundStyles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.headerContainer}>
            <Image 
              source={logoImage} 
              style={styles.logo} 
              resizeMode="contain"
            />
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
              />
              <Text style={styles.formatHint}>Format: nazwa@poczta.pl</Text>
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
              <Text style={styles.formatHint}>Wymagane: min. 8 znaków</Text>
            </View>

            {/* Przycisk ustawiony jako nieaktywny (disabled) */}
            <TouchableOpacity 
              style={styles.disabledButton} 
              activeOpacity={1}
              disabled={true}
            >
              <Text style={styles.loginButtonText}>ZALOGUJ</Text>
            </TouchableOpacity>

            {/* Nowe elementy pod przyciskiem */}
            <View style={styles.footerLinksContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Zapomniałeś hasła?</Text>
              </TouchableOpacity>

              <View style={styles.registerContainer}>
                <Text style={styles.newAccountText}>Jesteś nowy? </Text>
                <TouchableOpacity>
                  <Text style={styles.registerText}>Zarejestruj się</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;