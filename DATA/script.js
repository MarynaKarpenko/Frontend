// Работа с датой.

// let date = new Date()
// let date = new Date('2023')
// console.log(date); // дата и время

// let date2 = new Date(2023,5,1,5,10,40)
// console.log(date2);

// Отсчет времени начинается с 1 января 1970 года в милисикендах
// console.log(Date.now());

// let date = new Date(1000 * 60 * 24 * 365 * 30)
// console.log(date);

// let data = new Date() // дата текущего времени
// let num = Date.now() // количество пройденных милисекунд с 1970 года до текущего момента времени
// console.log(data);
// console.log(num);

// let date = new Date('2023-01-01 9:30:00')
// console.log(date.getFullYear()); // год
// console.log(date.getMonth()); - месяц
// console.log(date.getDate()); - день месяца

// console.log(date.getHours()); - часы
// console.log(date.getMinutes()); - минуты
// console.log(date.getSeconds()); - секунды
// console.log(date.getMilliseconds()); - милисекунды

// console.log(date.getDay()); - день недели. от 0 до 6 / 0 - воскресенье, 1-понедельник

// Task
// let bt_date = new Date('1995-10-20 15:30:00')
// let date_now = new Date()
// let user_age = date_now.getFullYear() - bt_date.getFullYear()
// console.log(user_age);

//-----------------------------
// позв переопр отдельный комп.
// let date = new Date('2023-01-01 9:30:00')
// date.setFullYear(2010); 
// date.setMonth(8); // месяц начин с 0-январь
// date.setDate(15); 

// date.setHours(10); 
// date.setMinutes(45); 
// date.setSeconds(10); 
// date.setMilliseconds(500); 
// console.log(date);

// Решение 1
// function getWeekDay() {
//     let date = new Date()
//     let day_number = date.getDay()
//     if(day_number === 0) {
//         console.log('Сегодня воскресенье');
//     } else if (day_number === 1) {
//         console.log('Сегодня понедельник');
//     } else if (day_number === 2) {
//         console.log('Сегодня вторник'); 
//     } else if (day_number === 3) {
//         console.log('Сегодня cреда');
//     } else if (day_number === 4) {
//         console.log('Сегодня четверг');
//     } else if (day_number === 5) {
//         console.log('Сегодня пятница');
//     } else if (day_number === 6) {
//         console.log('Сегодня суббота');
//     }
// }

// Решение 2 (более короткое)
// function getWeekDay() {
//     let date = new Date()
//     let day_number = date.getDay()
//     let days = ['воскресенье', 'понедельник', 'вторник','cреда', 'четверг', 'пятница', 'суббота']
//     console.log(`Сегодня ${days[day_number]}`);
// }
// getWeekDay()

// -----------------------------
// Из даты в количество милисекунд
// getTime()

// let date = new Date('2023-5-10 15:30:00')
// console.log(date.getTime());
// console.log(date.getMilliseconds());

//-------------------------
// Задана дата 
// Посчитайте количество пройденных часов с указанной даты, до текущего момента времени
// let date = new Date('2023-10-10 16:00:00 GMT')
// let difference = Date.now() - date.getTime()
// let hours = difference / (1000 * 60 * 60)
// console.log((difference));
// console.log(Math.round(hours));


// -----------------------
// Задана дата 
// Посчитайте количество пройденных недель с указанной даты, до текущего момента времени
// Полученный ответ округлите по правилам математики

// let date = new Date('2023-2-30 1:00:00 GMT')
// let difference = Date.now() - date.getTime()
// let weeks = difference / (1000 * 60 * 60 * 24 * 7)
// console.log((difference));
// console.log(Math.round(weeks));


//---------------------------
// сравнение даты
// let date1 = new Date('2023-2-30 1:00:00 GMT')
// let date2 = new Date('2023-2-30 1:00:00 GMT')
// console.log(date1 === date2); //false
// console.log(date1.getTime() === date2.getTime()); // true


//------------------------------
// операции с датой
// let date1 = new Date('2023-2-30 1:00:00 GMT')
// let date2 = new Date('2023-2-30 1:00:00 GMT')
// console.log(date1 - date2);
// console.log(date1 + date2);

//-------------------------------
// из даты в строковый тип
let date = new Date('2023-2-10 1:00:00')
// console.log(date.toLocaleString()); // 10.02.2023, 01:00:00
// console.log(date.toLocaleTimeString()); // 01:00:00
// console.log(date.toLocaleDateString()); // 10.02.2023

// ------------------------------
// локализация
// console.log(date.toLocaleString('it')); // 10/2/2023, 01:00:00
console.log(date.toLocaleDateString('uk-Uk', {month: '2-digit', year: '2-digit'}));
