import s from './AddForm.module.css'

export default function AddForm({addTodo, days}) {

    const formHandler = (e) => {
        e.preventDefault()
        let form_data = new FormData(e.target)
        let data = Object.fromEntries(form_data)
        data.idDay = +data.idDay
        data.priority = +data.priority
        addTodo(data)
    }

  return (
    <form className={s.forms} onSubmit={formHandler}>
        <div>
        <select name="idDay">
            {days.map((elem, ind) => <option value={ind + 1} key={ind}>{elem}</option>)}
        </select>

        <select name="priority">
            <option value={0}>Важный</option>
            <option value={1}>Не важный</option>
        </select>
        </div>

        <div className={s.input_container}>
            <input className={s.add_forms_description} name="title"></input>
        
            <input className={s.button} type="submit"></input>
        </div>
        
    </form>
  )
}