export interface User {
    firstName: string;
    lastName: string;
    email: string;
    age?: number;
    address?: {
        street: string,
        city: string,
        state: string
        zip: number
    };
    image?: string;
    isActive?: boolean;
    balance?: number;
    registered?: any;
    hide?: boolean;
}
