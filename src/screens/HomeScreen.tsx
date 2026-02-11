import React, { useState, useEffect } from 'react';
import { 
  View, 
  FlatList, 
  ActivityIndicator, 
  ImageBackground,
  ListRenderItem
} from 'react-native';

// Importy usług i komponentów [cite: 2026-01-12, 2026-02-11]
import { AllCottageService, Cottage } from '../props/AllCottageServiceProps';
import CottageCard from '../components/CottageCardComp';
import Navbar from '../components/NavbarComp';
import Filtration from '../components/FiltrationComp'; // Wstrzyknięty komponent filtracji
import { backgroundStyles } from '../styles/BackgroundStyles';

const HomeScreen = ({ navigation }: any) => {
  // 1. Hooki stanu (zawsze na górze komponentu)
  const [cottages, setCottages] = useState<Cottage[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Hook efektu do pobierania danych z API .NET 8 [cite: 2026-01-12]
  useEffect(() => {
    const fetchCottages = async () => {
      try {
        const data = await AllCottageService.GetAll();
        setCottages(data);
      } catch (error) {
        console.error("Błąd API .NET 8:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCottages();
  }, []);

  // 3. Funkcja renderująca pojedynczy element listy [cite: 2026-02-11]
  const renderCottage: ListRenderItem<Cottage> = ({ item }) => (
    <CottageCard
      name={item.name}
      price={item.price}
      location={item.city}
      imageName={item.imageUrls?.[0] || 'placeholder'}
      maxPeople={item.maxPersons}
      onPress={() => navigation.navigate('CottageDetail', { id: item.id })}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
      {/* Navbar na samej górze */}
      <Navbar title="Przeglądaj Domki" />

      {/* WSTRZYKNIĘCIE FILTRACJI: Zaraz pod Navbarem [cite: 2026-02-11] */}
      <Filtration />

      <ImageBackground 
        source={require('../assets/images/background.png')} 
        style={backgroundStyles.backgroundImage}
      >
        <View style={backgroundStyles.overlay}>
          {loading ? (
            <ActivityIndicator size="large" color="#f7d940" style={{ marginTop: 50 }} />
          ) : (
            <FlatList
              data={cottages}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderCottage}
              contentContainerStyle={{ padding: 15, paddingBottom: 100 }}
              // Zapobiega "ukrywaniu" elementów pod navbarami na niektórych urządzeniach
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;