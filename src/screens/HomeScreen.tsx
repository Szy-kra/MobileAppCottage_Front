import React, { useEffect, useState } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  SafeAreaView, 
  ImageBackground, 
  View,
  ActivityIndicator,
  Text,
  Alert
} from 'react-native';
import Navbar from '../components/NavbarComp';
import CottageCard from '../components/CottageCardComp';
import { backgroundStyles } from '../styles/BackgroundStyles';

const backgroundImage = require('../assets/images/background.png');

// Definicja typu danych dla domku
interface Cottage {
  id: string;
  name: string;
  price: number;
  location: string;
  maxPeople: number;
  imageUrl: string;
}

const HomeScreen = ({ route, navigation }: any) => {
  // Pobieramy parametry przekazane z LoginScreen
  const { isHost, userEmail } = route.params || { isHost: false, userEmail: 'Użytkownik' };
  
  const [cottages, setCottages] = useState<Cottage[]>([]);
  const [loading, setLoading] = useState(true);

  // Funkcja pobierająca dane z API .NET
  const fetchCottages = async () => {
    try {
      setLoading(true);
      // Zakładamy endpoint /api/cottages w Twoim kontrolerze
      const response = await fetch('http://10.0.2.2:8080/api/cottages', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        setCottages(data);
      } else {
        Alert.alert("Błąd", "Nie udało się pobrać listy domków.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Błąd połączenia", "Serwer nie odpowiada.");
    } finally {
      setLoading(false);
    }
  };

  // Wywołujemy pobieranie przy wejściu na ekran
  useEffect(() => {
    fetchCottages();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <SafeAreaView style={homeStyles.safeArea}>
          {/* Navbar z dynamicznym tytułem zależnym od roli */}
          <Navbar title={isHost ? "Twoje Domki" : "Dostępne Domki"} />
          
          {loading ? (
            <View style={homeStyles.center}>
              <ActivityIndicator size="large" color="#27ae60" />
              <Text style={{color: '#fff', marginTop: 10}}>Ładowanie ofert...</Text>
            </View>
          ) : (
            <FlatList
              data={cottages}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={homeStyles.listContent}
              ListEmptyComponent={
                <Text style={homeStyles.emptyText}>Brak dostępnych domków w bazie.</Text>
              }
              renderItem={({ item }) => (
                <CottageCard 
                  name={item.name} 
                  price={item.price} 
                  location={item.location} 
                  imageUrl={item.imageUrl || 'https://via.placeholder.com/150'}
                  maxPeople={item.maxPeople}
                  onPress={() => navigation.navigate('CottageDetail', { cottageId: item.id })}
                />
              )}
              // Dodajemy funkcję "pociągnij, aby odświeżyć"
              onRefresh={fetchCottages}
              refreshing={loading}
            />
          )}
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  }
});

export default HomeScreen;