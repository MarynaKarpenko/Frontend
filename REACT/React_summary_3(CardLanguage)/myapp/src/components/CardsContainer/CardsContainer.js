import React from 'react'
import CardItem from '../CardItem/CardItem'

import style from './CardsContainer.module.css'

export default function CardsContainer({words_data}){
    return(
        <div className={style.cards_container}>
            {
                words_data.map(el => <CardItem key={el.id} {...el}/>)
            }
        </div>
    )
    
}