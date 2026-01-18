import { PropertyListingProps } from "@/interfaces";

export const SAMPLE_DATA: PropertyListingProps[] = [
    {
      propertyName: "Villa Arrciffee Beach House",
      location: { street: "123 Ocean Drive", city: "Miami", country: "USA" },
      rate: 4.76,
      currency: "$",
      amount: 620,
      favorite: false
    },
    {
      propertyName: "Sunset Paradise Villa",
      location: { street: "456 Beachfront Lane", city: "Cancun", country: "Mexico" },
      rate: 4.85,
      currency: "$",
      amount: 750,
      favorite: true
    },
    {
      propertyName: "Palm Haven Villa",
      location: { street: "654 Palm Street", city: "Bali", country: "Indonesia" },
      rate: 4.88,
      currency: "$",
      amount: 1200,
      favorite: true
    }
];

export const FILTERS: string[] = [
    "Mansion", "CountrySide", "Villa", "Tropical", "New", "Amazing", "Beachfront"
];