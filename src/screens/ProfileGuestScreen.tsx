import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  ImageBackground, 
  SafeAreaView, 
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Navbar from '../components/NavbarComp';
import { styles as loginStyles } from '../styles/LoginStyles'; 
import { backgroundStyles } from '../styles/BackgroundStyles';

const backgroundImage = require('../assets/images/background.png');

// SZTUCZNE DANE (MOCK) - Struktura identyczna jak w Twoim UserProfileDto
const MOCK_PROFILE = {
  email: "gosc@poczta.pl",
  firstName: "Jan",
  lastName: "Kowalski",
  isHost: false, 
  activeReservations: [
    { id: 1, cottageName: "Leśna Cisza", startDate: "2026-06-12", endDate: "2026-06-15", price: 1350 },
    { id: 2, cottageName: "Domek nad Jeziorem", startDate: "2026-07-01", endDate: "2026-07-10", price: 4500 }
  ],
  pastReservations: [
    { id: 3, cottageName: "Góralska Chata", startDate: "2025-12-20", endDate: "2025-12-27", price: 2800 },
    { id: 4, cottageName: "Morska Bryza", startDate: "2025-08-10", endDate: "2025-08-15", price: 1500 }
  ]
};

const ProfileGuestScreen = ({ navigation }: any) => {
  
  // Renderowanie karty rezerwacji (zgodne z Twoim ReservationDto)
  const renderReservationCard = (res: any, isActive: boolean) => (
    <View key={res.id} style={[guestStyles.resCard, !isActive && guestStyles.pastCard]}>
      <View style={guestStyles.resInfo}>
        <Text style={guestStyles.cottageName}>{res.cottageName}</Text>
        <Text style={guestStyles.resDates}>🗓 {res.startDate} — {res.endDate}</Text>
        <Text style={guestStyles.resPrice}>Kwota: {res.price} PLN</Text>
      </View>
      
      <View style={[
        guestStyles.statusIndicator, 
        { backgroundColor: isActive ? '#27ae60' : 'rgba(0,0,0,0.5)' }
      ]}>
        <Text style={guestStyles.statusText}>
          {isActive ? "NADCHODZĄCA" : "ZAKOŃCZONA"}
        </Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* Navbar z Twoim logo.png */}
          <Navbar title="Mój Profil" />
          
          <ScrollView contentContainerStyle={guestStyles.scrollContainer}>
            {/* Nagłówek użytkownika */}
            <View style={guestStyles.profileHeader}>
              <View style={guestStyles.avatarCircle}>
                <Text style={guestStyles.avatarText}>
                  {MOCK_PROFILE.firstName[0]}{MOCK_PROFILE.lastName[0]}
                </Text>
              </View>
              <Text style={guestStyles.welcomeText}>{MOCK_PROFILE.firstName} {MOCK_PROFILE.lastName}</Text>
              <Text style={guestStyles.emailText}>{MOCK_PROFILE.email}</Text>
            </View>

            <View style={guestStyles.divider} />

            {/* Sekcja: AKTYWNE REZERWACJE */}
            <Text style={guestStyles.sectionTitle}>Moje nadchodzące wyjazdy</Text>
            {MOCK_PROFILE.activeReservations.length > 0 ? (
              MOCK_PROFILE.activeReservations.map(res => renderReservationCard(res, true))
            ) : (
              <View style={guestStyles.emptyBox}>
                <Text style={guestStyles.emptyText}>Nie masz jeszcze zaplanowanych wyjazdów.</Text>
              </View>
            )}

            {/* Sekcja: HISTORIA REZERWACJI */}
            <Text style={[guestStyles.sectionTitle, { marginTop: 30 }]}>Historia pobytów</Text>
            {MOCK_PROFILE.pastReservations.length > 0 ? (
              MOCK_PROFILE.pastReservations.map(res => renderReservationCard(res, false))
            ) : (
              <View style={guestStyles.emptyBox}>
                <Text style={guestStyles.emptyText}>Brak historii rezerwacji.</Text>
              </View>
            )}

            {/* Przycisk powrotu - style z Twojego LoginStyles */}
            <TouchableOpacity 
              style={[loginStyles.loginButton, { marginTop: 40, marginBottom: 30 }]} 
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={loginStyles.loginButtonText}>SZUKAJ KOLEJNEGO DOMKU</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const guestStyles = StyleSheet.create({
  scrollContainer: { padding: 20 },
  profileHeader: { 
    alignItems: 'center', 
    marginVertical: 20 
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f7d940',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#fff'
  },
  avatarText: { fontSize: 28, fontWeight: 'bold', color: '#000' },
  welcomeText: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  emailText: { color: '#f7d940', fontSize: 14, marginTop: 5 },
  divider: { height: 1, backgroundColor: 'rgba(247,217,64,0.3)', marginVertical: 20 },
  sectionTitle: { color: '#f7d940', fontSize: 18, fontWeight: 'bold', marginBottom: 15, textTransform: 'uppercase' },
  resCard: { 
    backgroundColor: 'rgba(255,255,255,0.95)', 
    padding: 15, 
    borderRadius: 12, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#27ae60'
  },
  pastCard: {
    backgroundColor: 'rgba(200,200,200,0.85)',
    borderLeftColor: '#7f8c8d'
  },
  resInfo: { flex: 1 },
  cottageName: { color: '#000', fontSize: 16, fontWeight: 'bold' },
  resDates: { color: '#444', fontSize: 13, marginTop: 4 },
  resPrice: { color: '#000', fontSize: 13, fontWeight: '600', marginTop: 2 },
  statusIndicator: { 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 4,
    marginLeft: 10
  },
  statusText: { color: '#fff', fontSize: 9, fontWeight: 'bold' },
  emptyBox: { 
    padding: 20, 
    borderWidth: 1, 
    borderColor: 'rgba(255,255,255,0.2)', 
    borderRadius: 10,
    borderStyle: 'dashed'
  },
  emptyText: { color: '#aaa', textAlign: 'center', fontSize: 13 }
});

export default ProfileGuestScreen;