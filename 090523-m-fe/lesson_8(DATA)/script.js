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
let date = new Date('2023-01-01 9:30:00')
date.setFullYear(2010); 
date.setMonth(8); // месяц начин с 0-январь
date.setDate(15); 

date.setHours(10); 
date.setMinutes(45); 
date.setSeconds(10); 
date.setMilliseconds(500); 
console.log(date);