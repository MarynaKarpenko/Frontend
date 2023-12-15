import { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../context/TodoContext";
import s from "./TodoDay.module.css"
import { RxCross1 } from "react-icons/rx";

export default function TodoDay({idDay, day, todoItems}) {

    const {deleteDay} = useContext(TodoContext)

  return (
    <div className={s.todo_card}>
        <h2 className={s.day}>
            {day}
            <RxCross1 className={s.button} onClick={() => deleteDay(idDay)}/>
        </h2>
        <div className={s.new_card_cont}>
            {todoItems.map(elem => <TodoItem 
                                    key={elem.id}
                                    id={elem.id}
                                    idDay={idDay}
                                    title={elem.title}
                                    priority={elem.priority}
                                    />
            )}
        </div>
    </div>
  )
}