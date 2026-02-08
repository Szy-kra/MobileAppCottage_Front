import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderRadius: 15,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#27ae60', 
    paddingVertical: 8,
    fontSize: 16,
    color: '#2c3e50',
  },
  formatHint: {
    fontSize: 11,
    color: '#7f8c8d',
    marginTop: 5,
    fontStyle: 'italic',
  },
  loginButton: {
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footerLinksContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: '#27ae60',
    fontWeight: 'bold',
  }
});