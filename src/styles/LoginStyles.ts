import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 25,
    borderRadius: 20,
    width: '100%',
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: '#3366FF',
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 5,
  },
  formatHint: {
    fontSize: 11,
    color: '#777',
    marginTop: 5,
    fontStyle: 'italic',
  },
  disabledButton: {
    backgroundColor: '#A0A0A0', // Szary kolor dla nieaktywnego przycisku
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    opacity: 0.7,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // To są te "kontenery" - po prostu style grupujące:
  footerLinksContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#3366FF',
    fontSize: 14,
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  newAccountText: {
    color: '#444',
    fontSize: 14,
  },
  registerText: {
    color: '#3366FF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});