// Введение в асинхронный код
// Асинхронный код - это код (или скрипт) на выполнение которого требуется n-время

// Функция setTimeout() - функция, которая формирует задержку в указанной колбек функции

// setTimeout(() => {
//     console.log(1);
// }, 3000)
// console.log(2);
// console.log(3);

// Во время выполнения скрипта, синхронная часть не будет дожидаться пока выполниться асинхронная часть
// setTimeout(() => {
//     console.log('1 блок кода');
// }, Math.random() * 200)

// setTimeout(() => {
//     console.log('2 блок кода');
// }, Math.random() * 200)

// ---------------------
// решение проблемы - вложенность
// setTimeout(() => {
//     console.log('1 блок кода');
//     let a = [1,2,3]
//     setTimeout(() => {
//         console.log('2 блок кода');
//     }, Math.random() * 200)
// }, Math.random() * 200)

// Promise 
// Promise - это объект, который является обверткой для удобной работы с асинхронным кодом
// let promise = new Promise((resolt, reject) => {
//     setTimeout(() => {
//         console.log('1 блок кода')
//         let a = [1,2,3]
//         // resolt(a)
//         reject('error!')
//     }, Math.random() * 200)
// })

// Метод then дожидается пока promise увидит выполнение функции resolt и только потом начнет выполнение
// То что мы получаем в колбеке метода then в качестве аргумента - это содержимое указанного 
// параментра функции resolve
// promise.then((a) => {
//     a.push(4)
//     console.log(2,a);
// })

// Метод catch делает тоже самое, что и then, только дожидается уже выполнения функции reject в промисе
// promise.catch((error) => {
//     console.log(error);
// })


// promise.then((a) => {
//     a.push(4)
//     console.log(2,a);
// }).catch((error) => {
//         console.log(error);
//     })


//------------------------------
let getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1 блок')
        resolve(5)
    }, Math.random() * 200)
})

getData
    .then((a) => {
        a++
        console.log(a);
        return a
    })
    .then((a) => {
        a++
        console.log(a);
    })

    getData
        .then(() => {
            return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    console.log('2 блок')
                    resolve(5)
                }, Math.random() * 200)
            })
            .then((data) => {
                console.log(data);
            })
        })