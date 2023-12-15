import { useEffect, useState } from 'react';
import './App.css';
import AddForm from './components/AddForm/AddForm.js'
import TodoList from './components/TodoList/TodoList.js';
import { TodoContext } from './context/TodoContext';

export default function App() {

  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]

  const initialData = JSON.parse(localStorage.getItem('todos')) || []

//   const data = [
//   {idDay: 1, day: "ПН", todoItems:[
//     {id:1, title: "Сделать немецкий", priority: 0},
//     {id:2, title: "Купить продукты", priority: 1},
//     {id:3, title: "Помыть посуду", priority: 1},
//     {id:4, title: "Сделать уборку дома", priority: 0},
//     {id:5, title: "Испечь пирог", priority: 1},
//   ]},
//   { idDay: 2, day: "ВТ", todoItems:[
//     {id:6, title: "Помыть руки", priority: 1},
//     {id:7, title: "Помыть руки", priority: 0},
//     {id:8, title: "Помыть руки", priority: 0},
//     {id:9, title: "Помыть руки", priority: 0},
//     {id:10, title: "Помыть руки", priority: 1},
//   ]},
//   {idDay: 3, day: "СР", todoItems:[
//     {id:11, title: "Выучить уроки", priority: 1},
//     {id:12, title: "Купить продукты", priority: 1},
//     {id:13, title: "Сделать английский", priority: 0},
//     {id:14, title: "Приготовить ужин", priority: 1},
//     {id:15, title: "Помыть руки", priority: 1},
//   ]},
// ]

  const [todos, setTodos] = useState(initialData)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteDay = (id) => {
    const filtredTask = todos.filter(elem => elem.idDay !== id)
    setTodos(filtredTask)
  }

  const deleteTodo = (idDay, id) => {
    const result = todos.flatMap(elem => {
      if(idDay === elem.idDay) {
        elem.todoItems = elem.todoItems.filter(elem => elem.id !== id)
      }
      return elem
    })

    const findDay = result.find(elem => elem.idDay === idDay)
    if(findDay.todoItems.length === 0){
      deleteDay(idDay)
    } else{
      setTodos(result)
    }
  }

  const addTodo = (obj) => {
    const {idDay, title, priority} = obj
    const newTodo = {
      id: Date.now(),
      title,
      priority
    }
    if(todos.some(elem => elem.idDay === idDay)){
      let changeTodos = todos.map(elem => {
        if(elem.idDay === idDay){
          elem.todoItems = [...elem.todoItems, newTodo].sort((a, b) => a.priority - b.priority)
        }
        return elem
      })
      setTodos(changeTodos)
    } else{
      const newDay = {
        idDay,
        day: days[idDay-1],
        todoItems: [newTodo]
      }
      let changeTodos = [...todos, newDay].sort((a,b) => a.idDay - b.idDay)
      setTodos(changeTodos)
    }
  }

  return (
    <div className='container_div'>
      <TodoContext.Provider value={{deleteDay, deleteTodo}}>
        <AddForm addTodo={addTodo} days={days}/>
        <TodoList todos={todos}/>
      </TodoContext.Provider>
    </div>
  )
}