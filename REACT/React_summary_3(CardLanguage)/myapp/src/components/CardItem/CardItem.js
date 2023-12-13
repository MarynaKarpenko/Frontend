import React from 'react';
import style from './CardItem.module.css'
import { RxCross1 } from "react-icons/rx";

export default function CardItem({id, rus, eng, language}){

    const card_text = language === 'en' ? eng : rus;

    const card_styles = {
        backgroundColor: language === 'en' ?
        '#2980B9' : 'white',
        color: language === 'en' ? 'white' : '#2980B9'
    }

    const deleteWord = event => {
        delete_word(id)
        event.stopPropogation()
    }

    return (
        <div className={style.card_item} style={card_styles}>
            <RxCross1 className={style.close_icon} onClick={deleteWord}/>
            <p>{card_text}</p>
        </div>
        
    )
}