import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CottageProps {
  name: string;
  price: number;
  location: string;
  imageUrl: string;
  maxPeople: number;
  description?: string;
  onPress: () => void;
}

const CottageCard = ({ name, price, location, imageUrl, maxPeople, description, onPress }: CottageProps) => {
  return (
    <View style={cardStyles.card}>
      {/* Kontener na zdjęcie */}
      <View style={cardStyles.imageContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={cardStyles.image} />
        ) : (
          <View style={cardStyles.noImage} />
        )}
      </View>
      
      <View style={cardStyles.info}>
        <View style={cardStyles.headerRow}>
          <View style={cardStyles.titleContainer}>
            <Text style={cardStyles.name}>{name || 'Chatka'}</Text>
            {/* Bezpieczne toUpperCase - rozwiązuje błąd z Twojego zdjęcia */}
            <Text style={cardStyles.location}>
              {location ? location.toUpperCase() : 'POLSKA'}
            </Text>
          </View>
          
          <View style={cardStyles.priceContainer}>
            <Text style={cardStyles.price}>{price ?? 0} zł</Text>
            <Text style={cardStyles.subPrice}>ZA DOBĘ</Text>
          </View>
        </View>

        {/* Opis domku */}
        <Text style={cardStyles.description} numberOfLines={2}>
          {description || "Uroczy domek w sercu Beskidów."}
        </Text>

        <View style={cardStyles.divider} />

        <View style={cardStyles.footerRow}>
          <View style={cardStyles.peopleContainer}>
            {/* Niebieska ikona użytkownika */}
            <Image 
              source={require('../assets/images/user.png')} 
              style={cardStyles.userIcon} 
            />
            <Text style={cardStyles.peopleText}>Max osób: {maxPeople ?? 0}</Text>
          </View>

          {/* Żółty przycisk Więcej z lupą */}
          <TouchableOpacity style={cardStyles.moreButton} onPress={onPress}>
            <Text style={cardStyles.moreButtonText}>🔍 Więcej</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#0a0a0a', // Bardzo ciemne tło
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#f7d940', // Złota/żółta ramka
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#1a1a1a',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  noImage: {
    flex: 1,
    backgroundColor: '#222',
  },
  info: {
    padding: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  location: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 2,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f7d940',
  },
  subPrice: {
    fontSize: 10,
    color: '#aaa',
  },
  description: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 15,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  peopleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    borderRadius: 50,
    width: 15,
    height:15,
    marginRight: 8,
  },
  peopleText: {
    fontSize: 15,
    color: '#FFF',
  },
  moreButton: {
    backgroundColor: '#f7d940',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  moreButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CottageCard;