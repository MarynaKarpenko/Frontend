// Замыкание

function handler(arg) {
    let string = arg
    return function () {
        console.log(string)
    }
}
let func1 = handler('test')
let func2 = handler('maryna')
func1()
func2()
func1()

function creatUrl(zone) {
    return function (domen) {
        console.log(`https://${domen}.${zone}`);
    }
}
let urlCom = creatUrl('com')
let urlNet = creatUrl('net')

urlNet('example')
urlCom('google')
urlCom('amazon')

// ------------------------

// Напишите функцию power, которая будет 
// возращать функцию с математическим вычислением 
// power(n) должен в качестве аргумента указывать степень возвоедения, 
// а анонимная функция должна получить число,
// которое необходимо возвести в n степень 


// let math1 = power(2)
// console.log(math1(5))    => 25


// let math2 = power(3)
// console.log(math1(2))    => 8
function power(n) {
    return function (num) {
        console.log(num ** n);
    }
}
let double = power(2)
double(5)
double(10)
double(2)

let quad = power(4)
quad(5)
quad(10)
quad(2)

// -------------------------------------------
// Напишите функцию createPassword(pass), которая в качестве аргумента будет получать значение нового пароля
// Функция должна вернуть функцию, которая будет проверять, совпадет ли аргумент pass с тем аргмуентом.
// который будет указан в возвращаемой функции. Если пароль совпадает - возвращаемая функция должна вывести
// в консоль true, в противном случае false

// let user1 = createPass('tigran')
// user1('tigran') => true
// user1('tigr')   => false
function createPassword(pass) {
    return function (arg) {
        return pass === arg
    }
    
}
let user1 = createPassword('tigran')
let arg = createPassword('tig');
let arg2 = createPassword('tigran');
console.log(user1());
console.log(user1());

