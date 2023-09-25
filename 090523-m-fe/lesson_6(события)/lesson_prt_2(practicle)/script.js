// Задание:
// Cоздать и застилизовать по указанному макету элементы. 
// Описать работу указанных событий

const div_root = document.querySelector('#root')

// создание ел
const div_card = document.createElement('div')
const title = document.createElement('h1')
const price = document.createElement('p')
const image = document.createElement('img')
const del_btn = document.createElement('button')
const order_btn = document.createElement('button')

// заполнение ел
div_card.className = 'card_wrapper'
image.className = 'card_image'
del_btn.className = 'del_btn'
order_btn.className = 'order_btn'

image.src = 'https://trashbox.ru/files/1560824_ad2c44/21-3.png'
title.innerText = 'Title: Iphone 10'
price.innerText = 'Price: 1000$'
del_btn.innerText = 'X'
order_btn.innerText = 'Add to Cart'

// вставка ел
div_root.append(div_card)
div_card.append(image, order_btn, title, price, del_btn)

// события 
div_card.addEventListener('click', () => {
    console.log('Product description');
})
del_btn.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Delete product');
})
order_btn.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Add to cart');
})
