import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

/**
 * Interfejs zapewniający zgodność typów z .NET 8 [cite: 2026-01-12].
 */
interface IHomeStyles {
  safeArea: ViewStyle;
  overlay: ViewStyle;
  listContent: ViewStyle;
  loaderContainer: ViewStyle;
  statusText: TextStyle;
  headerText: TextStyle;
}

/**
 * Separacja stylów od logiki JSX [cite: 2026-01-11].
 */
export const styles = StyleSheet.create<IHomeStyles>({
  safeArea: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', 
  },
  listContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 40, 
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
    borderRadius: 10,
    overflow: 'hidden',
  },
  headerText: {
    color: '#f7d940',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});