const products = [
    {
      id: 1,
      title: 'Apple',
      price: 100,
      discount: 0.2,
      image: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg'
    },
    {
      id: 2,
      title: 'Orange',
      price: 300,
      discount: 0.05,
      image: 'https://ludwigs.shop/wp-content/uploads/2022/10/orange..jpg'
    },
    {
      id: 3,
      title: 'Banana',
      price: 75,
      discount: 0.07,
      image: 'https://media.istockphoto.com/id/173242750/de/foto/bananen-bund.jpg?s=612x612&w=0&k=20&c=RgSWXG0uf14r3mBuYZ45Fww9woSJXRo0B8jFgM4XICo='
    },
    {
      id: 4,
      title: 'Kiwi',
      price: 400,
      discount: 0.3,
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Kiwi-fruits-582a07b.jpg?quality=90&resize=556,505'
    },
    {
      id: 5,
      title: 'Pineapple',
      price: 245,
      discount: 0.25,
      image: 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg'
    },
    {
      id: 6,
      title: 'Lemon',
      price: 340,
      discount: 0.1,
      image: 'https://www.starhealth.in/blog/wp-content/uploads/2022/07/Picture-of-lemons-cut-in-halves.jpg'
    }
  ]

/* // 1. Создать div.cards_container (контейнер для карточек). Поместить его в div#root.
// 2. Пройтись по массиву products и для каждого объекта в массиве создать карточку 
товара (div) с картинкой, названием, старой ценой и новой ценой. Все созданные карточки 
поместить в div.cards_container */

const div_root = document.querySelector('#root')
const div_cards_container = document.createElement('div')
div_cards_container.className = 'cards_container'

const add_product_form = document.createElement('form')
const title_input = document.createElement('input')
const price_input = document.createElement('input')
const discount_input = document.createElement('input')
const submit_btn = document.createElement('button')

title_input.type = 'text'
title_input.placeholder = 'title'
title_input.name = 'title'

price_input.type = 'number'
price_input.placeholder = 'price'
price_input.name = 'price'

discount_input.type = 'text'
discount_input.placeholder = 'discount'
discount_input.name = 'discount'

submit_btn.innerText = 'Add product'
add_product_form.append(title_input, price_input, discount_input, submit_btn)

div_root.append(add_product_form)
div_root.append(div_cards_container)


// обрабатывает сабмит формы
// event.target - ссылка на елемент с кот, происходит событие (форма)
add_product_form.addEventListener('submit', (event) => {
    event.preventDefault() // запрещает обновление стр после отпр формы
    const {title, price, discount} = event.target

    const new_product = {
        id: Date.now(),
        title: title.value,
        price: price.value,
        discount: discount.value,
        image: 'https://picsum.photos/200'
    }

    products.push(new_product)
    render_cards(products)
})

const render_cards = (arr) => {
    div_cards_container.innerText = '' // очистка контейнера от пред версии прод
    arr.forEach(elem =>{
        const div_card = document.createElement('div')
        const div_image = document.createElement('img')
        const h3_title = document.createElement('h3')
        const old_price = document.createElement('p')
        const new_price = document.createElement('p')
        const buy_btn = document.createElement('button')
    
        div_card.className = 'card_wrapper'
        div_image.className = 'card_image'
        div_image.src = elem.image
        h3_title.innerText = `Product Name: ${elem.title}`
        old_price.innerText = `Price: ${elem.price} $`
        new_price.innerText = `New price: ${elem.price - (elem.price * elem.discount)} $`
        buy_btn.innerText = 'BUY'
    
        div_cards_container.append(div_card)
        div_card.append(div_image, h3_title, old_price, new_price, buy_btn)
    
        /* 3. Стилизовать карточки. Если новая цена товара > 200, то покрасить цену в темно-фиолетовый, 
        а если меньше - в темно-зеленый */
        const new_price_value = elem.price - elem.price * elem.discount
        new_price.style.color = new_price_value > 200 ? 'darkmagenta' : 'darkgreen'
    })
}
// отрис изн мас с карт
render_cards(products)


/* 4. Создать форму (3 инпута + кнопка), которая собирает данные для свойств title, price, discount. 
При сабмите ('submit') формы из собранных данных формируется объект и добавляется в массив products */

// Пример объекта

// {
//   id: unique,
//   title: из инпута,
//   price: из инпута
//   discount: из инпута,
//   image: 'https://picsum.photos/200'
// }




 