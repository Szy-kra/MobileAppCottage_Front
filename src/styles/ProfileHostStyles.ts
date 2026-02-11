import { StyleSheet } from 'react-native';

export const hostStyles = StyleSheet.create({
  scrollContainer: { padding: 20 },
  mainHeader: { color: '#f7d940', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  subHeader: { color: '#fff', fontSize: 14, textAlign: 'center', marginBottom: 25, opacity: 0.8 },
  
  sectionContainer: { 
    backgroundColor: 'rgba(0,0,0,0.6)', 
    borderRadius: 15, 
    padding: 15, 
    borderWidth: 1, 
    borderColor: 'rgba(247,217,64,0.3)',
    marginBottom: 25 
  },
  sectionHeaderRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  sectionTitle: { color: '#f7d940', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase' },
  
  miniAddButton: { backgroundColor: '#f7d940', paddingHorizontal: 15, paddingVertical: 6, borderRadius: 5 },
  
  // Tabela domków
  tableRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(255,255,255,0.05)', 
    padding: 12, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  itemName: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  itemSub: { color: '#aaa', fontSize: 12, marginTop: 2 },
  
  actionButtons: { flexDirection: 'row' },
  editBtn: { backgroundColor: '#2980b9', padding: 8, borderRadius: 4, marginRight: 6 },
  deleteBtn: { backgroundColor: '#c0392b', padding: 8, borderRadius: 4 },
  btnText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },

  // Karty rezerwacji
  resCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'rgba(255,255,255,0.08)', 
    padding: 12, 
    borderRadius: 12, 
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#f7d940'
  },
  resDateBadge: { 
    backgroundColor: '#f7d940', 
    width: 55, 
    height: 55, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  resDateText: { fontSize: 20, fontWeight: 'bold', color: '#000' },
  resMonthText: { fontSize: 11, color: '#000', fontWeight: 'bold', textTransform: 'uppercase' },
  
  resInfo: { flex: 1, marginLeft: 15 },
  resCottageName: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  resGuestName: { color: '#f7d940', fontSize: 13, marginTop: 2 },
  resPeriod: { color: '#999', fontSize: 11, marginTop: 4 },
  
  cancelResBtn: {
    padding: 10,
    justifyContent: 'center'
  },
  cancelIcon: { color: '#ff4444', fontSize: 20, fontWeight: 'bold' },

  settingsDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: 'rgba(247,217,64,0.3)' },
  dividerText: { color: '#f7d940', paddingHorizontal: 10, fontSize: 12, fontWeight: 'bold' }
});