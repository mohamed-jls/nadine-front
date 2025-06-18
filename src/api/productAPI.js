import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getProducts() {
    try {
        const response = await axios.get(`${apiUrl}/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
}

export async function getProductById(productId) {
    try {
        const response = await axios.get(`${apiUrl}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching product data:", error);
        throw error;
    }
}

export async function createProduct(product) {
    try {
        const response = await axios.post(`${apiUrl}/products`, product);
        return response.data;
    } catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
}

export async function updateProduct(productId, product) {
    try {
        const response = await axios.put(`${apiUrl}/products/${productId}`, product);
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error;
    }
}

export async function deleteProduct(productId) {
    try {
        const response = await axios.delete(`${apiUrl}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
    }
}