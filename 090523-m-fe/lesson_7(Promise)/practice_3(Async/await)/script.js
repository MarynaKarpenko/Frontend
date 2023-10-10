async function getUser() {
    let url = 'http://158.160.60.49:3050/users'
    let res = await fetch(url)
    let data = await res.json()
    console.log(data);
}
getUser()

// Пример, когда на 44 строчки кода сформирована ошибка и выполнение далее скрипта прекращается
// console.log('test!')

// let b = a + 10

// console.log('Done!')

// -------------------
// Пример обработки ошибки
// Блок try ссылается на код, который может быть выполнен с ошибкой
// Если блок try зафксирует ошибку, тогда выполнится тело блока catch
// И далее выполнение скрипта продолжится

// console.log('test!')

// try {
//     let b = a + 10
//     console.log(b)
// } catch{
//     console.log('зафиксирована ошибка!')
// }

// console.log('Done!')