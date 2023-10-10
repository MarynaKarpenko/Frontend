const root_url = 'http://158.160.60.49:3050'
const div_container = document.createElement('div')
const div_root = document.querySelector('#root')
div_container.className = 'container'
div_root.append(div_container)

// Формы
const post_form = document.querySelector('.post_form')
const delete_form = document.querySelector('.delete_form')
const update_form = document.querySelector('.update_form')

post_form.onsubmit = (event) => {
    event.preventDefault()
    // Подробнее про форм дата
    // https://learn.javascript.ru/formdata
    let form_data = new FormData(event.target)
    let data = Object.fromEntries(form_data)
    postUsers(data)
}

delete_form.onsubmit = (event) => {
    event.preventDefault()
    let form_data = new FormData(event.target)
    let id = form_data.get('id')
    deleteUser(id)
}

update_form.onsubmit = (event) => {
    event.preventDefault()
    let form_data = new FormData(event.target)
    let data = Object.fromEntries(form_data)
    
    let {id, ...user} = data
    updateUser(id, user)
}

// Сетевые запросы
function getUsers() {
    fetch(`${root_url}/users`)
        .then(res => res.json())
        .then(data => render(data))
}


function postUsers(obj){
    fetch(`${root_url}/user/create`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(obj)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            getUsers()
        })
}

function deleteUser(id){
    fetch(`${root_url}/users/${id}`, {
    method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        getUsers()
    })
}

function updateUser(id, obj) {
    fetch(`${root_url}/users/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            getUsers()
        })
}


async function getUsers() {
    let res = await fetch (`${root_url}/users`)
    let data = await res.json()
    renderTasks(data)
}



// Загрузка обновления карточек
function render(array) {
    div_container.innerHTML = ''
    for(let elem of array){
        const div_card = document.createElement('div')
        const h3_name = document.createElement('h3')
        const p_info = document.createElement('p')
        const del_btn = document.createElement('button')

        div_card.className = 'card'
        h3_name.innerText = `${elem.name} ${elem.id}`
        p_info.innerText = `${elem.age} ${elem.job_id} ${elem.salary}`
        del_btn.innerText = 'X'
        del_btn.className = 'del_btn'

        div_card.append(h3_name, p_info, del_btn)
        div_container.append(div_card)

        del_btn.onclick = () => {
            deleteUser(elem.id)
        }
    }
}
getUsers()


let obj = {
    name: 'TigranChange',
    age: 101,
    salary: 101,
    job_id: 'CHGANGE_IT'
}

fetch('http://158.160.60.49:3050/users/{}}', {
    method: 'PATCH',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(obj)
})

// Задание 1 
// Реализайте обработчик, котоырй будет после нажатия на кнопку отправить
// выводить отдельно объект с данными пользователя (с ипунта) и отдельно его ID в консоль

// Задание 2
// Реализуйте функцию для сетевого PATCH запроса, который бы по полученным данным из формы
// обновлял данные пользователя. 
// Предусмотритре обновление разметки после отправки формы