// код пишем здесь.

async function getProducts() {
    try {
        const rest = await fetch('https://fakestoreapi.com/products')
        const jsonData = await rest.json()
        console.log(jsonData);
        throw new Error('Error from async')
    } 
    catch (err) {
        console.log(err);
    }
}

/* 3. Освежаем промисы. Написать функцию `promiseFactory`, 
которая будет создавать промисы. В аргументах она принимает 
`isSuccess`, `timeout`, `promiseResult`. Функция должна 
создать промис. Если `isSuccess = true`, то через `timeout` 
секунд промис должен быть зарезолвлен аргументом `promiseResult`.
 А если `isSuccess = false`, то через `timeout` секунд нужно 
вызвать `reject` с `promiseResult`. */

function promiseFactory(isSuccess, timeout, promiseResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isSuccess) {
                resolve(promiseResult)
            } else {
                reject(promiseResult)
            }
        }, timeout * 1000)
    })
}

async function init () {
    // Здесь мы будем работать с асинхронными (async) функциями, которые нам предстоит написать.
    
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Seccess')
        }, 3000)
    })
}
init();

const promiseResult = await myPromise
console.log(promiseResult);

/* 1. Написать асинхронную функцию, которая будет обращаться 
за списком товаров по адресу `https://fakestoreapi.com/products`, 
и выводит результат консоль. 
Использовать синтаксис async/await. */