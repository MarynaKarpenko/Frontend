// Свойства - аксессоры

// Метод принято считать свойством - это метод, 
// который позволяет прочитать свойство объекта


// GETTER

// 1. Обращение к геттеру происходит как к свойству
// 2. На момент инициализации гетерра - сам метод не может получать аргументы
// 3. Геттер может динамически меняться 
// 4. геттер перезаписать не возможно
// 5. return обязательно

// let pet = {
//     name: 'Sharik',
//     breed: 'Pudel',
//     nameBreedProd: `Sharik - is Pudel`,

//     get nameBreed(){
//         return `${this.name} - is ${this.breed}`
//     }
// }
// pet.name = "Dick"
// pet.breed = "Ovcharca"

// console.log(pet.nameBreed);         // Dick - is Pudel
// console.log(pet.nameBreedProd);     // Sharik - is Pudel


// ---------------------------
// Практическое применение

// let string = {
//     text: 'Some string',

//     get length(){
//         let count = 0
//         for(let el of this.text){
//             count +=1
//         }
//         return count
//     }
// }
// string.text = 'test'
// console.log(string.length);

// -------------------------------
// Задан объект obj 
// Напиши геттер, который будет хранить квадрат сво-ва num

// let obj = {
//     num: 10,
    
//     get dbl(){
//         return this.num ** 2
//     }
// }
// console.log(obj.num);
// console.log(obj.dbl);


// ------------
// ДЗ
// Задан объект obj 
// Напиши геттер logFullName(), который будет возвращать конкатенацию имени и фамилии сво-ва name

// let obj = {
//     name: {
//         full_name: 'Alex',
//         last_name: 'Wilyam',
//     }, 
//     get logFullYear(){
//         return `${this.name.full_name} ${this.name.last_name}`
//     }
// }
// console.log(obj.logFullYear);


//-------------------------------------
// SETTER
// свойство
// 1. позволяет переопределить свойство об.
// 2. сеттер должен получать только 1 арг
// 3. сеттер передается через =
// 4. в сеттере указывается процесс переопределения свойства
// let obj = {
//     number: 10,

//     set setNumber(arg){
//         let result = arg ** 2;
//         this.number = result;
//     }
// }
// obj.setNumber = 20;
// console.log(obj);


// ----------------------------------------------
// Задан объет с сво-вом numbers
// Напишите сеттер setNumbers, который в качестве аргумента будет получать СТРОКУ с элементами, которые 
// должны оказаться в массиве по следующему примеру:

// let obj = {
//     numbers: ['Один', "Два", "Три", "Четыре", "Пять"],

//     set setNumber(string){
//         this.numbers = string.split('')
//     }
// }
// obj.setNumbers = '1, 2, 3';
// obj.setNumbers = 'Велосипед Самокат Телевизор';
// console.log(obj);

// Пример
// obj.setNumbers = '1 Два 3 4 5 6 7'
// numbers: ['1', "Два", "3", "4", "5", '6','7']

// let obj = {
//     numbers: ['Одивн', "Два", "Три", "Четыре", "Пять"],
//     // set setNumers(string){
//     //     this.numbers = string.split(' ')
//     // },
//     set setNumers(string){
//         let arr = []
//         let str = ''
//         for (let char of string){
//             if (char !== ' '){
//                 if (string.lastIndexOf(char) === string.length - 1){
//                     str += char
//                     arr.push(str)
//                 } else {
//                     str += char
//                 }
//             }  else {
//                 arr.push(str)
//                 str = ''
//             }
//         }
//         this.numbers = arr
//     }
// }
// // obj.setNumers = '1 2 3'
// obj.setNumers = 'Велосипед Самокат Телевизор Тест Телефон'
// console.log(obj)


// -------------------------------------
// Задача 
// Напишите сеттер, который будет в виде строковго типа задавать значение имени и фамилии объекта

// let obj = {
//     name: 'Alex',
//     lastName: 'Willyam',

//     set setFullName(fullName){
//         const parts = fullName.split(' ');
//         if (parts.length === 2) {
//             this.name = parts[0];
//             this.lastName = parts[1];
//         } else { 

//         }
//     }
// }
// obj.setFullName = 'Steven King';
// console.log(obj);
// Пример
// obj.setFullName = 'Steven King'
// {
//     name: 'Steven',
//     lastName: 'King'
// }

let obj = {
    name: 'Alex',
    lastName: 'Willyam',

    set setFullName(str){
        let [first_name, last_name] = str.split('')
        this.name = first_name;
        this.name = last_name
    }
}
obj.setFullName = 'Steven King';
console.log(obj);