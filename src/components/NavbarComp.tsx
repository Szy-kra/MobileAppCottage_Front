import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Definicja dostępnych tras dla nawigacji
type RootStackParamList = {
  Home: undefined;
  ProfileHost: undefined;
  ProfileGuest: undefined;
  CottageDetail: { id: number };
};

interface NavbarProps {
  title?: string;
  onBack?: () => void;
}

export default function Navbar({ title, onBack }: NavbarProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleProfileNavigation = () => {
    // Statyczna rola zgodnie z wymaganiem testowym
    const userRole: 'GUEST' | 'HOST' = 'HOST'; 

    if (userRole === 'HOST') {
      navigation.navigate('ProfileHost');
    } else {
      navigation.navigate('ProfileGuest');
    }
  };

  return (
    <View style={navStyles.topBar}>
      <View style={navStyles.leftSection}>
        {onBack ? (
          <TouchableOpacity onPress={onBack} style={navStyles.backButton}>
            <Text style={navStyles.backText}>{"<"}</Text>
          </TouchableOpacity>
        ) : (
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

      <View style={navStyles.rightSection}>
        <TouchableOpacity 
          onPress={handleProfileNavigation}
          style={navStyles.userTouchArea}
        >
          <Image
            source={require('../assets/images/user.png')}
            style={navStyles.topUserIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const navStyles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    paddingTop: Platform.OS === 'ios' ? 50 : 35,
    paddingHorizontal: 15,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(247, 217, 64, 0.2)',
  },
  leftSection: { flex: 1 },
  rightSection: { flex: 1, alignItems: 'flex-end' },
  logoButton: { flexDirection: 'row', alignItems: 'center' },
  topLogo: { width: 25, height: 25, marginRight: 8 },
  logoText: { color: '#f7d940', fontWeight: 'bold', fontSize: 16 },
  userTouchArea: { padding: 5 },
  topUserIcon: { 
    width: 35, 
    height: 35, 
    borderRadius: 17.5, 
    backgroundColor: '#f7d940',
    tintColor: '#000'
  },
  backButton: { padding: 5 },
  backText: { color: '#f7d940', fontSize: 24, fontWeight: 'bold' }
});