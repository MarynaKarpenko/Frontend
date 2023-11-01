// proto - это сво-во, которое существует абсолютно у всех объектов
// 1) Данное сво-во содержит свойства и методы родительского класса объекта
// 2) В случае, если при вызове метода и сво-тва у объекта, окажется, что указанные сво-тва и методы у него отсутствуют
//    тогда эти методы будут искаться у родительского класса по цепочке (внутри proto), не формируя никакую вложенность
// Пример:
// let date = new Date()
// Данная запись может быть вызвана
// date.__proto__.__proto__.toString()
// На эту:
// date.toString()

// 3) У родительского класса можно в любой момент расширить/изменить набор уже указанных свой-ств через 
//    prototype
// например: (добавить новый метод массива, который будет считать абсолютную разницу первого и последнего элемента)

Array.prototype.abs = function () {
    return Math.abs(this[0] - this[this.length - 1]);
}

let array = [10,20,30,40]
let result = array.abs()
// console.log(result);

// ----------------------------
// Задача 1

// Добавьте к классу String новый метод initCap(), который будет возводить в верхний регистр первую букву, 
// а другие оставшиейся символы в нижний регистр
// Метод должен вернуть новую строку

// 'string' => 'String'
// 'STRING' => 'String'
// 'StRiNg' => 'String'

String.prototype.initCap = function(){
    return this[0].toUpperCase() + this.slice(1).toLocaleLowerCase()
}
// let str = 'string'
let str = 'StRing'
// console.log(str.initCap());


// -------------------------------
// Задача 2
// Добавьте новый метод quad() к классу Number, который будет возвращать число возведенное в 4 степень.
Number.prototype.quad = function () {
    return this ** 4
}
let num = 2;
// console.log(num.quad());


// --------------------------------
// Добавьте в класс Array новый метод avg(), который будет возвращать среднее значение 
// указанных в массиве чисел. 
// Примечание: внутри нельзя использовать методы массива


Array.prototype.avg = function () {
    let sum = 0;
    for(let elem of this){
        if(typeof elem === 'string'){
            throw Error('Elem is not number')
        }
        sum += elem;
    }
    return sum / this.length
}

let array2 = [1,2,3,4,5] 
console.log(array.avg()) //  => 3

