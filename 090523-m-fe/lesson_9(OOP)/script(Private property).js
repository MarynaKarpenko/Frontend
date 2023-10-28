// class User{
//     constructor(name, password){
//         this.name = name
//         this.#password = password
//     }
//     #password;
//     log(){
//         console.log(this.#password);
//     }
// }
// let user1 = new User('Alex', '1234')
// user1.log()

// -----------------------
class Card{
    constructor(nameOwner, card_num){
        this.nameOwner = nameOwner
        this.#card_num = card_num
    }
    #card_num;

    get readCard(){
        return `${this.#card_num.slice(0,4)}******${this.#card_num.slice(-2)}`
    }

    set setCard(arg){
        this.#card_num = arg
    }
}
let card1 = new Card('Alex', '4444 3333 2222')
console.log(card1.readCard);
card1.setCard = '1111 2222 3333'
console.log(card1.readCard);