import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getUserById(userId) {
    try {
        const response = await axios.get(`${apiUrl}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}