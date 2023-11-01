/*
    .forEach() - еще один способ выполнить операцию для каждого элемента массива, но
        без явного описания цикла, как было в for
    позволяет применить коллбек-функцию ко всем элементам массива.
    
    forEach(item, index, arr) принимает три аргумента
        1. item - каждый элемент массива, текущий элемент; (array[i]) - каждый элемент массива в for
        2. index -  индекс текущего элемента
        3. arr - сам массив, над которым выполняем действия
*/


// Есть массив names, нужно отобразить каждый элемент массива в консоли

const names = ["Arsen", "Bogdan", "Aliaksei", "Botirjon"]

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// 2 способ. отобр при помощи forEach()

names.forEach(function(name) {
    console.log(name);
})


// Есть массив чисел numbers. FOREACH

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// вывести в консоли
// а) вывести числа больше 60 
// б) квадрат каждого числа

numbers.forEach(function(number) {
    if (number > 60) {
        console.log(number);
    } 
    console.log(number ** 2);
})

