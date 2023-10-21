// .reduce() - принимает колбэк-функцию и стартовое значение, возвращает аккумулированное значение

const numbers = [1,2,3,4,10,30]
const numbers_sum = numbers.reduce((acc, el) => acc + el, 0)
console.log(numbers_sum); // 50

const users = [
  {
    id: 1,
    name: 'Ivan',
    age: 28,
    salary: 1000
  },
  {
    id: 2,
    name: 'Boris',
    age: 14,
    salary: 40
  },
  {
    id: 3,
    name: 'Maria',
    age: 17,
    salary: 90
  },
  {
    id: 4,
    name: 'Irina',
    age: 46,
    salary: 1300
  }
]

const all_users_age_sum = users.reduce((acc, el) => acc + el.age, 0);
// console.log(all_users_age_sum); // 105

/* 5. Пройтись по массиву `products`, собрать объект, который содержит в качестве ключей названия товаров, 
а в качестве значений - их цены. ВАЖНО - эта задача решается методами массивов! */

const gloves = {
  productCode: 1,
  name: 'Gloves',
  price: 10,
  description: 'Gloves to deal with rough materials',
  discount: 5,
}

const shoes = {
  productCode: 2,
  name: 'Shoes',
  price: 15,
  description: 'Just the sport shoes',
}

const ball = {
  productCode: 3,
  name: 'Ball',
  price: 8,
  description: 'The ball to play basketball',
}

const jacket = {
  productCode: 4,
  name: 'Jacket',
  price: 18,
  description: 'Sport jacket to use in case of cold weather',
  discount: 10,
}

const productAdditional = {
  brand: 'Puma',
  shopId: 14
}

const products = [gloves, shoes, ball, jacket];

const price = products.reduce((acc, el) => {
  acc[el.name] = el.price
  return acc
}, {})
console.log(price); // { Gloves: 10, Shoes: 15, Ball: 8, Jacket: 18 }