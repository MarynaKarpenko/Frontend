// let user1 = {
//     name: 'Alex',
//     age: 40,
//     sayhI: () => {
//         console.log('Hi!');
//     }
// }
// let user2 = {
//     name: 'Stiven',
//     age: 25,
//     sayhI: () => {
//         console.log('Hi!');
//     }
// }
// console.log(user1);
// console.log(user2);
// { name: 'Alex', age: 40, sayhI: [Function: sayhI] }
// { name: 'Stiven', age: 25, sayhI: [Function: sayhI] }

//--------------------------------
// Шаблонизация
// function createUser(name, age, gender) {
//     return {
//         name,
//         age,
//         gender: 'M',
//         sayHi: function() {
//             console.log(`${this.name} говорит привет!`);
//         }
//     }
// }
// let user1 = createUser('Alex', 30)
// let user2 = createUser('Steven', 25)
// let user3 = createUser('Nina', 35)
// console.log(user1);
// console.log(user2)
// { name: 'Alex', age: 30, gender: 'M', sayHi: [Function: sayHi] }
// { name: 'Steven', age: 25, gender: 'M', sayHi: [Function: sayHi] }

// user1.sayHi()
// user2.sayHi()
// user3.sayHi()
// console.log(user1);

// -----------------------------
// Class как новый тип

// class User {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayHi(){
//         console.log(`${this.name} говорит привет!`);
//     }
// }
// let user1 = new User('Alex', 30)
// let user2 = new User('Sven', 25)

// user2.sayHi()

// console.log(user1);
// console.log(user2);

// Напишите класс MathNumb, который будет внутри экземпляров формировать сво-во number с числовым значением
// Напишите метод getDuble(), который будет выводить в косноль квадрать сво-ва number.

// Задача 2
// Напишите еще один метод setQuadNumber, который бдует возводить число в 4 степень и переопределять сво-ва number

// class MathNumb {
//     constructor(number){
//         this.number = number
//     }
//     getDuble() {
//         console.log(this.number** 2);
//     }
//     setQuadNumber(){
//         this.number = this.number ** 4
//     }
// }
// let myMathNumb = new MathNumb(2)
// myMathNumb.getDuble()
// myMathNumb.setQuadNumber()
// console.log(myMathNumb);


// ---------------------------------------
// Наследование
// class Drive{
//     constructor(model, year){
//         this.model = model
//         this.year = year
//         this.speed = 0
//     }
//     driving(speed){
//         this.speed = speed
//         console.log(`${this.model} разогналась до ${this.speed} км/ч`);
//     }
//     parking(){
//         this.speed = 0
//         console.log(`${this.model} припарковалась`);
//     }
// }
// let tesla = new Drive('Tesla')
// tesla.driving(100)
// tesla.parking()
// console.log(tesla);

// -------------------------------
// Пример наследования класса Drive
// class Car extends Drive{
//     constructor(model, year){
//         super(model, year)
//         this.light = false
//     }
//     setLight(){
//         this.light = !this.light
//         console.log(`${this.light} ${this.light ? 'включила' : 'выключила'} свет`);
//     }
// }
// let bmw = new Car('BMW', 2020)
// bmw.driving(100)
// bmw.setLight()
// bmw.setLight()
// console.log(bmw);

// ---------------------------------
// Из файла Введение в классы.js скопируйте класс MathNumb и создайте новый класс, 
// который будет называться NewNumb. Новый класс должен унаследовать все сво-ва и методы, а также 
// должен определять новый метод: getSqrt(), который должен будет в консоль отобразить корень сов-ва number

// class MathNumb {
//     constructor(number){
//         this.number = number
//     }
//     getDuble() {
//         console.log(this.number** 2);
//     }
//     setQuadNumber(){
//         this.number = this.number ** 4
//     }
// }

// class NewNumb extends MathNumb {
//     constructor(number){
//         super(number)
//     }
//     getSqrt(){
//         console.log(Math.sqrt(this.number));
//     }
// }

// let myMathNumb1 = new MathNumb(2)
// let myMathNumb2 = new MathNumb(3)

// myMathNumb1.getDuble()
// myMathNumb1.setQuadNumber()
// myMathNumb2.getDuble()
// myMathNumb2.setQuadNumber()

// console.log(myMathNumb1);
// console.log(myMathNumb2);

// let myNewNumb = new NewNumb(9);

// myNewNumb.getDuble();
// myNewNumb.setQuadNumber();
// myNewNumb.getSqrt();

// console.log(myNewNumb);

// 1. Реализовать класс Car со следующими свойствами:
// name (бренд), model (модель), color, volume (объем двигателя), country (страна производства)
// Создать экземпляр класа Car

// Вывести в консоль все свойства созданного экземпляра класса (объекта)
// У экземпляра класса car_1 заменить color на red

// У экземпляра класса car_1 создать новое свойство production_year и задать значение 2010

// Реализовать метод get_info(), который выводит в консоль сообщение по шаблону: Car: brand_name (model), Color: color, Voulume: volume, Origin country: country

// Реализовать метод incr_volume(), который будет умножать значение свойства volume на переданное число

class Car {
    constructor(name, model, color, volume, country) {
        this.brand_name = name,
        this.model = model,
        this.color = color,
        this.volume = volume,
        this.country = country
    }
    get_info(){
        console.log(`Car: ${this.brand_name} (${this.model}), Color: ${this.color}, Volume: ${this.volume}, Origin Country: ${this.country}`);
    }
    double_volume() {
        this.volume = this.volume * 2
    }
    incr_volume(num){
         this.volume = this.volume * num
    }
    change_color(new_color){
    this.color = new_color
  }
}

const car_1 = new Car('Toyota', 'RAV4', 'white', 2.0, 'Japan');
const car_2 = new Car('BMW', 'XXX', 'braun', 2.5, 'Germany');

car_1.color = 'red'
car_1.prodaction_year = 2010

// console.log((car_1));
// console.log((car_2));
// console.log((car_1.brand_name));
// console.log((car_1.volume));
// console.log((car_1.color));

// car_1.get_info()
// car_2.get_info()

// car_1.double_volume()
// console.log(car_1);

// car_1.incr_volume(4)
// car_1.change_color('purple')
// console.log(car_1);
// console.log(car_2);


//------------------------------------------

// ЗАДАЧА 2
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: 
// name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
// Создать 2 экземпляра класса Worker

// Если работник проработал более 15 дней, то к его ставке применчется повышающий коэффициент 1.5
// Создать метод get_salary(), который будет возвращать сообщение в формате: NAME's salary is SALARY
// Примечание: SALARY = rate * days

// Реализуйте два метода:
// - add_days() - увеличивает кол-во дней на переданное значение
// - delete_days() - уменьшает кол-во дней на переданное значение

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name,
        this.surname = surname,
        this.rate = rate,
        this.days = days

        if(days > 15) {
            this.rate = rate *  1.5
        }else {
            this.rate = rate
        }
    }
    get_salary(){
        return(`${this.name}'s salary is ${this.rate * this.days}`)
    }
    add_days(num){
        this.days = this.days + num
    }
    delete_days(num){
        this.days = this.days - num
        this.get_salary()
    }
}

const worker_1 = new Worker('Alex', 'Gur', 200, 5)
const worker_2 = new Worker('Andry', 'Hr', 300, 20)

// console.log(worker_1);
// console.log(worker_2);


// console.log(worker_1.get_salary()); // 'Ivan's salary is 300
// console.log(worker_2.get_salary()); // 'Boris's salary is 85
worker_1.add_days(3);
console.log(worker_1);

worker_2.delete_days(3);
console.log(worker_2);