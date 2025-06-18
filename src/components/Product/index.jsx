import React from 'react'
import "./style.css"
import useCart from '../../utils/useCart'

const Product = ({ product }) => {

    const { addToCart } = useCart()

    const handleAddToCart = () => {
        addToCart(product)
    }

    return (
        <div className='product'>
            <img src={product.image} alt="" />
            <h2>{product.productname}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {product.gender ?
            <p className={`gender-${product.gender}`}>{product.gender}</p>
            : <><p className={`gender-men`}>men</p>
            <p className={`gender-women`}>women</p></>}
            <button onClick={handleAddToCart} className='add-to-cart'>Add to Cart</button>
        </div>
    )
}

export default Product
