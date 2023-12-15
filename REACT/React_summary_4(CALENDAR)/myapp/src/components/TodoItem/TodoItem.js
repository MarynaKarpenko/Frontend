import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"
import s from "./TodoItem.module.css"
import { RxCross1 } from "react-icons/rx";

export default function TodoItem({title, id, idDay, priority}) {

    const {deleteTodo} = useContext(TodoContext)

  return (
    <div className={s.card_container}>
        <p className={s.card_p} style={{background: (+priority) ? '#1ABC9C' : '#E74C3C'}}>
            {title}
            <RxCross1 className={s.button_card} onClick={() => deleteTodo(idDay, id)}/>
        </p>
    </div>
  )
}