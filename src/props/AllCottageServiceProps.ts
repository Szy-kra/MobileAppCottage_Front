// 1. DTO dla Rezerwacji (ReservationDto.cs)
export interface ReservationDto {
  id: number;
  startDate: string; 
  endDate: string;
  cottageId: number;
}

// 2. DTO dla tworzenia kontaktu (ContactDetailsCreateDto.cs)
export interface ContactDetailsCreateDto {
  price: number;
  maxPersons: number;
  street: string;
  city: string;
  postalCode: string;
}

// 3. DTO dla tworzenia domku (CottageCreateDto.cs)
export interface CottageCreateDto {
  name: string;
  description?: string;
  contactDetails: ContactDetailsCreateDto;
}

// 4. Główny model domku (CottageDto.cs)
export interface Cottage {
  id: number;
  name: string;
  description?: string;
  about?: string;
  price: number;
  maxPersons: number;
  street: string;
  city: string;
  postalCode: string;
  encodedName?: string;
  imageUrls: string[];
  bookedDates: ReservationDto[]; 
}

// 5. Model dla obrazka (CottageImage.cs)
export interface CottageImage {
    id: number;
    url: string;
    cottageId: number;
}

const API_URL = "http://10.0.2.2:8080/api"; 

/**
 * Mapowanie danych z API na interfejs frontendowy.
 * Zabezpiecza przed nullami i różnicami w nazwach (np. images vs imageUrls)
 */
const mapItemToCottage = (item: any): Cottage => ({
  id: item.id,
  name: item.name || "Bez nazwy",
  description: item.description || "",
  about: item.about || "", 
  price: item.price ?? 0,
  maxPersons: item.maxPersons ?? 0,
  city: item.city || "Nieznane",
  street: item.street || "",
  postalCode: item.postalCode || "",
  encodedName: item.encodedName || "",
  imageUrls: item.images 
    ? item.images.map((img: any) => img.url) 
    : (Array.isArray(item.imageUrls) ? item.imageUrls : []),
  bookedDates: Array.isArray(item.bookedDates) 
    ? item.bookedDates 
    : (Array.isArray(item.reservations) ? item.reservations : [])
});

export const AllCottageService = {
  /** Pobiera listę wszystkich domków */
  async GetAll(): Promise<Cottage[]> {
    try {
      const response = await fetch(`${API_URL}/Cottage`);
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      return data.map((item: any) => mapItemToCottage(item));
    } catch (error) {
      console.error("GetAll Error:", error);
      return []; 
    }
  },

  /** Pobiera jeden domek po ID */
  async GetById(id: number): Promise<Cottage | null> {
    try {
      const response = await fetch(`${API_URL}/Cottage/${id}`);
      if (!response.ok) throw new Error(`Błąd: ${response.status}`);
      const data = await response.json();
      return mapItemToCottage(data);
    } catch (error) {
      console.error("GetById Error:", error);
      return null;
    }
  },

  /** Tworzy nowy domek (zgodnie z CottageCreateDto) */
  async Create(newCottage: CottageCreateDto): Promise<boolean> {
    try {
      const response = await fetch(`${API_URL}/Cottage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCottage)
      });
      return response.ok;
    } catch (error) {
      console.error("Create Error:", error);
      return false;
    }
  }
};