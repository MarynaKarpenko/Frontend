import React from 'react'
import style from './Triggers.module.css'

export default function Triggers({change_to_eng, change_to_rus}){
    return(
        <div className={style.triggers}>
            <div onClick={change_to_eng}>ENG</div>
            <div onClick={change_to_rus}>RUS</div>
        </div>
    )
        
    
}