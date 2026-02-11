import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  LayoutAnimation,
  TextInput,
  Alert,
  Platform,
  UIManager
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Navbar from '../components/NavbarComp';
import { backgroundStyles } from '../styles/BackgroundStyles';

// Aktywacja animacji dla Androida (SDK w C:\Users\kraje\AppData\Local\Android\Sdk) [cite: 2026-02-01]
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type ReservationStatus = 'Rezerwacja' | 'Potwierdzone' | 'Anulowane';

const ProfileHostScreen = ({ navigation }: any) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedResId, setSelectedResId] = useState<number | null>(null);
  
  // Stany dla edycji rezerwacji
  const [currentNote, setCurrentNote] = useState<string>("");
  const [currentStatus, setCurrentStatus] = useState<ReservationStatus>('Rezerwacja');

  // Dane testowe domków (docelowo z AllCottageService) [cite: 2026-01-12]
  const myCottages = [
    { id: 1, name: "Domek pod Lasem", city: "Zakopane", price: 350 },
    { id: 2, name: "Chatka przy Potoku", city: "Szczawnica", price: 280 },
    { id: 3, name: "Willa Górska", city: "Karpacz", price: 600 },
  ];

  // Dane testowe rezerwacji [cite: 2026-02-11]
  const [reservations, setReservations] = useState([
    { id: 1024, from: '2026-05-10', to: '2026-05-15', customerName: 'Marek Nowak', status: 'Potwierdzone' as ReservationStatus, notes: 'Przyjedzie z psem' },
  ]);

  const toggleSection = (section: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === section ? null : section);
    setSelectedResId(null);
  };

  const handleUpdateRes = (id: number) => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, notes: currentNote, status: currentStatus } : r));
    Alert.alert("Zapisano", "Zmiany w rezerwacji zostały wprowadzone.");
    setSelectedResId(null);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      <Navbar title="Profil Gospodarza" />

      <ImageBackground source={require('../assets/images/background.png')} style={backgroundStyles.backgroundImage}>
        <View style={backgroundStyles.overlay}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            
            <View style={styles.profileHeader}>
              <Text style={styles.userName}>Jan Kowalski</Text>
              <Text style={styles.userEmail}>jan.host@example.com</Text>
              <View style={styles.badge}><Text style={styles.badgeText}>GOSPODARZ</Text></View>
            </View>

            <View style={styles.menuContainer}>
              
              {/* SEKCJA: MOJE DOMKI [cite: 2026-02-11] */}
              <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('cottages')}>
                <Text style={styles.menuItemText}>Lista moich domków</Text>
                <Text style={styles.menuArrow}>{expandedSection === 'cottages' ? "▼" : ">"}</Text>
              </TouchableOpacity>
              
              {expandedSection === 'cottages' && (
                <View style={styles.expandedContent}>
                  {myCottages.map(cottage => (
                    <View key={cottage.id} style={styles.dataCard}>
                      <View>
                        <Text style={styles.cardTitle}>{cottage.name}</Text>
                        <Text style={styles.cardSub}>{cottage.city} • {cottage.price} zł / noc</Text>
                      </View>
                      <TouchableOpacity 
                        style={styles.editBtn}
                        onPress={() => Alert.alert("Edycja", `Edytowanie domku: ${cottage.name}`)}
                      >
                        <Text style={styles.editBtnText}>Edytuj</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              )}

              {/* SEKCJA: REZERWACJE [cite: 2026-02-11] */}
              <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('res')}>
                <Text style={styles.menuItemText}>Rezerwacje od gości</Text>
                <Text style={styles.menuArrow}>{expandedSection === 'res' ? "▼" : ">"}</Text>
              </TouchableOpacity>
              
              {expandedSection === 'res' && (
                <View style={styles.expandedContent}>
                  {reservations.map((res) => (
                    <View key={res.id} style={styles.dataCard}>
                      <View style={styles.resHeaderRow}>
                        <Text style={styles.resId}>ID: #{res.id}</Text>
                        <Text style={styles.statusLabel}>{res.status}</Text>
                      </View>
                      <Text style={styles.cardSub}>{res.from} do {res.to}</Text>
                      
                      <TouchableOpacity 
                        style={styles.manageBtn} 
                        onPress={() => {
                          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                          setSelectedResId(selectedResId === res.id ? null : res.id);
                          setCurrentNote(res.notes);
                          setCurrentStatus(res.status);
                        }}
                      >
                        <Text style={styles.manageBtnText}>Szczegóły i Status</Text>
                      </TouchableOpacity>

                      {selectedResId === res.id && (
                        <View style={styles.innerEditBox}>
                          <Text style={styles.inputLabel}>Zmień Status:</Text>
                          <View style={styles.pickerWrapper}>
                            <Picker
                              selectedValue={currentStatus}
                              onValueChange={(val) => setCurrentStatus(val)}
                              style={styles.picker}
                            >
                              <Picker.Item label="Rezerwacja" value="Rezerwacja" />
                              <Picker.Item label="Potwierdzone" value="Potwierdzone" />
                              <Picker.Item label="Anulowane" value="Anulowane" />
                            </Picker>
                          </View>
                          <Text style={styles.inputLabel}>Notatki (Host Notes):</Text>
                          <TextInput
                            style={styles.noteInput}
                            multiline
                            value={currentNote}
                            onChangeText={setCurrentNote}
                          />
                          <TouchableOpacity style={styles.saveBtn} onPress={() => handleUpdateRes(res.id)}>
                            <Text style={styles.saveBtnText}>Zapisz zmiany</Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}

              {/* SEKCJA: USTAWIENIA [cite: 2026-02-11] */}
              <TouchableOpacity style={styles.menuItem} onPress={() => toggleSection('set')}>
                <Text style={styles.menuItemText}>Ustawienia</Text>
                <Text style={styles.menuArrow}>{expandedSection === 'set' ? "▼" : ">"}</Text>
              </TouchableOpacity>
              
              {expandedSection === 'set' && (
                <View style={styles.expandedContent}>
                  <TouchableOpacity style={styles.subBtn}><Text style={styles.subBtnText}>Zmień hasło</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.subBtn}><Text style={styles.deleteBtnText}>Usuń konto</Text></TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.subBtn, {borderBottomWidth: 0}]} 
                    onPress={() => navigation.replace('Login')}
                  >
                    <Text style={styles.logoutBtnText}>Wyloguj się</Text>
                  </TouchableOpacity>
                </View>
              )}

            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: { padding: 20, paddingTop: 40 },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  userName: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  userEmail: { color: '#aaa', fontSize: 14 },
  badge: { backgroundColor: 'rgba(247, 217, 64, 0.1)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 6, marginTop: 10, borderWidth: 1, borderColor: '#f7d940' },
  badgeText: { color: '#f7d940', fontSize: 10, fontWeight: 'bold' },
  menuContainer: { width: '100%' },
  menuItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 18, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 12, marginTop: 10 },
  menuItemText: { color: '#fff', fontSize: 16 },
  menuArrow: { color: '#f7d940', fontWeight: 'bold' },
  expandedContent: { backgroundColor: 'rgba(0,0,0,0.3)', padding: 15, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, borderWidth: 1, borderColor: 'rgba(247, 217, 64, 0.2)' },
  dataCard: { backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 10, marginBottom: 10, flexDirection: 'column' },
  resHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  cardTitle: { color: '#f7d940', fontSize: 16, fontWeight: 'bold' },
  cardSub: { color: '#ccc', fontSize: 13, marginTop: 2 },
  editBtn: { alignSelf: 'flex-end', marginTop: -20, paddingVertical: 6, paddingHorizontal: 15, borderRadius: 6, backgroundColor: '#f7d940' },
  editBtnText: { color: '#000', fontSize: 12, fontWeight: 'bold' },
  manageBtn: { marginTop: 10, borderSize: 1, borderColor: '#f7d940', borderWidth: 1, padding: 8, borderRadius: 6, alignItems: 'center' },
  manageBtnText: { color: '#f7d940', fontSize: 12 },
  resId: { color: '#f7d940', fontWeight: 'bold' },
  statusLabel: { color: '#fff', fontSize: 11, fontStyle: 'italic' },
  innerEditBox: { marginTop: 15, padding: 12, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 8 },
  inputLabel: { color: '#aaa', fontSize: 11, marginBottom: 5 },
  pickerWrapper: { backgroundColor: '#fff', borderRadius: 6, marginBottom: 10, overflow: 'hidden' },
  picker: { height: 45, width: '100%' },
  noteInput: { backgroundColor: '#222', color: '#fff', padding: 10, borderRadius: 6, minHeight: 60, textAlignVertical: 'top', borderWidth: 1, borderColor: '#444' },
  saveBtn: { backgroundColor: '#f7d940', padding: 12, borderRadius: 6, marginTop: 10, alignItems: 'center' },
  saveBtnText: { color: '#000', fontWeight: 'bold' },
  subBtn: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)' },
  subBtnText: { color: '#fff' },
  deleteBtnText: { color: '#ff4444' },
  logoutBtnText: { color: '#f7d940', fontWeight: 'bold' }
});

export default ProfileHostScreen;