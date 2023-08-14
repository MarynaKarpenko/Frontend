//Правильно
let age = 25;
let user1 = "";
let $color = "";
let _size = 12;

//Неправильно
// le 1age
// let my-name

// let let = ""
// let const
// let var


// var x = 10;

// if (x >= 10) {
//     x = 20;

//     console.log(x);
// }

// console.log(x);


// let x = 10;
// {
//     let x = 20;

//     console.log(x);
// }
// console.log(x);

let rate = 29371;

function exchange() {
    let inputValue = +document.querySelector(".form__input").value;

    let result = inputValue * rate;
    console.log(result);
    
    document.querySelector(".result").innerText = `${inputValue} BTC = ${result} $`;
}

function exchangeBack() {
    let inputValue = +document.querySelector(".form__input").value;

    let result = inputValue / rate;
    console.log(result);
    
    document.querySelector(".result").innerText = `${inputValue} $ = ${result} BTC`;
}
