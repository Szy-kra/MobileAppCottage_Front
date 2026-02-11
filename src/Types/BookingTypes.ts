/**
 * PROPSY DLA KALENDARZA (CottageCalendarComp)
 * markedStart - data początkowa (z pola tekstowego "Od")
 * markedEnd - data końcowa (z pola tekstowego "Do")
 * highlighted - czy rezerwacja została już zatwierdzona (zmienia kolory)
 * onSelectDate - funkcja zwrotna przekazująca klikniętą datę do ekranu nadrzędnego
 */
export interface CalendarProps {
  markedStart: string;
  markedEnd: string;
  highlighted: boolean;
  onSelectDate: (date: string) => void; 
}

/**
 * STRUKTURA DANYCH DLA SZCZEGÓŁÓW DOMKU (CottageDto)
 * Zgodna z Twoim backendem w .NET 8 [cite: 2026-02-11]
 */
export interface CottageDetailProps {
  id: number;
  name: string;
  description?: string; // string? w C#
  about?: string;       // string? w C#
  price: number;        // decimal w C#
  maxPersons: number;   // Dodano dla spójności z InfoComp
  city: string;
  street: string;
  postalCode: string;   // Dodano dla spójności z InfoComp
  imageUrls: string[];
}