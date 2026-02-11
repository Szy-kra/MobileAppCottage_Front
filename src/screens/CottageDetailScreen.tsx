import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  StyleSheet 
} from 'react-native';
import Navbar from '../components/NavbarComp';
import CottageCalendar from '../components/CottageCalendarComp';
import CottageInfoComp from '../components/CottageInfoComp'; 
import CottageImageSliderComp from '../components/CottageImageSliderComp';
import { detailStyles } from '../styles/CottageDetailStyles';

const CottageDetailScreen = ({ navigation, route }: any) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errors, setErrors] = useState<{start?: string, end?: string}>({});
  const [isReserved, setIsReserved] = useState(false);

  const cottageId = route.params?.id ? Number(route.params.id) : 0; 

  const tempImages = [
    'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg'
  ];

  const handleDateSelection = (date: string) => {
    if (isReserved) return;
    setErrors({});

    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate('');
    } else if (new Date(date) < new Date(startDate)) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  const validateDates = () => {
    let sError = '';
    let eError = '';
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(startDate)) sError = 'Format: YYYY-MM-DD';
    if (!dateRegex.test(endDate)) eError = 'Format: YYYY-MM-DD';

    if (dateRegex.test(startDate) && dateRegex.test(endDate)) {
        if (new Date(startDate) >= new Date(endDate)) {
            eError = 'Musi być po dacie OD';
        }
    }

    setErrors({ start: sError, end: eError });
    return !sError && !eError;
  };

  const handleBooking = () => {
    if (validateDates()) {
      setIsReserved(true);
      Alert.alert("Sukces", `Zarezerwowano domek #${cottageId}`);
    }
  };

  return (
    <View style={detailStyles.container}>
      {/* POPRAWKA: Nie przekazujemy onBack, aby nie psuć logiki Navbara */}
      <Navbar title="Szczegóły" />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <CottageImageSliderComp images={tempImages} />

        <View style={detailStyles.infoSection}>
          <CottageInfoComp />

          <View style={localStyles.divider} />

          <View style={{ marginVertical: 10 }}>
            <Text style={detailStyles.sectionTitle}>Rezerwacja</Text>
            
            <View style={localStyles.inputRow}>
              <View style={{ width: '48%' }}>
                <Text style={detailStyles.inputLabel}>Od:</Text>
                <TextInput 
                  style={[detailStyles.input, errors.start ? localStyles.inputError : null]} 
                  value={startDate} 
                  onChangeText={(text) => { setStartDate(text); setErrors({}); }} 
                  placeholder="RRRR-MM-DD"
                  placeholderTextColor="#555"
                  editable={!isReserved}
                />
              </View>

              <View style={{ width: '48%' }}>
                <Text style={detailStyles.inputLabel}>Do:</Text>
                <TextInput 
                  style={[detailStyles.input, errors.end ? localStyles.inputError : null]} 
                  value={endDate} 
                  onChangeText={(text) => { setEndDate(text); setErrors({}); }} 
                  placeholder="RRRR-MM-DD"
                  placeholderTextColor="#555"
                  editable={!isReserved}
                />
              </View>
            </View>
            
            {/* Przekazanie funkcji do kalendarza [cite: 2026-01-14] */}
            <CottageCalendar 
              markedStart={startDate} 
              markedEnd={endDate} 
              highlighted={isReserved}
              onSelectDate={handleDateSelection}
            />
          </View>

          <TouchableOpacity 
            style={[detailStyles.bookButton, isReserved && { backgroundColor: '#1b5e20' }]} 
            onPress={handleBooking}
            disabled={isReserved}
          >
            <Text style={detailStyles.bookButtonText}>
              {isReserved ? "ZAREZERWOWANO" : "POTWIERDŹ TERMIN"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const localStyles = StyleSheet.create({
  divider: { height: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', marginVertical: 20 },
  inputRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  inputError: { borderColor: '#ff4444', borderWidth: 1 },
  errorText: { color: '#ff4444', fontSize: 11, marginTop: 4, fontWeight: '600' }
});

export default CottageDetailScreen;