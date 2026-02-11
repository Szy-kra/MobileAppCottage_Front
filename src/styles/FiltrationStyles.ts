import { StyleSheet } from 'react-native';

export const filtrationStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  searchBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  nameInput: {
    flex: 1,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000',
    elevation: 3, // Cień na Androidzie
  },
  filterIconButton: {
    width: 45,
    height: 45,
    backgroundColor: '#f7d940',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)', // Mocniejsze przyciemnienie dla kontrastu
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    maxHeight: '85%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 13,
    color: '#333',
    marginBottom: 5,
    fontWeight: '700',
  },
  modalInput: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    height: 45,
    paddingHorizontal: 12,
    marginBottom: 15,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  halfInput: {
    flex: 1,
  },
  applyButton: {
    backgroundColor: '#f7d940',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  applyButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
  },
  closeButtonText: {
    color: '#e74c3c', // Czerwony kolor dla "Anuluj"
    fontSize: 14,
    fontWeight: '600',
  }
});