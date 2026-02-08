import { StyleSheet } from 'react-native';

export const registerStyles = StyleSheet.create({
  roleLabel: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#555',
    fontSize: 14
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 4
  },
  roleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8
  },
  roleButtonActive: {
    backgroundColor: '#27ae60',
  },
  roleButtonText: {
    color: '#777',
    fontWeight: 'bold',
    fontSize: 13
  },
  roleTextActive: {
    color: '#fff'
  },
  loginLinkContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});