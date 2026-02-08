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
import { registerStyles } from '../styles/RegisterStyles';

const backgroundImage = require('../assets/images/background.png');
const logoImage = require('../assets/images/logo.png');

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Zmieniamy stan na boolean, aby pasował do Twojego modelu User.cs
  const [isHost, setIsHost] = useState<boolean>(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Błąd", "Hasła nie są identyczne!");
      return;
    }

    try {
      // Pamiętaj: 10.0.2.2 dla emulatora, localhost dla Postmana
      const response = await fetch('http://10.0.2.2:8080/identity/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          isHost: isHost // Wysyłamy true lub false
        }),
      });

      if (response.ok) {
        Alert.alert(
          "Sukces", 
          "Konto zostało utworzone!",
          [{ text: "Zaloguj się", onPress: () => navigation.navigate('Login') }]
        );
      } else {
        const errorData = await response.json();
        // .NET Identity często zwraca błędy w tablicy, obsłużmy to bezpiecznie
        const errorMsg = errorData.errors ? Object.values(errorData.errors).flat().join('\n') : errorData.description;
        Alert.alert("Błąd rejestracji", errorMsg || "Dane są niepoprawne.");
      }
    } catch (err) {
      Alert.alert("Błąd połączenia", "Upewnij się, że używasz adresu 10.0.2.2:8080");
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
            <Text style={registerStyles.roleLabel}>Typ konta:</Text>
            <View style={registerStyles.roleContainer}>
              {/* Przycisk GOŚĆ (IsHost = false) */}
              <TouchableOpacity 
                style={[registerStyles.roleButton, !isHost && registerStyles.roleButtonActive]} 
                onPress={() => setIsHost(false)}
              >
                <Text style={[registerStyles.roleButtonText, !isHost && registerStyles.roleTextActive]}>GOŚĆ</Text>
              </TouchableOpacity>
              
              {/* Przycisk HOST (IsHost = true) */}
              <TouchableOpacity 
                style={[registerStyles.roleButton, isHost && registerStyles.roleButtonActive]} 
                onPress={() => setIsHost(true)}
              >
                <Text style={[registerStyles.roleButtonText, isHost && registerStyles.roleTextActive]}>HOST</Text>
              </TouchableOpacity>
            </View>

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
              <Text style={styles.formatHint}>Min. 6 znaków</Text>
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
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
              <Text style={styles.loginButtonText}>ZAREJESTRUJ SIĘ</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={registerStyles.loginLinkContainer} 
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