import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import { getProducts } from '../../api/productAPI'
import Product from '../../components/Product'
import { useLocation } from 'react-router'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [filtredProducts, setFilteredProducts] = useState([])
    const [filtredByGendre, setFilteredByGendre] = useState([])
    const [loading, setLoading] = useState(true)

    const gendreInput = useRef(null)

    const {pathname} = useLocation()

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts()
                setProducts(data)
                setFilteredProducts(data)
                setFilteredByGendre(data)
                console.log(data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching products:", error)
            }
        }
        fetchProducts()
    }, [])

    useEffect(()=>{
        if (pathname === "/hair") {
            const filtered = products.filter(product => product.category === "hair")
            setFilteredProducts(filtered)
            setFilteredByGendre(filtered)
        } else if (pathname === "/skin") {
            const filtered = products.filter(product => product.category === "skin")
            setFilteredProducts(filtered)
            setFilteredByGendre(filtered)
        } else {
            setFilteredProducts(products)
            setFilteredByGendre(products)
        }
    }, [products, pathname])

     // Removed gendreInput.current?.value from dependencies

    const handleGendreChange = () => {
        setFilteredByGendre(filtredProducts)
        console.log(gendreInput.current?.value)
        const selectedGendre = gendreInput.current?.value || "all";
        if (selectedGendre === "all") {
            setFilteredByGendre(filtredProducts)
        } else {
            console.log(filtredProducts)
            const filtered = filtredProducts.filter(product => product.gender == selectedGendre);
            setFilteredByGendre(filtered);
        }
    };

    if (loading) return <div>Loading...</div>
    if (products.length === 0) return <div>No products available</div>
    return (
        <div className='shop-container'>
            <h1>Shop</h1>
            <select ref={gendreInput} onChange={handleGendreChange}>
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
            </select>
            <div className='shop-products'>
                {filtredByGendre.map(product => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop
