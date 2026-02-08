import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import Navbar from '../components/NavbarComp';
import { styles as loginStyles } from '../styles/LoginStyles';

const RESERVATIONS = [
  { id: '1', name: 'Leśna Cisza', city: 'Zakopane', date: '12.02 - 15.02', price: '750 PLN', status: 'Opłacone' },
  { id: '2', name: 'Domek nad Jeziorem', city: 'Mikołajki', date: '20.03 - 22.03', price: '640 PLN', status: 'Nieopłacone' },
];

const ProfileGuestScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const userEmail = "gosc@test.pl";

  const handleDelete = () => {
    Alert.alert("Usuwanie", "Czy na pewno chcesz usunąć konto gościa?", [
      { text: "Anuluj" },
      { text: "Usuń", onPress: () => navigation.navigate('Login') }
    ]);
  };

  return (
    <View style={guestStyles.main}>
      <Navbar title="Profil Gościa" />
      <ScrollView style={{ padding: 15 }}>
        <View style={guestStyles.card}>
          <Text style={guestStyles.label}>Zalogowany jako:</Text>
          <Text style={guestStyles.email}>{userEmail}</Text>
          
          <TextInput
            style={loginStyles.input}
            placeholder="Nowe hasło"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={[loginStyles.loginButton, { marginTop: 15 }]}>
            <Text style={loginStyles.loginButtonText}>ZMIEŃ HASŁO</Text>
          </TouchableOpacity>
        </View>

        <Text style={guestStyles.sectionTitle}>Moje Rezerwacje</Text>
        {RESERVATIONS.map(res => (
          <View key={res.id} style={guestStyles.resCard}>
            <View>
              <Text style={guestStyles.resName}>{res.name}</Text>
              <Text style={guestStyles.resCity}>{res.city} | {res.date}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={guestStyles.resPrice}>{res.price}</Text>
              <Text style={{ color: res.status === 'Opłacone' ? '#27ae60' : '#e67e22', fontSize: 12 }}>{res.status}</Text>
            </View>
          </View>
        ))}

        <TouchableOpacity onPress={handleDelete} style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ color: '#c0392b', fontWeight: 'bold' }}>USUŃ KONTO</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const guestStyles = StyleSheet.create({
  main: { flex: 1, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, elevation: 2 },
  label: { fontSize: 12, color: '#888' },
  email: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  resCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  resName: { fontWeight: 'bold' },
  resCity: { fontSize: 12, color: '#666' },
  resPrice: { fontWeight: 'bold', color: '#27ae60' }
});

export default ProfileGuestScreen;