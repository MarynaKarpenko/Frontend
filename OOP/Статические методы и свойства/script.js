// class Contacts{
//     constructor(phone){
//         this.phone = phone
//     }
//     // статическое свойство
//     static static_prop = 'static prop'

//     // статическтй метод
//     static staticMethod(){
//         console.log(('static method'));
//     }

//     getPhone(){
//         console.log(`phone: ${this.phone}`);
//     }
// }

// let contact = new Contacts('+4917345678')

// contact.getPhone()
// console.log(contact.phone);        // phone: +4917345678
                                      // +4917345678

// console.log(contact.static_prop);  // undefined
// console.log(Contacts.static_prop); // static prop

// Contacts.staticMethod()            // static method

// Object.assign(obj)
// Object.values()

// obj.assign()
// obj.values()

// Date.now()
// console.log(String);                 // [Function: String]

// -----------------------------------
// class Example{
//     static method(){
//         console.log(123);            // 123
//     }
// }
// Example.method()


// ----------------------------------
// Задача 1. 
// Создайте класс User, а внутри статический метод getYears(str), который по строке будет 
// опередлять текущий возсраст пользвоателя и выводить его в консоль

// User.getYears('2000') => 22
// User.getYears('2015') => 7

// class User{
//     static getYears(str){
//         console.log(2023 - str);
//     }
// }
// User.getYears('2000')                      // 23
// User.getYears('2015')                      // 8


// ------------------------------------
// Задача 2
// Напиши класс Object2 и повторите статический метод values. 
// Метод должен принимать в качестве аргумента объект, и должен возвращать массив с значениями свойств объекта
// Примечание: использовать класс Obejct в решении нельзя. 

// class Object2 {
//     static values(obj){
//         let result = []
//         for(let key in obj){
//             if (obj.hasOwnProperty(key)) {
//                 result.push(obj[key])
//             }
//         }
//         return result
//     }
// }
// console.log(Object.values({name: 'Alex', age: 10}))     // => [ 'Alex', 10 ]
// console.log(Object2.values({name: 'Alex', age: 10}))    // => [ 'Alex', 10 ]

//-----------------------------
class User{
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    get info(){
        return `Name User: ${this.name}, age: ${this.age}`
    }
    set newAge(numb){
        this.age = 2023 - numb;
    }
}
let user1 = new User('Alex', 30);
user1.newAge = 1960;
console.log(user1.info);