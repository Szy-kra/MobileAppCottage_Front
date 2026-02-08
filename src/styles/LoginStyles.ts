import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  formatHint: {
    fontSize: 10,
    color: '#888',
    marginTop: 4,
  },
  loginButton: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#27ae60',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  footerLinksContainer: {
    alignItems: 'center',
    marginTop: 15,
  }
});