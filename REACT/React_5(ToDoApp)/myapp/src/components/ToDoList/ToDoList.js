import ToDoItem from "./ToDoItem/ToDoItem"


function ToDoList(props){

    const {todos, delTodoById, changeTodo} = props

    return(
        <div>
            {todos.map(elem => <ToDoItem
                                    key={elem.id}
                                    id={elem.id}
                                    title={elem.title}
                                    completed={elem.completed}
                                    delTodoById={delTodoById}
                                    changeTodo={changeTodo}
                                />)}
        </div>
    )
}
export default ToDoList