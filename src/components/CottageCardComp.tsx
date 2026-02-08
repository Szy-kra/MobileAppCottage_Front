import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CottageProps {
  name: string;
  price: number;
  location: string;
  imageUrl: string;
  maxPeople: number; // NOWE
  onPress: () => void; // NOWE dla nawigacji
}

const CottageCard = ({ name, price, location, imageUrl, maxPeople, onPress }: CottageProps) => {
  return (
    <View style={cardStyles.card}>
      <Image source={{ uri: imageUrl }} style={cardStyles.image} />
      <View style={cardStyles.info}>
        <Text style={cardStyles.name}>{name}</Text>
        <Text style={cardStyles.location}>{location}</Text>
        
        <View style={cardStyles.detailsRow}>
          <Text style={cardStyles.peopleText}>Ludzie: {maxPeople}</Text>
          <Text style={cardStyles.price}>{price} PLN / noc</Text>
        </View>

        <TouchableOpacity style={cardStyles.moreButton} onPress={onPress}>
          <Text style={cardStyles.moreButtonText}>CZYTAJ WIĘCEJ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  info: {
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  peopleText: {
    fontSize: 14,
    color: '#444',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3366FF',
  },
  moreButton: {
    backgroundColor: '#3366FF',
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  moreButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CottageCard;