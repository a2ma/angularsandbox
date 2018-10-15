export interface User {
    firstName: string,
    lastName: string,
    age?: number,
    address?: {
        street: string,
        city: string,
        state: string
        zip: number
    },
    image?: string
}