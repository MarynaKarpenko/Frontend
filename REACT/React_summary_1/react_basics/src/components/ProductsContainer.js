
import React from 'react'
import ProductItem from './ProductItem'

export default function ProductsContainer() {
  return (
    <div>
        <ProductItem 
        title='Apple' 
        description='A very tasty apple' 
        price='2$' 
        country='Germany' 
        img_url='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fplant%2Fapple-fruit-and-tree&psig=AOvVaw2sheF_a_H5m4aoq-qsT6vV&ust=1700305008849000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODLlPTvyoIDFQAAAAAdAAAAABAV'/>

        <ProductItem 
        title='Banane' 
        description='A very tasty Banane' 
        price='1$' 
        country='USA' 
        img_URL=''/>

        <ProductItem title='Orange' 
        description='A very tasty Orange' 
        price='5$' 
        country='Spain' 
        img_URL=''/>

        <ProductItem 
        title='Kiwi' 
        description='A very tasty Kiwi' 
        price='3$' 
        country='Italy' 
        img_URL='https://www.google.com/url?sa=i&url=https%3A%2F%2Fde.wikipedia.org%2Fwiki%2FKiwifrucht&psig=AOvVaw0hjfhBE0DGXN8X_e7mo_HI&ust=1700305407385000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPC567LxyoIDFQAAAAAdAAAAABAF'/>
    </div>

  )
}

