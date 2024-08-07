import { OrderProductRequest } from "./OrderProductRequest";

export interface Order {

    customerId: string;
    addressId?: string;
    addressText?: string;
    paymentMethod: string;
    orders: OrderProductRequest[];
}