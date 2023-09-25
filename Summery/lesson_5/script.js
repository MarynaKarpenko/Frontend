// 1. В index.html создать кнопку, при клике на которую 
// выводится сообщение 'hello, world!' в консоль
const schow_message_btn = document.querySelector('.schow_message_btn')
schow_message_btn.addEventListener('click',  () => console.log('hello, world!'))

// 2. В index.html создать кнопку, при клике на которую цвет заднего 
// фона меняется на розовый, а при повторном клике меняется обратно 
// на белый

const change_back_btn = document.querySelector('.change_back_btn')

// change_back_btn.addEventListener('click',  () => document.body.style.backgroundColor = 
// document.body.style.backgroundColor === 'pink' ? 'white' : 'pink')

change_back_btn.addEventListener('click', () => document.body.classList.toggle('back_color'))

// 3. В index.html создать кнопку и div, при клике на кнопку внутри div создается
// параграф с сообщением 'hello, world!'. Текст сообщения должен быть зеленого цвета

const create_paragraph_btn = document.querySelector('.create_paragraph_btn')
const par_container = document.querySelector('.par_container')

create_paragraph_btn.addEventListener('click', () => {
    const par = document.createElement('p')
    par.innerText = 'hello, world!'
    par.style.color = 'green'
    par_container.append(par)
})

// 4. В index.html создать кнопку и div, при клике на кнопку внутри div создается 
// параграф с сообщением 'hello, world!'. Текст сообщения должен менятся - 
// зеленый, синий, зеленый, синий и т.д.

const create_paragraph_btn_2 = document.querySelector('.create_paragraph_btn_2')
const par_container_2 = document.querySelector('.par_container_2')
let par_color = 'green'

create_paragraph_btn_2.addEventListener('click', () => {
    const par2 = document.createElement('p')
    par2.innerText = 'hello, world!'
    par2.style.color = par_color
    par_color = par_color === 'green' ? 'blue' : 'green'
    par_container_2.append(par2)
})


// 5.
const text_colors = ['red', 'yellow', 'green', 'blue', 'pink', 'black']
const create_paragraph_btn_3 = document.querySelector('.create_paragraph_btn_3')
const par_container_3 = document.querySelector('.par_container_3')

let color_index = 0

create_paragraph_btn_3.addEventListener('click', () => {
    const par3 = document.createElement('p')
    par3.innerText = 'hello, world!'
    par3.style.color = text_colors [color_index++ %text_colors.length];
    par_container_3.append(par3)
})


// 6. В index.html создать картинку и кнопку. 
// При клике на кнопку картинка меняется на другую картинку
const change_img_btn = document.querySelector('.change_img_btn')
const park_img = document.querySelector('.park_img')
change_img_btn.addEventListener('click', () => {
    park_img.setAttribute('src', './2.jpeg')
})


// change_img_btn.addEventListener('click', () => {
//     park_img.src = './2.jpeg'
// })


// 7. В index.html создать картинку и кнопку. 
// При клике на кнопку картинка меняется на другую картинку из 
// массива
const photos = ['./elepfand.jpeg', './maus.jpeg', './panda.jpeg', './tiger.jpeg']
const change_img_arr_btn = document.querySelector('.change_img_arr_btn')
const animals = document.querySelector('.animals')

let img_index = 0

change_img_arr_btn.addEventListener('click', () => {
    animals.setAttribute('src', photos[img_index++ % photos.length])
})

// 8. В index.html создать картинку и две кнопки. 
// При клике на правую кнопку картинка меняется на следующую картинку
// из массива, а при клике на левую на предыдущую из массива
const photos2 = ['./elepfand.jpeg', './maus.jpeg', './panda.jpeg', './tiger.jpeg']
const change_img_left_btn = document.querySelector('.change_img_left_btn')
const change_img_right_btn = document.querySelector('.change_img_right_btn')
const animals2 = document.querySelector('.animals2')

let img_index2 = 0

change_img_right_btn.addEventListener('click', () => {
    animals2.setAttribute('src', photos2[img_index2++ % photos2.length])
})

change_img_left_btn.addEventListener('click', () => {
    if(img_index2 === 0) {
        img_index2 = photos2.length
    }
    animals2.setAttribute('src', photos2[img_index2-- % photos2.length])
})

// 9. В index.html создать кнопку и пустой див. 
// При клике на кнопку в див добавлять картинку из массива
const create_div_btn = document.querySelector('.create_div_btn')
const img_container = document.querySelector('.img_container')

create_div_btn.addEventListener('click', () => {
    const img = document.createElement('img')
    img.src = photos2[img_index2++ % photos2.length]
    img.alt = 'picture'
    img_container.append(img)
})