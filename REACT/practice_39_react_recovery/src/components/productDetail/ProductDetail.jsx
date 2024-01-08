import React, { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"

export default function ProductDetail({id}){

    const [product, setProduct] = useState({})

    const {id} = useParams()
    const nav = useNavigate()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/PRODUCT_ID/${id}`)
            .then(response => response.json())
            .then(productData => {})
    }, [])

    return(
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.thumbnail} alt={product.title}></img>
            <div>
                <button>Add</button>
                <button>Drop</button>
            </div>
        </div>
    )
}