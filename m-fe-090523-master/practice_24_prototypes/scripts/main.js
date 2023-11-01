// код пишем здесь!

function ProductFunction(id, name, price, description) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
}

class ProductClass {

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

const independentObject = {
  property: 'value'
}

const productInstance = new ProductClass(1,'Name', 2, 'Description');
// 1. Пристрелочная задача. Нужно создать метод `containsNumbersOnly`, который будет применяться к массивам. 
// Его задача - проверить, что массив содержит только числа. Если есть хоть одно "не-число" - вернуть false. 
// Внутри метода НЕ используем методы массивов.
Array.prototype.containsNumbersOnly = function(){
  for(let elem of this){
    if(typeof elem !== 'number') return false;
  } 
  return true;
}
const array = [1,2]
console.log(array.containsNumbersOnly());

// 2. Усложняем предыдущую задачу. Нужно создать метод `containsSameType`, который должен проверить, 
// что массив содержит элементы одного типа (т.е. у элементов одинаковый результат `typeof`).

