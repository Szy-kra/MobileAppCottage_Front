import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Navbar from '../components/NavbarComp';
import CottageCalendar from '../components/CottageCalendarComp';

const CottageDetailScreen = ({ navigation, route }: any) => {
  const cottageId = route?.params?.cottageId || '1';

  return (
    <View style={detailStyles.container}>
      <Navbar title="Szczegóły Domku" onBack={() => navigation.goBack()} />
      
      <ScrollView style={detailStyles.content}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233' }} 
          style={detailStyles.mainImage} 
        />
        
        <View style={detailStyles.infoSection}>
          <Text style={detailStyles.title}>Domek nr {cottageId}</Text>
          <Text style={detailStyles.location}>Lokalizacja: Tatry / Zakopane</Text>
          
          <Text style={detailStyles.description}>
            Luksusowy domek z pełnym wyposażeniem. Dane pobierane dynamicznie z Twojego API .NET 8.
          </Text>
          
          <Text style={detailStyles.sectionTitle}>Dostępność</Text>
          <CottageCalendar />

          <TouchableOpacity 
            style={detailStyles.backButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={detailStyles.backButtonText}>POWRÓT DO LISTY</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const detailStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1 },
  mainImage: { width: '100%', height: 250 },
  infoSection: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333' },
  location: { fontSize: 16, color: '#27ae60', marginBottom: 15 },
  description: { fontSize: 14, color: '#666', lineHeight: 20, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  backButton: { 
    backgroundColor: '#27ae60', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginTop: 20,
    marginBottom: 40 
  },
  backButtonText: { color: '#fff', fontWeight: 'bold' }
});

export default CottageDetailScreen;