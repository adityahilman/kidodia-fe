import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function sendOtp(fullname: string, email: string, orderId: string) {

    const response = await axios.post(`${API_URL}/auth/send-otp`, {
        fullname,
        email,
        order_id: orderId,
    });

    return response.data;
}

export async function verifyOtp(orderId: string, otpCode: string) {

    const response = await axios.post(`${API_URL}/auth/verify-otp`, {
        order_id: orderId,
        code: otpCode,
    });

    return response.data;
}