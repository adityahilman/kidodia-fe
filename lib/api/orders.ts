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
        fullname: fullName,
        phone: phoneNumber,
        address: address,
        city: city,
        province: province,
        postal_code: postalCode
    });
    return response.data;
}

export async function getOrderDetails(orderNumber: string) {
    const response = await axios.get(`${API_URL}/orders/detail/${orderNumber}`);
    return response.data;
}

export async function getOrderSummary(orderNumber: string) {
    const response = await axios.get(`${API_URL}/orders/summary/${orderNumber}`);
    return response.data;
}

export async function updateOrderAlbumTitle(orderNumber: string, albumTitle: string) {
    const response = await axios.patch(`${API_URL}/orders/${orderNumber}`, {
        album_title: albumTitle
    });
    return response.data;
}