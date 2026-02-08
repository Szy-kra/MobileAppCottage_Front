import React from 'react';
import { 
  FlatList, 
  SafeAreaView, 
  ImageBackground, 
  View,
  StyleSheet
} from 'react-native';
import Navbar from '../components/NavbarComp';
import CottageCard from '../components/CottageCardComp';
import { backgroundStyles } from '../styles/BackgroundStyles';

// Jeśli nie używasz 'styles' z LoginStyles w tym konkretnym pliku, 
// usuń ten import, aby zniknęło podkreślenie.
// import { styles } from '../styles/LoginStyles'; 

const backgroundImage = require('../assets/images/background.png');

const STATIC_DATA = [
  { 
    id: '1', 
    name: 'Leśna Cisza', 
    price: 250, 
    location: 'Zakopane', 
    maxPeople: 4, 
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233' 
  },
  { 
    id: '2', 
    name: 'Domek nad Jeziorem', 
    price: 320, 
    location: 'Mazury', 
    maxPeople: 6, 
    image: 'https://images.unsplash.com/photo-1449156001437-37c645d97041' 
  },
];

const HomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navbar title="Dostępne Domki" />
          
          <FlatList
            data={STATIC_DATA}
            keyExtractor={(item) => item.id}
            contentContainerStyle={homeStyles.listContent}
            renderItem={({ item }) => (
              <CottageCard 
                name={item.name} 
                price={item.price} 
                location={item.location} 
                imageUrl={item.image}
                maxPeople={item.maxPeople}
                onPress={() => navigation.navigate('CottageDetail', { cottageId: item.id })}
              />
            )}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

// Lokalne style, aby uniknąć nieużywanych importów
const homeStyles = StyleSheet.create({
  listContent: {
    padding: 20,
    paddingBottom: 100 // Miejsce na ewentualny dolny pasek
  }
});

export default HomeScreen;