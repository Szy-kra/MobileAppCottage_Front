import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Cottage } from '../props/AllCottageServiceProps';

// MOCK DATA ściśle według CottageDto.cs
const MOCK_DATA: Cottage = {
  id: 1,
  name: "Góralska Rezydencja",
  description: "Przytulny domek blisko szlaków.",
  price: 550,
  maxPersons: 6,
  street: "Krupówki 12",
  city: "Zakopane",
  postalCode: "34-500",
  about: "To jest pole About, które w bazie może mieć 1000 znaków. Tutaj znajduje się pełna historia i szczegóły obiektu.",
  imageUrls: [],
  bookedDates: []
};

interface CottageInfoProps {
  cottage?: Cottage;
}

const CottageInfoComp: React.FC<CottageInfoProps> = ({ cottage = MOCK_DATA }) => {
  return (
    <View style={styles.mainContainer}>
      {/* Nagłówek - Teraz tylko nazwa */}
      <View style={styles.headerRow}>
        <Text style={styles.cottageName}>{cottage.name}</Text>
      </View>

      {/* Lokalizacja */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          📍 {cottage.city}, ul. {cottage.street} {cottage.postalCode}
        </Text>
      </View>

      <View style={styles.divider} />

      {/* Statystyki: MaxPersons i Cena w jednym wierszu */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{cottage.maxPersons}</Text>
          <Text style={styles.statLabel}>Max osób</Text>
        </View>

        <View style={styles.verticalDivider} />

        <View style={styles.statBox}>
          <Text style={[styles.statValue, { color: '#f7d940' }]}>{cottage.price} PLN</Text>
          <Text style={styles.statLabel}>Cena / doba</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Pole About */}
      {cottage.about && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O obiekcie</Text>
          <Text style={styles.bodyText}>{cottage.about}</Text>
        </View>
      )}

      {/* Pole Description */}
      {cottage.description && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Opis dodatkowy</Text>
          <Text style={styles.bodyText}>{cottage.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(247, 217, 64, 0.2)',
  },
  headerRow: {
    marginBottom: 5,
  },
  cottageName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Nazwa na biało, cena w statystykach na żółto
  },
  locationContainer: {
    marginBottom: 10,
  },
  locationText: {
    color: '#aaa',
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 12,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    height: '100%',
    marginHorizontal: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Rozłożone równomiernie
    alignItems: 'center',
    paddingVertical: 5,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 11,
    textTransform: 'uppercase',
    marginTop: 2,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#f7d940',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bodyText: {
    color: '#fff',
    lineHeight: 20,
    fontSize: 14,
  }
});

export default CottageInfoComp;