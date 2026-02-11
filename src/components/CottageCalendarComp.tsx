import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { CalendarProps } from '../types/BookingTypes';

// Konfiguracja języka polskiego dla kalendarza
LocaleConfig.locales['pl'] = {
  monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  monthNamesShort: ['Stycz.','Luty','Marz.','Kwiec.','Maj','Czerw.','Lip.','Sierp.','Wrz.','Paź.','List.','Grudz.'],
  dayNames: ['Niedziela','Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota'],
  dayNamesShort: ['Niedz.','Pon.','Wt.','Śr.','Czw.','Pt.','Sob.'],
  today: "Dzisiaj"
};
LocaleConfig.defaultLocale = 'pl';

const CottageCalendarComp: React.FC<CalendarProps> = ({ 
  markedStart, 
  markedEnd, 
  highlighted, 
  onSelectDate 
}) => {
  
  /**
   * Generuje obiekt zaznaczonych dat dla biblioteki react-native-calendars.
   * Używamy formatu RRRR-MM-DD.
   */
  const getMarkedDates = () => {
    let marks: any = {};
    const color = highlighted ? '#27ae60' : '#f7d940'; 
    const textColor = highlighted ? '#fff' : '#000';

    if (markedStart) {
      marks[markedStart] = { 
        startingDay: true, 
        color, 
        textColor, 
        selected: true 
      };
    }
    
    if (markedEnd) {
      marks[markedEnd] = { 
        endingDay: true, 
        color, 
        textColor, 
        selected: true 
      };
    }
    
    return marks;
  };

  return (
    <View style={styles.calendarWrapper}>
      <Calendar
        markingType={'period'}
        markedDates={getMarkedDates()}
        /**
         * KLUCZOWA POPRAWKA: Bezpieczne wywołanie funkcji.
         * Jeśli onSelectDate nie zostanie przekazane w propsach, aplikacja się nie wywali.
         */
        onDayPress={(day: any) => {
          if (typeof onSelectDate === 'function') {
            onSelectDate(day.dateString); // dateString zwraca format YYYY-MM-DD
          } else {
            console.warn("Ostrzeżenie: onSelectDate nie zostało przekazane do kalendarza!");
          }
        }}
        theme={{
          calendarBackground: 'transparent',
          textSectionTitleColor: '#f7d940',
          dayTextColor: '#fff',
          todayTextColor: '#f7d940',
          monthTextColor: '#f7d940',
          arrowColor: '#f7d940',
          textDisabledColor: '#444',
          selectedDayBackgroundColor: '#f7d940',
          // Style dla tekstu
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
        }}
        // Zablokuj możliwość wybierania dat z przeszłości
        minDate={new Date().toISOString().split('T')[0]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  calendarWrapper: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(247, 217, 64, 0.1)',
  }
});

export default CottageCalendarComp;