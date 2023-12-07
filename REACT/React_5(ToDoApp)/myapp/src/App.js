import { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm/AddForm';
import ToDoList from './components/ToDoList/ToDoList';

function App() {

  const start_todos = [
    {id: 1, title: 'Помыть руки', completed: true},
    {id: 2, title: 'Сделать зарядку', completed: false},
    {id: 3, title: 'Наконец изучить React', completed: true}
  ]

  const [todos, setTodos] = useState(start_todos)

  const delTodoById = (id) => {
    const filtered_todos = todos.filter((elem) => elem.id !== id)
    setTodos(filtered_todos)
  }

  const changeCompletedTodo = (id) => {
    const change_todos = todos.map((elem) => {
      if(elem.id === id){
        elem.completed = !elem.completed
      }
      return elem
    })
    setTodos(change_todos)
  }

  const addTodo = (title) => {
    let new_todo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, new_todo])
  }

  return (
    <div>
      <AddForm/>
      <ToDoList todos={todos} delTodoById={delTodoById} changeCompletedTodo={changeCompletedTodo}/>
    </div>
  );
}
export default App;
