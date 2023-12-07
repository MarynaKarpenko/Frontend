

function AddForm(props){

    const {addTodo} = props

    // Реалзуйте процесс, который позволит вызвать функцию addTodo 
    // в случае, если будет нажата клавиша Enter внутри инпута. 
    // Функция должна получить значение инпута

    function inputHandle(e){
        if (e.key === 'Enter' && e.target.value !== '') {
            addTodo(e.target.value)
        }
    }

    return(
        <div className="input_elem">
            <input onKeyDown={inputHandle}/>
        </div>
    )
}
export default AddForm