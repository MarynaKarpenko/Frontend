// код пишем здесь!

class Product {
  #purchasePrice

  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.#purchasePrice = 0.9 * price;
  }

  print() {
    // console.log(`Product ${this.name}, price - ${this.price}`);
  }

  get shortName(){
    return `${this.name}, ${this.price}`;
  }
  set price(newPrice){
    console.log(`Цена товара ${this.name} меняется с price ${this.price} на ${newPrice}`);
    this.price = newPrice
  }
}
const product = new Product(1, 'Saw', 100, 'Description');
// console.log(product.shortName);

product.price = 1000;
console.log(product.newPrice);
/* 4. Пишем свойство-геттер `shortName`. Нужно сделать так,
 чтобы при обращении к свойству `shortName` объекта товара,
мы бы получали строку вида `name, price` (то есть название 
и цену товара через запятую). */

/* 5. Реализуем логику сеттера. Нужно, чтобы каждый раз, 
когда мы пытаемся изменить цену товара, в консоль 
выводилось бы сообщение "Цена товара `name` меняется с 
`price` на `newPrice`". */

class PowerTool extends Product {

  constructor(id, name, price, description, power, warranty) {
    super(id, name, price, description);
    this.power = power;
    this.warranty = warranty;
  }

  print() {
    super.print();
    // console.log(`Power: ${this.power} kW`);
  }
}

class Tool extends Product {
  constructor(id, name, price, description, strength) {
    super(id, name, price, description);
    this.strength = strength;
  }

  print() {
    super.print();
    // console.log(`Strength: ${this.strength}`);
  }
}