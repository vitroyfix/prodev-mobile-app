export interface PropertyListingProps {
    propertyName: string,
    rate: number,
    currency: string,
    amount: number,
    location: { street: string, city: string, country: string },
    favorite: boolean
}