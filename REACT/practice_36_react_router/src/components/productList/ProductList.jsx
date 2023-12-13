import { useEffect, useState} from "react"

export default function ProductList(){

    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

return (
    <div>
      { products.map( elem => {
        return (
          <div key={elem.id}>
            <h4>{elem.title}</h4>
            <p>{elem.description}</p>
          </div>
        );
      })}
    </div>
  )
}