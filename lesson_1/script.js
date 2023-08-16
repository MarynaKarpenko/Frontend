// При отправке формы в консоле выводить значение из инпута


const form = document.querySelector("form") // Форма
const productName = document.querySelector(".product-name") // input Название
const productPrice = document.querySelector(".product-price") // input Цена
const productsContainer = document.querySelector(".products") // section с продуктами


// база данных
const products = [
    {
        name: "Iphone 12",
        price: 50000
    },
    {
        name: "Iphone 13",
        price: 60000
    },
]


form.addEventListener("submit", function(event) {
    event.preventDefault() // отмена перезагрузки страницы

    // console.log(productName.value, productPrice.value)

    const newProduct = {
        name:productName.value,
        price: Number(productPrice.value)
    }
    products.push(newProduct) // добавляем новый продукт в массив или бд
    clearInputs()
    showProducts() 
})

function clearInputs() {
    productName.value = ""
    productPrice.value = ""
}


// создать с помощью цикла for отобр разменту для каждого эл в массиве products

// for (let i = 0; i < products.length; i++) {
//     productsContainer.innerHTML += `<div class="product-card">
//                                         <p class="product-card-name">${products[i].name}</p>
//                                         <p class="product-card-price">${products[i].price}</p>
//                                     </div>`
// }


function showProducts() {
    productsContainer.innerHTML = ""
    products.forEach(function(product, index) {
        productsContainer.innerHTML += `
                <div class="product-card">
                    <p class="product-card-name">${product.name}</p>
                    <p class="product-card-price">${product.price}</p>
                    <button class="delete-btn" id=""${index}> X </button>
                </div>`
    })
    onCardHover()
    deleteProduct()
}
showProducts()


/*
    for - низкоуровневый цикл. задаем параметры для того, чтобы пройтись циклом по массиву
        инициализация, условие, шаг
    
    forEach - высокоуровневый, больше похож на человеческий язык

    array.forEach(function(item, index, array) {
        console.log(item)
    })
    метод forEach вызовет переданную коллбек функцию столько раз сколько элементов в массиве array?
        при этом функция принимает 3 параметра
        1. item - каждый элемент в массиве. первый раз функция выполнится и получит первый элемент массива
            второй раз получить второй элемент массива и т д 
        2. index - это порядковые номер элемента в массиве array[0], array[1]
        3. array - это сам массив
*/

function onCardHover() {
    const productsCards = document.querySelectorAll(".product-card")
    productsCards.forEach(function(card) {
        card.addEventListener("mouseover", function() {
            card.querySelector(".delete-btn").style.display = "block"
        })
        card.addEventListener("mouseout", function() {
            card.querySelector(".delete-btn").style.display = "none"
        })
    })
}


function deleteProduct() {
    const deleteButtons = document.querySelectorAll(".delete-btn")
    deleteButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            // console.log("удалено")
            const currentId = btn.id
            products.splice(currentId, 1)
            btn.parentElement.remove() 
        })
    })
}


/*
    splice(id, num)
    Метод splice удаляет элемент из массива по индексу
     Первым аргуемнтом принимает индекс элемента
     Вторым аргуементом принимает количество элементов, которые нужно удалить

     const names = ["Arsen", "Lana", "Vladyslav"]
     names.splice(1, 2) // ["Arsen", "Vladyslav"]

*/