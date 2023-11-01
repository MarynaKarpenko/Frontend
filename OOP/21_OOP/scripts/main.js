// код пишем здесь!
class Product{
    constructor(id, name, price, description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    print(){
        return `Товар ${this.name}, цена ${this.price}`;
    }
}

class PowerTool extends Product{
    constructor(id, name, price, description, power, warranty){
        super(id, name, price, description);
        this.power = power;
        this.warranty = warranty;
    }
    print(){
        super.print();
        console.log(`Power: ${this.power} kW`);
    }
}

class Tool extends Product{
    constructor(id, name, price, description, strength){
        super(id, name, price, description);
        this.strength = strength;
    }
    print(){
        super.print();
        console.log(`Name: ${this.name}, price: ${this.price}, strength: ${this.strength}`);
    } 
}

let new_product = new Product(1, 'Saw', 100, 'Description')
let new_electric_drill = new PowerTool(2, 'Electric Drill', 120, 'Powerful electric drill', 800, 2);
let new_hammer = new Tool(3, 'Hammer', 10, 'Simple hand tool', 100);

let new_product2 = new Product (4, 'Product', 300, 'Test product')
console.log(new_product2.print());

console.log(new_product.print());
console.log(new_electric_drill.print());
console.log(new_hammer.print());

