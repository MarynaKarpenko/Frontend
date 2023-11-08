const productsContainerEl = document.querySelector('.products-container');

let productsDataSource = [];
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        productsDataSource = products;
        renderProducts(products)
    })

//     async function getProducts(){
//         const res = await fetch('https://fakestoreapi.com/products')
//         const data = await res.json()
//         productsDataSource = data
//         console.log('From async', data);
//     }
// getProducts()

function renderProduct(product) {
    const div_product_card = document.createElement('div')
    div_product_card.classList = 'product-card'

    const h3_product_title = document.createElement('h3')
    h3_product_title.classList = 'product-title'
    h3_product_title.innerText = `Title: ${product.title}`

    const p_product_description = document.createElement('p')
    p_product_description.classList = 'product-description'
    p_product_description.innerText = `Description: ${product.description}`

    const p_product_price = document.createElement('p');
    p_product_price.classList = 'product-price';
    p_product_price.innerText = `Price: ${product.price} €`

    div_product_card.append(h3_product_title, p_product_description, p_product_price)
    productsContainerEl.append(div_product_card)    
}

function renderProducts(products){
    productsContainerEl.innerHTML = '';

    products.forEach(product => {
        renderProduct(product);
    });
}

function sortProducts(sortRule, products) {
    switch(sortRule){
        case "price_desc" : {
            products.sort((a,b) => b.price - a.price)
            break
        }
        case "price_asc" : {
            products.sort((a,b) => a.price - b.price)
            break
        }
        case "title_asc" : {
            products.sort((a,b) => a.title.localeCompare(b.title))
            break
        }
        case "title_desc" : {
            products.sort((a,b) => b.title.localeCompare(a.title))
            break
        }
        default: break;
    }
}

const productsSortSelect = document.querySelector('#productsSortSelect');
productsSortSelect.addEventListener( 'change', (event) => {
  const val = event.target.value;
  sortProducts(val, productsDataSource);
  renderProducts(productsDataSource);
});