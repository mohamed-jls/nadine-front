import { useState } from "react";

function useCart(){
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item._id === product._id);
        let updatedCart;
        if (existingProduct) {
            updatedCart = cart.map(item => item._id === product._id ? {...item, quantity: item.quantity + 1} : item);
        } else {
            updatedCart = [...cart, {...product, quantity: 1}];
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item._id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const increaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item._id === productId) {
                return {...item, quantity: item.quantity + 1};
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (productId) => {
        const updatedCart = cart.map(item => {
            if (item._id === productId) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    };
}

export default useCart;