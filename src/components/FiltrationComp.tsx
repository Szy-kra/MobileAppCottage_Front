import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  Image, 
  Modal, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

// Import stylów z osobnego pliku [cite: 2026-01-11]
import { filtrationStyles } from '../styles/FiltrationStyles';

interface FiltrationProps {
  onFilter: (filters: any) => void;
}

export default function Filtration({ onFilter }: FiltrationProps) {
  const [showModal, setShowModal] = useState(false);
  
  // Stany lokalne formularza
  const [searchName, setSearchName] = useState('');
  const [location, setLocation] = useState('');
  const [guestsMin, setGuestsMin] = useState('1');
  const [guestsMax, setGuestsMax] = useState('10');
  const [priceMin, setPriceMin] = useState('0');
  const [priceMax, setPriceMax] = useState('2000');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  // Walidacja daty (prosty regex dla YYYY-MM-DD) [cite: 2026-01-14]
  const isValidDate = (dateString: string) => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString) return true; // Puste dopuszczalne
    return dateString.match(regEx) !== null;
  };

  const handleApplyFilters = () => {
    // Walidacja przed wysłaniem do backendu .NET 8 [cite: 2026-01-14]
    if (!isValidDate(dateFrom) || !isValidDate(dateTo)) {
      Alert.alert("Błąd formatu", "Data musi być w formacie YYYY-MM-DD");
      return;
    }

    onFilter({
      searchName: searchName.trim(),
      location: location.trim(),
      guestsMin: Number(guestsMin) || 0,
      guestsMax: Number(guestsMax) || 100,
      priceMin: Number(priceMin) || 0,
      priceMax: Number(priceMax) || 99999,
      dateFrom,
      dateTo
    });
    setShowModal(false);
  };

  const handleSearchNameChange = (text: string) => {
    setSearchName(text);
    // Filtracja na żywo tylko jeśli wpisano min. 3 znaki lub wyczyszczono [cite: 2026-02-11]
    if (text.length >= 3 || text.length === 0) {
      onFilter({
        searchName: text,
        location,
        guestsMin: Number(guestsMin),
        guestsMax: Number(guestsMax),
        priceMin: Number(priceMin),
        priceMax: Number(priceMax),
        dateFrom,
        dateTo
      });
    }
  };

  return (
    <View style={filtrationStyles.container}>
      <View style={filtrationStyles.searchBarRow}>
        <TextInput
          style={filtrationStyles.nameInput}
          placeholder="Szukaj po nazwie domku..."
          placeholderTextColor="#999"
          value={searchName}
          onChangeText={handleSearchNameChange}
        />
        
        <TouchableOpacity 
          style={filtrationStyles.filterIconButton} 
          onPress={() => setShowModal(true)}
        >
          <Image 
            source={require('../assets/images/filter.png')} 
            style={filtrationStyles.filterIcon} 
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={filtrationStyles.modalOverlay}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={filtrationStyles.modalContent}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={filtrationStyles.modalTitle}>Filtruj domki</Text>

              <Text style={filtrationStyles.label}>Miejscowość</Text>
              <TextInput
                style={filtrationStyles.modalInput}
                placeholder="Np. Zakopane"
                placeholderTextColor="#999"
                value={location}
                onChangeText={setLocation}
              />

              <View style={filtrationStyles.row}>
                <View style={filtrationStyles.halfInput}>
                  <Text style={filtrationStyles.label}>Goście (min)</Text>
                  <TextInput
                    style={filtrationStyles.modalInput}
                    keyboardType="numeric"
                    value={guestsMin}
                    onChangeText={setGuestsMin}
                  />
                </View>
                <View style={filtrationStyles.halfInput}>
                  <Text style={filtrationStyles.label}>Goście (max)</Text>
                  <TextInput
                    style={filtrationStyles.modalInput}
                    keyboardType="numeric"
                    value={guestsMax}
                    onChangeText={setGuestsMax}
                  />
                </View>
              </View>

              <View style={filtrationStyles.row}>
                <View style={filtrationStyles.halfInput}>
                  <Text style={filtrationStyles.label}>Cena min</Text>
                  <TextInput
                    style={filtrationStyles.modalInput}
                    keyboardType="numeric"
                    value={priceMin}
                    onChangeText={setPriceMin}
                  />
                </View>
                <View style={filtrationStyles.halfInput}>
                  <Text style={filtrationStyles.label}>Cena max</Text>
                  <TextInput
                    style={filtrationStyles.modalInput}
                    keyboardType="numeric"
                    value={priceMax}
                    onChangeText={setPriceMax}
                  />
                </View>
              </View>

              <Text style={filtrationStyles.label}>Termin od</Text>
              <TextInput
                style={filtrationStyles.modalInput}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#999"
                value={dateFrom}
                onChangeText={setDateFrom}
              />

              <Text style={filtrationStyles.label}>Termin do</Text>
              <TextInput
                style={filtrationStyles.modalInput}
                placeholder="YYYY-MM-DD"
                placeholderTextColor="#999"
                value={dateTo}
                onChangeText={setDateTo}
              />

              <TouchableOpacity 
                style={filtrationStyles.applyButton} 
                onPress={handleApplyFilters}
              >
                <Text style={filtrationStyles.applyButtonText}>ZASTOSUJ FILTRY</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={filtrationStyles.closeButton} 
                onPress={() => setShowModal(false)}
              >
                <Text style={filtrationStyles.closeButtonText}>Anuluj</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
}