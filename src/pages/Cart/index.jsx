import React from 'react'
import useCart from '../../utils/useCart'
import CartProd from '../../components/CartProd'

const Cart = () => {

    const {cart} = useCart()

    return (
        <div className='cart'>
            {cart.map(item => (
                <CartProd key={item._id} prod={item} />
            ))}
        </div>
    )
}

export default Cart
