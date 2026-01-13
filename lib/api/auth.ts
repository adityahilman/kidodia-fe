import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function sendOtp(email: string, orderNumber: string) {

    const response = await axios.post(`${API_URL}/auth/send-otp`, {
        email,
        order_number: orderNumber,
    });

    return response.data;
}

export async function verifyOtp(orderNumber: string, otpCode: string) {

    const response = await axios.post(`${API_URL}/auth/verify-otp`, {
        order_number: orderNumber,
        code: otpCode,
    });

    return response.data;
}