const div_root = document.querySelector('#root')
const div_container = document.createElement('div')
// div_container.classList.add('conteiner')
// div_container.classList.add('test')
div_container.className = 'container'

const form = document.querySelector('form')

form.onsubmit = (e) => {
    e.preventDefault()
    let form_data = new FormData(form)
    let data = Object.fromEntries(form_data)
    data.id = Date.now()
    console.log(data);
}

div_root.append(div_container)

let data = [
    {id: 1, name: 'Alex', salary: 2000},
    {id: 2, name: 'John', salary: 4000},
    {id: 3, name: 'Steven', salary: 1000},
    {id: 4, name: 'Neena', salary: 5000},
    {id: 5, name: 'Jimmy', salary: 8000},
    {id: 6, name: 'Georgy', salary: 500},
    {id: 7, name: 'Leon', salary: 999},
]

let users = JSON.parse(localStorage.getItem('users')) ?? data

function render(array) {
    for(let elem of array) {
        // Создание элем
        const div_card = document.createElement('div')
        const h2_name = document.createElement('h2')
        const h5_id = document.createElement('h5')
        const p_salary = document.createElement('p')
        const del_button = document.createElement('button')

        // Заполнение элем
        div_card.className = 'card'
        del_button.className = 'del_button'
        h2_name.innerText = elem.name
        h5_id.innerText = elem.id
        p_salary.innerText = elem.salary
        del_button.innerText = 'X'

        // Вставка элементов
        div_container.append(div_card)
        div_card.append(h2_name, h5_id, p_salary, del_button)

        del_button.onclick = () => deleteUserById(elem.id)
    }
}

// Удаление содержимого container, вызов функции render с новым массивом
function rerender(array) {
    localStorage.setItem('users', JSON.stringify(array))
    div_container.innerHTML = ''
    render(array)
}

// Удаление элемента, вызов функции rerender
function deleteUserById(id) {
    users = users.filter(elem => elem.id !== id)
    rerender(users);
}

render(users)

// Сформировались элементы, которые были сохранены в LS.
// Примечание: если записи в LS нет - тогда нужно реднерить исходный массив

