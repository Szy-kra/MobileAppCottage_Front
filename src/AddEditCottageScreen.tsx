import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator, 
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../components/NavbarComp';
import { backgroundStyles } from '../styles/BackgroundStyles';
import { styles as loginStyles } from '../styles/LoginStyles'; // Używamy Twoich stabilnych stylów [cite: 2026-01-11]

const backgroundImage = require('../assets/images/background.png');

// Komponent FormInput wyciągnięty poza, aby uniknąć re-renderowania klawiatury [cite: 2026-02-11]
const FormInput = ({ label, value, onChangeText, placeholder, keyboardType = 'default', multiline = false, maxLength }: any) => (
  <View style={{ marginBottom: 15 }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: '#f7d940', fontWeight: 'bold', marginBottom: 5 }}>{label}</Text>
      {maxLength && (
        <Text style={{ color: value.length > maxLength ? '#ff4444' : '#888', fontSize: 12 }}>
          {value.length}/{maxLength}
        </Text>
      )}
    </View>
    <TextInput
      style={{ 
        backgroundColor: 'rgba(255,255,255,0.1)', 
        color: '#fff', 
        padding: 12, 
        borderRadius: 8, 
        borderWidth: 1, 
        borderColor: (maxLength && value.length > maxLength) ? '#ff4444' : 'rgba(247,217,64,0.3)',
        textAlignVertical: multiline ? 'top' : 'center',
        minHeight: multiline ? 80 : 50
      }}
      placeholder={placeholder}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      multiline={multiline}
      maxLength={maxLength}
    />
  </View>
);

const AddEditCottageScreen = ({ navigation, route }: any) => {
  const editData = route?.params?.cottage;
  const isEdit = !!editData;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '', 
    about: '',       
    price: '',
    maxPersons: '',
    street: '',
    city: '',
    postalCode: '',
    imageUrls: ''
  });

  useEffect(() => {
    if (isEdit) {
      setFormData({
        name: editData.name || '',
        description: editData.description || '',
        about: editData.about || '',
        price: editData.price?.toString() || '',
        maxPersons: editData.maxPersons?.toString() || '',
        street: editData.street || '',
        city: editData.city || '',
        postalCode: editData.postalCode || '',
        imageUrls: editData.imageUrls ? editData.imageUrls.join(', ') : ''
      });
    }
  }, [editData]);

  // SYMULACJA ZAPISU (Tylko Frontend) [cite: 2026-02-11]
  const handleSave = () => {
    // Walidacja lokalna zgodna z Twoimi DTO [cite: 2026-02-10]
    if (formData.description.length > 100) {
      Alert.alert("Błąd", "Opis (Description) nie może przekraczać 100 znaków.");
      return;
    }
    if (formData.about.length > 1000) {
      Alert.alert("Błąd", "Pole 'About' nie może przekraczać 1000 znaków.");
      return;
    }
    if (!formData.name || !formData.price || !formData.city) {
      Alert.alert("Błąd", "Pola: Nazwa, Cena i Miasto są wymagane.");
      return;
    }

    setLoading(true);
    
    // Symulujemy opóźnienie sieciowe
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        isEdit ? "Edycja" : "Nowy obiekt",
        "W trybie demo dane zostały pomyślnie przetworzone!",
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    }, 1500);
  };

  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <Navbar title={isEdit ? "Edytuj" : "Nowy Domek"} />
            
            <ScrollView contentContainerStyle={{ padding: 20 }}>
              <FormInput 
                label="Nazwa" 
                value={formData.name} 
                onChangeText={(t: string) => setFormData({...formData, name: t})} 
              />

              <FormInput 
                label="Krótki opis (Description)" 
                placeholder="Max 100 znaków..."
                maxLength={100}
                multiline={true}
                value={formData.description}
                onChangeText={(t: string) => setFormData({...formData, description: t})} 
              />

              <FormInput 
                label="Pełny opis obiektu (About)" 
                placeholder="Max 1000 znaków..."
                maxLength={1000}
                multiline={true}
                value={formData.about}
                onChangeText={(t: string) => setFormData({...formData, about: t})} 
              />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '48%' }}>
                  <FormInput 
                    label="Cena (zł)" 
                    keyboardType="numeric" 
                    value={formData.price} 
                    onChangeText={(t: string) => setFormData({...formData, price: t})} 
                  />
                </View>
                <View style={{ width: '48%' }}>
                  <FormInput 
                    label="Osób" 
                    keyboardType="numeric" 
                    value={formData.maxPersons} 
                    onChangeText={(t: string) => setFormData({...formData, maxPersons: t})} 
                  />
                </View>
              </View>

              <FormInput label="Miasto" value={formData.city} onChangeText={(t: string) => setFormData({...formData, city: t})} />
              <FormInput label="Ulica" value={formData.street} onChangeText={(t: string) => setFormData({...formData, street: t})} />
              <FormInput label="Kod pocztowy" placeholder="00-000" value={formData.postalCode} onChangeText={(t: string) => setFormData({...formData, postalCode: t})} />
              
              <FormInput 
                label="Zdjęcia (Linki po przecinku)" 
                placeholder="http://img1.jpg, http://img2.jpg" 
                value={formData.imageUrls} 
                onChangeText={(t: string) => setFormData({...formData, imageUrls: t})} 
              />

              <TouchableOpacity 
                style={[loginStyles.loginButton, { backgroundColor: '#f7d940', marginTop: 20 }]}
                onPress={handleSave}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator color="#000" />
                ) : (
                  <Text style={[loginStyles.loginButtonText, { color: '#000' }]}>
                    {isEdit ? "ZAPISZ ZMIANY" : "DODAJ DOMEK"}
                  </Text>
                )}
              </TouchableOpacity>

              <View style={{ height: 40 }} />
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default AddEditCottageScreen;