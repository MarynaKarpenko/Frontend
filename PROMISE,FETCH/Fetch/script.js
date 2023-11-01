// fetch('https://jsonplaceholder.typicode.com/users')
// декодирование ответа от сервера
    // .then((res) => res.json())
// получение самих данных (массив)
    // .then((data) => {
    //     let filteredData = data.filter(elem => elem.id % 2 ===0)
    //     console.log(filteredData);
    // })


// Задание 1
// Задана ссылка на API постов
// https://jsonplaceholder.typicode.com/posts
// Получите массив, предварительно отфильтровав его по 
// длине сво-ва title (минимум 15 символов).
// const url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         let filtredData2 = data.filter(elem => elem.title.length >= 15)
//         console.log(filtredData2)
// })

// const url = 'https://jsonplaceholder.typicode.com/posts'
// fetch(url)
//     .then(res => res.json())
//     .then(data => render(data))

// function render(array) {
//     for (let elem of array) {
//        const h_name = document.createElement('h2')
//        h_name.innerText = elem.username
//        document.body.append(h_name)
//     }
// }

//-----------------------------------
// Методы сетевых запросов

// GET     - запрос на чтение и получение данных
// POST    - запрос на добавление данных на сервере
// DELETE  - запрос на удаление данных на сервере

//-----------------------------------
// GET запрос
function getFetchUsers() {
    const url = 'http://158.160.60.49:3050/users/'
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}
getFetchUsers()

//-----------------------------------
// POST запрос
function postFetchUsers() {
    const url = 'http://158.160.60.49:3050/user/create'

let newRow = {
    name: 'Maryna',
    age: 34,
    salary: 100000,
    job_id: 'IT'
}

fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newRow)
})
    .then(res => res.json())
    .then(data => console.log(data))
}
postFetchUsers()