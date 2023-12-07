import ToDoItem from "./ToDoItem/ToDoItem"


function ToDoList(props){

    const {todos, delTodoById, changeCompletedTodo} = props

    return(
        <div>
            {todos.map(elem => <ToDoItem
                                key={elem.id}
                                id={elem.id}
                                title={elem.title}
                                completed={elem.completed}
                                delTodoById={delTodoById}
                                changeCompletedTodo={changeCompletedTodo}
                                />)}
        </div>
    )
}
export default ToDoList