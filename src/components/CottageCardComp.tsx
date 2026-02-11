import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CottageImages, getCottageImage } from '../assets/ImageScript/ImageAssets';

interface CottageProps {
  name: string;
  price: number;
  location: string;
  imageName?: string;
  maxPeople: number;
  description?: string;
  onPress: () => void;
}

const CottageCard = ({ name, price, location, imageName, maxPeople, description, onPress }: CottageProps) => {
  // Logika "Safe Data" [cite: 2026-02-10]
  const safeName = name || 'Chatka';
  const safeLocation = location ? location.toUpperCase() : 'POLSKA';
  const safePrice = price ?? 0;
  const safeMaxPeople = maxPeople ?? 0;
  const safeDescription = description || "Uroczy domek w sercu Beskidów.";

  // Dynamiczne pobieranie obrazka ze słownika
  const resolvedImage = getCottageImage(imageName);

  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.imageContainer}>
        <Image source={resolvedImage} style={cardStyles.image} />
      </View>

      <View style={cardStyles.info}>
        <View style={cardStyles.headerRow}>
          <View style={cardStyles.titleContainer}>
            <Text style={cardStyles.name}>{safeName}</Text>
            <Text style={cardStyles.location}>{safeLocation}</Text>
          </View>

          <View style={cardStyles.priceContainer}>
            <Text style={cardStyles.price}>{safePrice} zł</Text>
            <Text style={cardStyles.subPrice}>ZA DOBĘ</Text>
          </View>
        </View>

        <Text style={cardStyles.description} numberOfLines={2}>
          {safeDescription}
        </Text>

        <View style={cardStyles.divider} />

        <View style={cardStyles.footerRow}>
          <View style={cardStyles.peopleContainer}>
            <Image 
              source={CottageImages['maxPeopleIcon']} 
              style={cardStyles.userIcon} 
            />
            <Text style={cardStyles.peopleText}>Max osób: {safeMaxPeople}</Text>
          </View>

          <TouchableOpacity 
            style={cardStyles.moreButton} 
            onPress={onPress}
            activeOpacity={0.7}
          >
            <Text style={cardStyles.moreButtonText}>🔍 Więcej</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// --- STYLE WEWNĄTRZ KOMPONENTU (Zgodnie z zasadą *Comp) ---
export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#0a0a0a',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#f7d940',
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
    resizeMode: 'cover',
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
    width: 20, 
    height: 20,
    marginRight: 8,
    // tintColor USUNIĘTY - ikona wyświetli się w oryginalnych kolorach
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