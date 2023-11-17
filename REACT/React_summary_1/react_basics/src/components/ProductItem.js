
import React from 'react'


export default function ProductItem({title, description, price, country, img_url}) {
  return (
    <div>
        <img src={img_url} alt={title}/>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Country: {country}</p>
    </div>
  )
}

