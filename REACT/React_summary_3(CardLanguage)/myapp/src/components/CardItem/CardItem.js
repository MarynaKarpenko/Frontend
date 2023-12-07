import React from 'react';
import style from './CardItem.module.css'

export default function CardItem({id, rus, eng, language}){

    const card_text = language === 'en' ? eng : rus;

    const card_styles = {
        backgroundColor: language === 'en' ?
        '#2980B9' : 'white',
        color: language === 'en' ? 'white' : '#2980B9'
    }

    return (
        <div className={style.card_item} style={card_styles}>
            {card_text}
        </div>
    )
}