import TaskItem from "./TaskItem/TaskItem"
import style from './TasksContainer.module.css'

export default function TasksContainer(){
    const tasks = [
    {
      id: 1,
      title: 'To buy bread',
      completed: true
    },
    {
      id: 2,
      title: 'To organize a zoom-neeting',
      completed: false
    },
    {
      id: 3,
      title: 'To send an email',
      completed: false
    },
    {
      id: 4,
      title: 'To prepare dinner',
      completed: true
    },
  ]
  return(
    <div className={style.tasks_container}>
        {
            tasks.map(el => <TaskItem 
                key={el.id}
                title={el.title} 
                completed={el.completed}/>)
        }
    </div>
)
}

