import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Image, 
  StyleSheet, 
  Modal, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

interface FiltrationProps {
  onFilter: (filters: any) => void;
}

export default function Filtration({ onFilter }: FiltrationProps) {
  const [showModal, setShowModal] = useState(false);
  const [searchName, setSearchName] = useState('');

  // Stany dla rozbudowanego filtra ze zdjęcia
  const [location, setLocation] = useState('');
  const [guestsMin, setGuestsMin] = useState('0');
  const [guestsMax, setGuestsMax] = useState('10');
  const [priceMin, setPriceMin] = useState('0');
  const [priceMax, setPriceMax] = useState('2000');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const handleApplyFilters = () => {
    onFilter({
      searchName,
      location,
      guestsMin,
      guestsMax,
      priceMin,
      priceMax,
      dateFrom,
      dateTo
    });
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      {/* Pasek główny pod Navbarem */}
      <View style={styles.searchBarRow}>
        <TextInput
          style={styles.nameInput}
          placeholder="Szukaj po nazwie domku..."
          placeholderTextColor="#999"
          value={searchName}
          onChangeText={setSearchName}
        />
        
        <TouchableOpacity 
          style={styles.filterIconButton} 
          onPress={() => setShowModal(true)}
        >
          <Image 
            source={require('../assets/images/filter.png')} 
            style={styles.filterIcon} 
          />
        </TouchableOpacity>
      </View>

      {/* Okno modalne z Twojego zdjęcia */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.modalContent}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalTitle}>Filtruj domki</Text>

              <Text style={styles.label}>Miejscowość</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Wpisz miasto..."
                placeholderTextColor="#999"
                value={location}
                onChangeText={setLocation}
              />

              <View style={styles.row}>
                <View style={styles.halfInput}>
                  <Text style={styles.label}>Goście (min)</Text>
                  <TextInput
                    style={styles.modalInput}
                    keyboardType="numeric"
                    placeholder="0"
                    value={guestsMin}
                    onChangeText={setGuestsMin}
                  />
                </View>
                <View style={styles.halfInput}>
                  <Text style={styles.label}>Goście (max)</Text>
                  <TextInput
                    style={styles.modalInput}
                    keyboardType="numeric"
                    placeholder="10"
                    value={guestsMax}
                    onChangeText={setGuestsMax}
                  />
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.halfInput}>
                  <Text style={styles.label}>Cena min (PLN)</Text>
                  <TextInput
                    style={styles.modalInput}
                    keyboardType="numeric"
                    placeholder="0"
                    value={priceMin}
                    onChangeText={setPriceMin}
                  />
                </View>
                <View style={styles.halfInput}>
                  <Text style={styles.label}>Cena max (PLN)</Text>
                  <TextInput
                    style={styles.modalInput}
                    keyboardType="numeric"
                    placeholder="2000"
                    value={priceMax}
                    onChangeText={setPriceMax}
                  />
                </View>
              </View>

              <Text style={styles.label}>Data od (YYYY-MM-DD)</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#999"
                value={dateFrom}
                onChangeText={setDateFrom}
              />

              <Text style={styles.label}>Data do (YYYY-MM-DD)</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#999"
                value={dateTo}
                onChangeText={setDateTo}
              />

              <TouchableOpacity 
                style={styles.applyButton} 
                onPress={handleApplyFilters}
              >
                <Text style={styles.applyButtonText}>ZASTOSUJ FILTRY</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.closeButtonText}>Anuluj</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  nameInput: {
    flex: 1,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000',
  },
  filterIconButton: {
    width: 45,
    height: 45,
    backgroundColor: '#f7d940',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    width: 24,
    height: 24,
    // Brak tintColor, aby zachować oryginalny kolor Twojej ikony
  },
  // Style Modala oparte na Twoim screenie
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    maxHeight: '90%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    fontWeight: '600',
  },
  modalInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    height: 45,
    paddingHorizontal: 12,
    marginBottom: 15,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  halfInput: {
    flex: 1,
  },
  applyButton: {
    backgroundColor: '#f7d940',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  applyButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#666',
    fontSize: 14,
  }
});