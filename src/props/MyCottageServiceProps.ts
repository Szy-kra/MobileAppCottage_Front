// Importujemy interfejs z pierwszego pliku, żeby nie powtarzać kodu [cite: 2026-02-10]
import { Cottage } from './AllCottageServiceProps';

const API_URL = "http://10.0.2.2:8080/api";

export const MyCottageService = {
  async GetMyCottages(token: string): Promise<Cottage[]> {
    try {
      const response = await fetch(`${API_URL}/Cottage/my-cottages`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Autoryzacja dla .NET 8 [cite: 2026-01-12, 2026-02-03]
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) return [];

      const data = await response.json();
      return data.map((item: any) => ({
        id: item.id,
        name: item.name || "Mój domek",
        description: item.description || "",
        price: item.price ?? 0,
        maxPersons: item.maxPersons ?? 0,
        city: item.city || "Nieznane",
        street: item.street || "",
        imageUrls: item.images ? item.images.map((img: any) => img.url) : []
      }));
    } catch (error) {
      console.error("MyCottageService Error:", error);
      return [];
    }
  }
};