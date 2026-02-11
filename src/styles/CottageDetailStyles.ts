import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
  },
  sliderContainer: {
    height: 250,
    width: '100%',
  },
  slider: {
    flex: 1,
  },
  sliderImage: {
    width: width,
    height: 250,
    resizeMode: 'cover',
  },
  infoSection: {
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#000',
    marginTop: -20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#f7d940',
    marginBottom: 15,
  },
  priceTag: {
    backgroundColor: 'rgba(247, 217, 64, 0.1)',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(247, 217, 64, 0.3)',
    marginBottom: 20,
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f7d940',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  description: {
    fontSize: 15,
    color: '#ccc',
    lineHeight: 22,
    textAlign: 'justify',
  },
  calendarContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    padding: 10,
    marginVertical: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 25,
  },
  // --- STYLE FORMULARZA REZERWACJI ---
  bookingForm: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#222',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputGroup: {
    flex: 0.48,
  },
  inputLabel: {
    color: '#f7d940',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    fontSize: 14,
  },
  bookButton: {
    backgroundColor: '#f7d940',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#f7d940',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  bookButtonDisabled: {
    backgroundColor: '#333',
    shadowOpacity: 0,
    elevation: 0,
  },
  bookButtonText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 1,
  },
  backButton: {
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#666',
    fontSize: 14,
    textDecorationLine: 'underline',
  }
});