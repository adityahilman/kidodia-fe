export default function imagekitAuth() {
    const authenticator = async () => {
        try {
            // Perform the request to the upload authentication endpoint.
            const response = await fetch("/api/imagekit/auth");
            if (!response.ok) {
                // If the server response is not successful, extract the error text for debugging.
                const errorText = await response.text();
                throw new Error(`Request failed with status ${response.status}: ${errorText}`);
            }

            // Parse and destructure the response JSON for upload credentials.
            const data = await response.json();
            console.log("Authentication response data:", data);
            const { signature, expire, token, publicKey } = data;
            return { signature, expire, token, publicKey };
        } catch (error) {
            // Log the original error for debugging before rethrowing a new error.
            console.error("Authentication error:", error);
            throw new Error("Authentication request failed");
        }
    };
    return authenticator;
}