import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import Navbar from '../components/NavbarComp';
import { styles as loginStyles } from '../styles/LoginStyles';

const MY_COTTAGES = [
  { id: '1', name: 'Mój Domek Premium', city: 'Karpacz', price: '450 PLN/noc' },
  { id: '2', name: 'Apartament Widokowy', city: 'Zakopane', price: '600 PLN/noc' },
];

const ProfileHostScreen = ({ navigation }: any) => {
  const [password, setPassword] = useState('');
  const hostEmail = "host@test.pl";

  return (
    <View style={hostStyles.main}>
      <Navbar title="Panel Gospodarza" />
      <ScrollView style={{ padding: 15 }}>
        <View style={hostStyles.card}>
          <Text style={hostStyles.label}>Konto Gospodarza:</Text>
          <Text style={hostStyles.email}>{hostEmail}</Text>
          
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

        <Text style={hostStyles.sectionTitle}>Moje Obiekty (Edycja)</Text>
        {MY_COTTAGES.map(cottage => (
          <View key={cottage.id} style={hostStyles.cottageCard}>
            <View>
              <Text style={hostStyles.cottageName}>{cottage.name}</Text>
              <Text style={hostStyles.cottageSub}>{cottage.city} | {cottage.price}</Text>
            </View>
            <TouchableOpacity 
              style={hostStyles.manageButton}
              onPress={() => navigation.navigate('Cottage')}
            >
              <Text style={hostStyles.manageText}>ZARZĄDZAJ</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ color: '#c0392b', fontWeight: 'bold' }}>USUŃ KONTO GOSPODARZA</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const hostStyles = StyleSheet.create({
  main: { flex: 1, backgroundColor: '#f5f5f5' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 15, elevation: 2 },
  label: { fontSize: 12, color: '#888' },
  email: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  cottageCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  cottageName: { fontWeight: 'bold' },
  cottageSub: { fontSize: 12, color: '#666' },
  manageButton: { backgroundColor: '#34495e', padding: 10, borderRadius: 8 },
  manageText: { color: '#fff', fontSize: 10, fontWeight: 'bold' }
});

export default ProfileHostScreen;