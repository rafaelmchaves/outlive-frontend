export interface Product {
    id?: string;
    name: string;
    type: string;
    description: string;
    price: number;
    fraction: string;
    sellerId: string;
    status?: string;
    image?: string;
    quantity?: number
}
