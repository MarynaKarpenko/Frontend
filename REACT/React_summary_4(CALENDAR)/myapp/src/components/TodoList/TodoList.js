import TodoDay from "../TodoDay/TodoDay";
import s from './TodoList.module.css'

export default function TodoList({todos}) {
  return (
    <div className={s.content}>
        {todos.map(elem => <TodoDay
                            key={elem.idDay}
                            idDay={elem.idDay}
                            day={elem.day}
                            todoItems={elem.todoItems}
                            />
        )}
    </div>
  )
}