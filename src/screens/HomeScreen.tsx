import React, { useState, useEffect } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  SafeAreaView, 
  ImageBackground, 
  View,
  ActivityIndicator
} from 'react-native';
import Navbar from '../components/NavbarComp';
import CottageCard from '../components/CottageCardComp';
import Filtration from '../components/FiltrationComp';
import { backgroundStyles } from '../styles/BackgroundStyles';

const backgroundImage = require('../assets/images/background.png');

const HomeScreen = ({ navigation }: any) => {
  const [cottages, setCottages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Prosty fetch bez zbędnych paczek
  const getData = (params = {}) => {
    setLoading(true);
    
    // Budujemy prosty adres dla emulatora [cite: 2026-02-01]
    // Zamień localhost na 10.0.2.2, żeby Android widział Twój serwer .NET
    const query = new URLSearchParams(params).toString();
    const url = `http://10.0.2.2:8080/api/cottage?${query}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCottages(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Błąd fetch:", err);
        setLoading(false);
      });
  };

  // Pobierz dane raz na start
  useEffect(() => {
    getData();
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <Navbar title="" />
          
          {/* Przekazujemy parametry z modala prosto do fetch */}
          <Filtration onFilter={(vals: any) => getData(vals)} />
          
          {loading ? (
            <ActivityIndicator size="large" color="#f7d940" style={{marginTop: 50}} />
          ) : (
            <FlatList
              data={cottages}
              keyExtractor={(item: any) => item.id.toString()}
              contentContainerStyle={styles.listContent}
              renderItem={({ item }) => (
                <CottageCard 
                  name={item.name} 
                  price={item.price} 
                  location={item.location} 
                  imageUrl={item.imageUrl}
                  maxPeople={item.maxPeople}
                  onPress={() => navigation.navigate('CottageDetail', { id: item.id })}
                />
              )}
            />
          )}
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  listContent: { padding: 20, paddingBottom: 40 }
});

export default HomeScreen;