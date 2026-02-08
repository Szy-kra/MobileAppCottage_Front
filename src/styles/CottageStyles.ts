import { StyleSheet } from 'react-native';

export const cottageStyles = StyleSheet.create({
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 5,
    borderLeftColor: '#2ecc71'
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495e'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  menuItem: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)'
  }
});