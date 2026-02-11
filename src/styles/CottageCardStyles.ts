import { StyleSheet } from 'react-native';

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
    borderRadius: 50,
    width: 15,
    height: 15,
    marginRight: 8,
    tintColor: '#FFF' // Zapewnia widoczność ikony
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