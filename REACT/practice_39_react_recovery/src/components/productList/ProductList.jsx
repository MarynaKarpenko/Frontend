import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then( resp => resp.json())
      .then( data => {
        setProducts(data.products);
       } );
  }, []);

  return (
    <div>
      { products.map( elem => {
        return (
          <div key={elem.id}>
            <Link to={`${elem.id}`}> <h4>{elem.title}</h4></Link>
            <p>{elem.description}</p>
          </div>
        );
      })}
    </div>
  );
}