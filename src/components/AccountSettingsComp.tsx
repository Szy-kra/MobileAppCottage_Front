import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/NavbarComp';
import { styles as loginStyles } from '../styles/LoginStyles'; 
import { backgroundStyles } from '../styles/BackgroundStyles';

const backgroundImage = require('../assets/images/background.png');

const ProfileHostScreen = ({ navigation }: any) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = () => {
    if (!newPassword || newPassword !== confirmPassword) {
      Alert.alert("Błąd", "Hasła muszą być identyczne i nie mogą być puste.");
      return;
    }
    Alert.alert("Sukces", "Twoje hasło zostało zmienione pomyślnie!");
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLogout = () => {
    Alert.alert("Wyloguj", "Czy na pewno chcesz się wylogować?", [
      { text: "Anuluj", style: "cancel" },
      { text: "Tak", onPress: () => navigation.navigate('Login') }
    ]);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "USUWANIE KONTA",
      "Ta operacja jest nieodwracalna. Wszystkie Twoje domki i dane zostaną usunięte. Czy kontynuować?",
      [
        { text: "Anuluj", style: "cancel" },
        { 
          text: "USUŃ KONTO", 
          style: "destructive", 
          onPress: () => {
            Alert.alert("Konto usunięte", "Twoje dane zostały wymazane.");
            navigation.navigate('Login');
          } 
        }
      ]
    );
  };

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navbar title="Ustawienia Konta" />
          
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView contentContainerStyle={hostStyles.scrollContainer}>
              
              {/* --- SEKCJA: BEZPIECZEŃSTWO (ZMIANA HASŁA) --- */}
              <View style={hostStyles.card}>
                <Text style={hostStyles.sectionTitle}>Bezpieczeństwo</Text>
                <Text style={hostStyles.label}>Nowe hasło</Text>
                <TextInput
                  style={hostStyles.darkInput}
                  placeholder="Minimum 8 znaków"
                  placeholderTextColor="#666"
                  secureTextEntry
                  value={newPassword}
                  onChangeText={setNewPassword}
                />
                <Text style={hostStyles.label}>Powtórz hasło</Text>
                <TextInput
                  style={hostStyles.darkInput}
                  placeholder="Powtórz hasło"
                  placeholderTextColor="#666"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity 
                  style={hostStyles.saveButton}
                  onPress={handlePasswordChange}
                >
                  <Text style={hostStyles.saveButtonText}>ZAKTUALIZUJ HASŁO</Text>
                </TouchableOpacity>
              </View>

              {/* --- SEKCJA: AKCJE KONTA --- */}
              <View style={[hostStyles.card, { marginTop: 20 }]}>
                <Text style={hostStyles.sectionTitle}>Zarządzanie kontem</Text>
                
                <TouchableOpacity 
                  style={hostStyles.actionRow}
                  onPress={() => navigation.navigate('MyCottages')}
                >
                  <Text style={hostStyles.actionText}>Zarządzaj moimi domkami</Text>
                  <Text style={hostStyles.actionArrow}>→</Text>
                </TouchableOpacity>

                <View style={hostStyles.divider} />

                <TouchableOpacity 
                  style={hostStyles.actionRow}
                  onPress={handleLogout}
                >
                  <Text style={[hostStyles.actionText, { color: '#f7d940' }]}>Wyloguj się</Text>
                  <Text style={[hostStyles.actionArrow, { color: '#f7d940' }]}>⏻</Text>
                </TouchableOpacity>
              </View>

              {/* --- SEKCJA: STREFA NIEBEZPIECZNA --- */}
              <View style={hostStyles.dangerZone}>
                <Text style={hostStyles.dangerTitle}>Strefa Niebezpieczna</Text>
                <Text style={hostStyles.dangerDesc}>
                  Usunięcie konta spowoduje trwałe skasowanie wszystkich ofert i historii.
                </Text>
                <TouchableOpacity 
                  style={hostStyles.deleteButton}
                  onPress={handleDeleteAccount}
                >
                  <Text style={hostStyles.deleteButtonText}>USUŃ KONTO NA ZAWSZE</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity 
                style={[loginStyles.loginButton, { marginTop: 30, marginBottom: 50 }]} 
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={loginStyles.loginButtonText}>WRÓĆ DO EKRANU GŁÓWNEGO</Text>
              </TouchableOpacity>

            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const hostStyles = StyleSheet.create({
  scrollContainer: { padding: 20 },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  sectionTitle: {
    color: '#f7d940',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  label: { color: '#ccc', fontSize: 12, marginBottom: 5, marginLeft: 5 },
  darkInput: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(247,217,64,0.2)',
  },
  saveButton: {
    backgroundColor: '#f7d940',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
  },
  saveButtonText: { color: '#000', fontWeight: 'bold', fontSize: 14 },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  actionText: { color: '#fff', fontSize: 16, fontWeight: '500' },
  actionArrow: { color: '#666', fontSize: 20 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)' },
  dangerZone: {
    marginTop: 40,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#c0392b',
    backgroundColor: 'rgba(192, 57, 43, 0.1)',
  },
  dangerTitle: { color: '#ff4444', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  dangerDesc: { color: '#aaa', fontSize: 12, marginBottom: 15 },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#ff4444',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  deleteButtonText: { color: '#ff4444', fontWeight: 'bold', fontSize: 12 },
});

export default ProfileHostScreen;