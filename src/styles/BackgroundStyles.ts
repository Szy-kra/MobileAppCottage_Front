import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const backgroundStyles = StyleSheet.create({
  backgroundImage: {
    width: width,
    height: height,
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)', // Minimalne przyciemnienie tła z pagórkami
  }
}); 