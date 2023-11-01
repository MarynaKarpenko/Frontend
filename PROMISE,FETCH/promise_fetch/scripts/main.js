// Здесь пока ничего нет.

// 1. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу 
// `https://fakestoreapi.com/products/categories` GET-запросом, и вывести в консоль результат 
// в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с 
// категориями товаров.
const url = 'https://fakestoreapi.com/products/categories'
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
})

// 2. Усложняем задачу. Нужно написать функцию `renderSelect`. Она должна:
// Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). 
// Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), 
// которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, 
// и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же, 
// но с большой буквы (т.е. надо сделать первую букву значения заглавной).
const categoriesSelect = document.querySelector('#categoriesSelect')
const renderSelect = () => {
    // запросить данные категорий
    fetch('https://fakestoreapi.com/products/categories')
        .then( resp => resp.json())
        .then( data => {
            console.log('Response data: ', data);
            // отрендерить их в селекте
            data.forEach(elem => {
                const optionEl = document.createElement('option');
                optionEl.value = elem;
                optionEl.textContent = elem.charAt(0).toUpperCase() + elem.slice(1);
                categoriesSelect.append(optionEl);
            });
        });
}




/* 3. Пишем функцию `getProducts`. В качестве аргумента, 
она принимает категорию товаров. Она должна сделать запрос 
по адресу `https://fakestoreapi.com/products/category/CATEGORY`. 
В ответ нам придет список товаров этой категории. 
Наша задача - отрендерить их в списке товаров 
(`div.productsContainer`). ВАЖНО! Список товаров перед 
рендерингом надо очистить! Товары рендерим в виде карточек, 
класс - `productCard`. */
const productsContainer = document.querySelector('#productsContainer');
function getProducts(category) {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then( resp => resp.json())
        .then( data => {
            data.forEach( product => {
                const productCard = document.createElement('div');
                productCard.classList.add('productCard');
                const title = document.createElement('h3');
                title.textContent = product.title;
                const price = document.createElement('p');
                price.textContent = product.price;
                const description = document.createElement('p');
                description.textContent = product.description;

                productCard.append(title, price, description);
                productsContainer.append(productCard);
            })
        })
}
