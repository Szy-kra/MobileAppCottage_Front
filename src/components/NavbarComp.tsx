import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface NavbarProps {
  title?: string;
  onBack?: () => void;
}

export default function Navbar({ title, onBack }: NavbarProps) {
  const navigation = useNavigation<any>();

  // Funkcja obsługująca przekierowanie do odpowiedniego profilu
  const handleProfileNavigation = () => {
    // DOCELOWO: Tutaj pobierzesz rolę z Twojego systemu logowania (.NET 8)
    // Na potrzeby testów zmień poniższą wartość na 'GUEST' lub 'HOST'
    const userRole: 'GUEST' | 'HOST' = 'HOST'; 

    if (userRole === 'HOST') {
      navigation.navigate('ProfileHost');
    } else {
      navigation.navigate('ProfileGuest');
    }
  };

  return (
    <View style={navStyles.topBar}>
      <View style={navStyles.logoRow}>
        {onBack ? (
          <TouchableOpacity onPress={onBack} style={navStyles.backButton}>
            <Text style={navStyles.backText}>{"<"}</Text>
          </TouchableOpacity>
        ) : (
          /* Kliknięcie w logo lub napis przenosi na Home */
          <TouchableOpacity 
            style={navStyles.logoButton} 
            onPress={() => navigation.navigate('Home')}
          >
            <Image
              source={require('../assets/images/logo.png')}
              style={[navStyles.topLogo, { tintColor: '#f7d940' }]}
            />
            <Text style={navStyles.logoText}>CottageApp</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Tytuł strony wyświetlany na środku */}
      {title && <Text style={navStyles.centerTitle}>{title}</Text>}

      {/* Ikonka użytkownika z logiką wyboru profilu */}
      <TouchableOpacity onPress={handleProfileNavigation}>
        <Image
          source={require('../assets/images/user.png')}
          style={navStyles.topUserIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const navStyles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingTop: 50,
    paddingHorizontal: 15,
    height: 110,
  },
  logoRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1 
  },
  logoButton: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  topLogo: { 
    width: 25, 
    height: 25, 
    marginRight: 8, 
  
  },
  logoText: { 
    color: '#f7d940', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  centerTitle: { 
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold', 
    flex: 1, 
    textAlign: 'center' 
  },
  topUserIcon: { 
    width: 35, 
    height: 35, 
    borderRadius: 15,
    backgroundColor: '#ffda07fd' // Lekkie tło, jeśli obrazek by nie wystawał
  },
  backButton: { 
    padding: 5 
  },
  backText: { 
    color: '#f7d940', 
    fontSize: 24, 
    fontWeight: 'bold' 
  }
});