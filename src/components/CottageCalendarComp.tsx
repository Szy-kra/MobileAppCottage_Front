import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CottageCalendar = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View style={calStyles.container}>
      <Text style={calStyles.monthTitle}>Styczeń 2026</Text>
      <View style={calStyles.grid}>
        {days.map(day => (
          <TouchableOpacity key={day} style={calStyles.dayBox}>
            <Text style={calStyles.dayText}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const calStyles = StyleSheet.create({
  container: { backgroundColor: '#fff', borderRadius: 15, padding: 15, marginTop: 10 },
  monthTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
  dayBox: { width: '14%', height: 40, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#eee' },
  dayText: { fontSize: 14, color: '#333' }
});

export default CottageCalendar;