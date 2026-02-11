import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

interface ImageSliderProps {
  images: string[];
}

const CottageImageSliderComp: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Jeśli brak zdjęć, wyświetlamy placeholder (pasujący do Twojego ciemnego stylu)
  if (!images || images.length === 0) {
    return (
      <View style={styles.placeholderContainer}>
        <Text style={styles.placeholderText}>Brak zdjęć obiektu</Text>
      </View>
    );
  }

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollPosition / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((url, index) => (
          <Image
            key={index}
            source={{ uri: url }}
            style={styles.image}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Wskaźnik kropek (Pagination Dots) */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: width,
    backgroundColor: '#1a1a1a',
  },
  image: {
    width: width,
    height: 250,
  },
  placeholderContainer: {
    height: 250,
    width: width,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 16,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#f7d940', // Twój żółty kolor
    width: 20, // Aktywna kropka jest szersza (efekt premium)
  },
  inactiveDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
});

export default CottageImageSliderComp;