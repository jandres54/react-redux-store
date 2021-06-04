import React from 'react';
import { useState, useEffect} from "react";
import ProductsPage from "./ProductsPage"


// have data display in browser
// saving data to redux (storing)
// adding to a cart (retriving from redu  x)


export default function ClothingPage() {
    const [ products, setProducts ] = useState([])
    const [ form, setForm ] = useState('')
    const fetchProducts = () => {
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
      
            .then(res => res.json())
            .then((apiData) => {
                setProducts(apiData)
            })
    }
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        fetchProducts()
        
    }, [])
    console.log(products)
    return (
        <div>
            <div className="products-card">
                {products.map((productsFromCache)=> {
                    return( <ProductsPage productsFromCache={productsFromCache}/>)
                })}

            </div>
            <h1>Products</h1>
            <form onSubmit={fetchProducts}>
                <input type='text' placeholder='What item?' onChange={handleChange} value={form} name='form' /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}