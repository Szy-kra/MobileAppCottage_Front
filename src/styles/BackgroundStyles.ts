import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const backgroundStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)', // Przyciemnienie zdjęcia
  }
});