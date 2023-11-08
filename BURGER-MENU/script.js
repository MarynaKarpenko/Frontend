// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(data => console.log(data.products));

const div_root = document.querySelector('#root');
const div_product_wrapper = document.createElement('div');
div_product_wrapper.className = 'product_wrapper';
div_root.append(div_product_wrapper);


async function getProducts(){
    let url = 'https://dummyjson.com/products';
    let res  = await fetch(url);
    let data  = await res.json();
    console.log(data);
    render(data.products)
}

function render(data) {
    for(let elem of data){
        const product_card = document.createElement('div');
        const product_img = document.createElement('div');
        const p_title = document.createElement('p');
        const p_price = document.createElement('p');

        product_card.className = 'product_card';
        product_img.className = 'product_img';
        product_img.style.backgroundImage = `url(${elem.images[0]})`
        p_title.innerText = `Title: ${elem.title}`;
        p_price.innerText = `Price: ${elem.price}`;

        div_product_wrapper.append(product_card);
        product_card.append(product_img, p_title, p_price);


        product_card.onclick = () => {
            modal(elem)
        }
        
    }
}

function modal(data){
    //Model area
    const div_modal_area = document.createElement('div')
    div_modal_area.className='modal_area'
    //Model container
    const div_modal = document.createElement('div')
    div_modal.className='modal'

    const div_img_slider = document.createElement('div')    
    const div_modal_content = document.createElement('div')
    const div_modal_content_info = document.createElement('div')
    const div_modal_main_img = document.createElement('div')

    
    div_img_slider.className = 'modal_content_slider'
    div_modal_content.className = 'modal_content'
    div_modal_content_info.className = 'content_info'
    div_modal_main_img.className = 'main_img'

    div_modal_main_img.style.backgroundImage = `url(${data.images[0]})`

    div_modal.append(div_img_slider, div_modal_content)
    div_modal_content.append(div_modal_main_img,div_modal_content_info)

    for(let img of data.images){
        const img_elem = document.createElement('img')
        img_elem.src = img
        div_img_slider.append(img_elem)

        img_elem.onclick = () => {
        div_modal_main_img.style.backgroundImage = `url(${img})`
        }
    }

    const p_title = document.createElement('p')
    const p_discription = document.createElement('p')
    const p_price = document.createElement('p')
    const p_brand = document.createElement('p')

    p_title.innerText = `Title: ${data.title}`
    p_discription.innerText = `Discription: ${data.discription}`
    p_price.innerText = `Price: ${data.price}`
    p_brand.innerText = `Brand: ${data.brand}`

    div_modal_content_info.append(p_title, p_discription, p_price, p_brand)

    div_modal_area.append(div_modal)
    div_root.append(div_modal_area)

    div_modal_area.onclick = () => {
        div_modal_area.remove()
    }
    div_modal.onclick = (e) => {
        e.stopPropagation()
    }
}
getProducts()