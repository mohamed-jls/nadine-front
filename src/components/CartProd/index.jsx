import React, { useState } from 'react'
import "./style.css"
import useCart from '../../utils/useCart'

const CartProd = ({ prod }) => {

    const {removeFromCart, increaseQuantity, decreaseQuantity} = useCart()


    const [quantity, setQuantity] = useState(prod.quantity)
    const [removed, setRemoved] = useState(false)

    const handleRemoveFromCart = () => {
        removeFromCart(prod._id)
        setRemoved(true)
    }
    const handleIncreaseQuantity = () => {
        increaseQuantity(prod._id)
        setQuantity(prev => prev + 1)
    }
    const handleDecreaseQuantity = () => {
        decreaseQuantity(prod._id)
        setQuantity(prev => prev - 1)
    }

    if (removed) return 

    return (
        <div className='cart-prod'>
            <img src={prod.image} alt="" />
            <div className="cart-prod-info">
                <h2>{prod.name}</h2>
                <p>{prod.description}</p>
                <p>${prod.price}</p>
                <button className='remove-from-cart' onClick={handleRemoveFromCart}>Remove from Cart</button>
                <div className="cart-prod-quantity">
                    <button className='increase-quantity' onClick={handleIncreaseQuantity}>+</button>
                    <span>{quantity}</span>
                    <button className='decrease-quantity' onClick={handleDecreaseQuantity}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CartProd
