import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './components/AddForm/AddForm';
import ToDoList from './components/ToDoList/ToDoList';

function App() {

  const start_todo = [
    {id: 1, title: 'Помыть руки', completed: true},
    {id: 2, title: 'Сделать зарядку', completed: false},
    {id: 3, title: 'Наконец изучить React', completed: true}
  ]

  const defauktState = JSON.parse(localStorage.getItem('todos')) ?? start_todo

  const [todos, setTodos] = useState(defauktState)

  const delTodoById = (id) => {
    const filtered_todos = todos.filter((elem) => elem.id !== id)
    setTodos(filtered_todos)
  }

  const changeTodo = (id) => {
    const changed_todos = todos.map(elem => {
      if (elem.id === id){
        elem.completed = !elem.completed
      }
      return elem
    })
    setTodos(changed_todos)
  }

  const addTodo = (title) => {
    let new_todo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([...todos, new_todo])
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('todos'))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  return (
    <div>
      <AddForm addTodo={addTodo}/>
      <ToDoList todos={todos} delTodoById={delTodoById} changeTodo={changeTodo}/>
    </div>
  );
}
export default App;
