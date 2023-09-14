// Механизм работы хранилища (localStorage)

// Методы объекта localStorage

// localStorage.setItem(key, data) -    запись данных под ключем key
// localStorage.getItem(key)       -    получить данные по ключу. Метод возвращает полученные данные
//                                 -   eсли улюча не сущ, то вернет null
// localStorage.clear()            -    очищает полностью все записи в LS
// localStorage.removeItem(key)    -    очищает LS только для указанного ключа



// Запись строки по ключу string
// localStorage.setItem('key', 'Hello world!')

// Чтение данных по ключу string
// let answer = localStorage.getItem('key')
// console.log(answer);


// ------------------------------------------
// Task1
// Создать кнопку, которая переключает значение localStorage из 1 в 0 и обратно.
const btn_1 = document.querySelector('.btn_elem_1')
btn_1.onclick = () => {
    // let condition = localStorage.getItem('binary') != 1
    // localStorage.setItem('binary')
    if (localStorage.getItem('binary') != 1) {
        localStorage.setItem('binary', 1)
    } else {
        localStorage.setItem('binary', 0)
    }
}


// -----------------------------------------
// Task2
// Создать форму с полем ввода. При отправке формы значение поля ввода должно сохраняться в localStorage.
const input_1 = document.querySelector('.inp_elem_1')
const btn_2 = document.querySelector('.btn_elem_2') 
const btn_3 = document.querySelector('.btn_elem_3')
const btn_4 = document.querySelector('.btn_elem_4') 

btn_2.onclick = () => {
    localStorage.setItem('data', input_1.value)
}

//------------------------------------------------------------------
// Task3
// К прошлому примеру добавить кнопку, которая считывает значение из localStorage и помещает в поле ввода.
 
btn_3.onclick = () => {
    input_1.value = localStorage.getItem('data')
}

// Task4
// Добавить кнопку, которая очищает localStorage. (только ключ input)

btn_4.onclick = () => {
    input_1.value = ''
    localStorage.removeItem('data')
}


// ------------------------------
const body = document.body
const theme_btn = document.querySelector('.theme_btn')

// Оператор нулкгого слияния
body.className = localStorage.getItem('theme') ?? 'light'


theme_btn.onclick = () => {
    body.className = (body.className === 'dark') ? 'light' : 'dark'
    localStorage.setItem('theme', (body.className !=='dark') ? 'light' : 'dark')
}


