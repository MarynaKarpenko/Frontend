import React from "react"
import style from './TaskItem.module.css'

export default function TaskItem({title, completed}){

    const status_text = completed ? 'done' : 'not done';

    return(
        <div className={style.task_item}>
            <p>Title: {title}</p>
            <p>Status: {status_text}</p>
        </div>
    )
}