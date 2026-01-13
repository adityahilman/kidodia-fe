import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createInitialOrder(orderNumber: string, productSlug: string) {
    const response = await axios.post(`${API_URL}/orders/create`, {
        order_number: orderNumber,
        product_slug: productSlug
    });
    return response.data;
}

export async function updateInitialOrder(orderNumber: string, email: string, status: string) {
    const response = await axios.put(`${API_URL}/orders/create`, {
        order_number: orderNumber,
        email: email,
        status: status
    });
    return response.data;
}

export async function getOrderStatus(orderNumber: string, email: string) {
    const response = await axios.post(`${API_URL}/orders/status`, {
        order_number: orderNumber,
        email: email
    });
    return response.data;
}

export async function createOrder(
    orderNumber: string,
    fullName: string, 
    phoneNumber: string,
    address: string,
    city: string,
    province: string,
    postalCode: string
) {
    const response = await axios.put(`${API_URL}/orders/${orderNumber}`, {
        full_name: fullName,
        phone: phoneNumber,
        address: address,
        city: city,
        province: province,
        postal_code: postalCode
    });
    return response.data;
}