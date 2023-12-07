import {useState} from "react"

function Products(){

    const data = [
        {id: 1, title: 'Самокат', price: 3000},
        {id: 2, title: 'Велосипед', price: 5000},
        {id: 3, title: 'Ролики', price: 400},
        {id: 4, title: 'Телевизор', price: 6000},
    ]

    const [products, setProducts] = useState(data)

    function delFirstProduct(){
        // 1
        // let copy = [...products]
        // copy.shift()
        // setProducts(copy)

        //2
        // setProducts(products.filter((elem, ind) => ind !== 0))
    
        // 3
        setProducts(products.slice(1))
    }

    function delLastProduct(){
        setProducts(products.slice(0, -1))
    }

    function changePrice(){
        let changed_products = products.map(elem => ({...elem, price: Math.round(elem.price * 1.1)}))
        setProducts(changed_products)
        
    }

    function sortPrice(){
        // 1
        // let copy = [...products]
        // copy.sort((a, b) => a.price - b.price)
        // setProducts(copy)

        // 2
        // setProducts([...products].sort((a, b) => a.price - b.price))

        // 3
        setProducts(products.slice().sort((a, b) => a.price - b.price))
    }

    function delProductById(id){
        const filtered = products.filter(elem => elem.id !== id)
        setProducts(filtered)
    }

    function addNewProduct(){
        const new_product = {
        id: Date.now(),
        title: prompt('Укажите имя товара'),
        price: +prompt('Укажите стоимость')
    }
    setProducts([...products, new_product])
}

    function resetPrice(id){
        let changed_products = products.map(elem => {
            if(elem.id === id){
                elem.price = 0
            }
            return elem
        })
        set (changed_products)
    }

    return(
        <div>
            <h1>Products</h1>
            <div>
                <button onClick={delFirstProduct}>del First Product</button>
                <button onClick={delLastProduct}>del Last Product</button>
                <button onClick={changePrice}>Product + 10%</button>
                <button onClick={sortPrice}>Sort</button>
                <button onClick={addNewProduct}>Add new product</button>
            </div>
            <div>
                {products.map(elem =>
                    <div key={elem.id} onClick={() => resetPrice(elem.id)} onDoubleClick={() => delProductById(elem.id)}>
                        <h4>{elem.title}</h4>
                        <p>{elem.price}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Products;