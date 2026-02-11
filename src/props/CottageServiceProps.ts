export interface ReservationDto {
  id: number;
  startDate: string;
  endDate: string;
  isAvailable: boolean;
  cottageName?: string;
}

export interface UserProfileDto {
  email: string;
  firstName?: string;
  lastName?: string;
  isHost: boolean; // TO POLE Z TWOJEGO DTO STERUJE NAWIGACJĄ [cite: 2026-02-10]
  myCottages: CottageDto[];
  activeReservations: ReservationDto[];
  pastReservations: ReservationDto[];
}

export interface CottageDto {
  id: number;
  name: string;
  description?: string;
  price: number;
  maxPersons: number;
  street: string;
  city: string;
  postalCode: string;
  imageUrls: string[];
  bookedDates: ReservationDto[];
}

const API_URL = "http://10.0.2.2:8080/api";

export const CottageService = {
  // Symulacja pobrania profilu - docelowo z Twojego API [cite: 2026-02-03]
  async GetUserProfile(): Promise<UserProfileDto> {
    try {
      const response = await fetch(`${API_URL}/Account/Profile`);
      return await response.json();
    } catch (error) {
      // Zwracamy pusty profil z domyślnym IsHost = false
      return { 
        email: '', isHost: false, myCottages: [], 
        activeReservations: [], pastReservations: [] 
      };
    }
  }
};