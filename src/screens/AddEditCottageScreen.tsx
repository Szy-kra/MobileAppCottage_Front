import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  ImageBackground,
  Alert 
} from 'react-native';
import { backgroundStyles } from '../styles/BackgroundStyles';
import { styles } from '../styles/LoginStyles';
import { cottageStyles } from '../styles/CottageStyles';

const backgroundImage = require('../assets/images/background.png');

const AddEditCottageScreen = ({ navigation }: any) => {
  return (
    <ImageBackground source={backgroundImage} style={backgroundStyles.backgroundImage}>
      <View style={backgroundStyles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Zarządzanie Domkiem</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={cottageStyles.statusCard}>
              <Text style={cottageStyles.statusText}>Status obiektu:</Text>
              <Text style={{ color: '#27ae60', fontWeight: 'bold' }}>AKTYWNY</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={() => Alert.alert("API .NET 8", "Pobieranie ustawień filtracji...")}
            >
              <Text style={styles.loginButtonText}>USTAWIENIA FILTRACJI</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.loginButton, { backgroundColor: '#34495e', marginTop: 15 }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.loginButtonText}>POWRÓT</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default AddEditCottageScreen;