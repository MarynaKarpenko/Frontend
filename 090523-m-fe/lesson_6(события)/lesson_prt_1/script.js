// События

const div_root = document.querySelector('#root')
const div_content = document.querySelector('#content')
const div_test = document.querySelector('#test')

// onclick
// div_root.onclick = () => {
//     console.log('click 1');
// }

// div_root.onclick = () => {
//     console.log('click 2');
// }

// addEventListener
// div_root.addEventListener('dblclick', () => console.log('dblclick !'))
// div_root.addEventListener('click', () => console.log('click !'))
// div_root.addEventListener('mousedown', () => console.log('mousedown !'))
// div_root.addEventListener('mouseup', () => console.log('mouseup !'))

// div_root.addEventListener('mouseover', () => console.log('навелись !'))
// div_root.addEventListener('mouseout', () => console.log('ушли с элемента !'))

// document.addEventListener('keydown', () => console.log('клавиша нажата'))

// document.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter') {
//         console.log('Enter !');
//     }
// })

// -----------------------------------
// Напишите событие, которое при комбинации клавиш shift + 'v' (внезависимости от регистра и раскалдки)
// будет в консоли передавать сообщение combo!
// document.addEventListener('keydown', (event) => {
//     if(event.code == 'KeyV' && event.shiftKey) {
//         console.log('combo !');
//     }
// })

//----------------------------

// свойство объекта Event
// document.addEventListener('click', (event) => {
//     // console.log(event.target)
//     // event.target.innerText = 'TEST!'
//     event.target.remove()
// })


// -----------------------------------
// методы объекта Event
// всплытие события
// event.stopPropagation()  - откл всплытие события
div_root.addEventListener('click', () => {
    console.log('click root!');
})

div_content.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('click content!');
})

div_test.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('click test!');
})

// ---------------------------------
// Приведение настройки браузера в дефолтное состояние
// заставляет привести настр браузера в деф состояние, 
// отключив автоманиески сформированные настройки
const input = document.querySelector('input')
const a = document.querySelector('a')
const form = document.querySelector('form')

input.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target.checked)
})
