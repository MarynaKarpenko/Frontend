// DOM и навигация по html

/*
    числа
    строки
    объекты (массивы) - 
        let user = {
            name: "Arsen"
        }

    main = {
        className: "main"
        innerHTML: "<h1></h1>"
        style: {
            backgroundColor: "red"
        }
    }    
*/

/*
    querySelector() - поиск первого элемента по селектру
    querySelectorAll() - поиск всех элемента по селектру

        функция
     function querySelector() {
        console.log("Hello")
    }

        метод
         let user = {
            kez: value,
            greeting: function() {
                console.log("hello")
            }
         }

         селектор - выбор из html
             1. по тегу - h1, header, main {}
            2. по классу - .item, .user
            3. id - #
*/


// поиск по тегу
// const title = document.querySelector("h1");
// console.log(title.innerText); // "Hello World"
// title.innerText = "Hello Arsen"


/*
             innerText - свойство получить или назначить, хранит текст внутри тега
        title = {
            innerText: "Hello World"
        }

        let user {
            name: "Arsen"
        }        user.name
*/


// поиск по классу
// const descr = document.querySelector(".descr");
// console.log(descr);


// Task 1.

// a) найти тег ссылки на Google
// const googlelink = document.querySelector("main a"); // вложеный селектор
// console.log(googlelink.innerText);

// поменять текст внутри ссылки google на "Facebook"
// googlelink.innerText = "Facebook"

// b) найти тег с классом footer
// const footerText = document.querySelector(".footer");
// console.log(footerText.innerText);

// Поменять текст внутри тега с классом footer на Hello
// footerText.innerText = "Hello"

// c) найти заголовок в main
// const title1 = document.querySelector("h2");
// console.log(title1.innerText);

// Поменять текст внутри h2 на TITLE
// title1.innerText = "TITLE"


// добавить к тексту внутри h1. "Это мой первый заголовок"
// const title = document.querySelector("h1")
// title.innerText += " Это мой первый заголовок" // title.innerText = title.innerText + " Это мой первый заголовок"

/*
        title.innerText = title.innerText + " Это мой первый заголовок"
    let number = 10
        number + 5
    number = number + 5 первый вариант записи
    number += 5 аналогичная строка, второй вариант записи

    number = number + 1
    number += 1
    number++ - инкремент
*/


// querySelectorAll() - поиск всех элемента по селектру
// const texts = document.querySelectorAll("p")
// console.log(texts)

// Задача. Поменять текст во всех тегах p на "Привет. Как дела?"
// способ вручную
// const texts = document.querySelectorAll("p")
// texts[0].innerText = "Привет. Как дела?"
// texts[1].innerText = "Привет. Как дела?"
// texts[2].innerText = "Привет. Как дела?"

// код используя цикл

// const texts = document.querySelectorAll("p")
// for (let i = 0; i < texts.length; i++) {
//     // console.log(texts[i]) // отобр каждый эл массива
//     texts[i].innerText = "Привет. Как дела?"
// }

/*
    nodeList.length - длина списка или количество найденных элементов
*/


/*
        getAttribute() - медот, для получения значения атрибута
            attr - назв антр кот хотим получить
        setAttribute() - медот, для назначения атрибута
            attr - название атрибута, значение которого мы хотим изменить
            value - значение, на которое хотим поменять
*/

// Поменять текст у тега googlelink на и поменять ссылку

// const googleLink = document.querySelector("main a")
// googleLink.innerText = "Facebook"
// googleLink.setAttribute("href", "https://fb.com")
// const href = googleLink.getAttribute("href")
// console.log(href)


// Task. Поменять у всех ссылок текст на Instagram
// Ссылку у всех тегов поменять на https://instagram.com
const googleLink = document.querySelectorAll("a")
for (let i = 0; i < googleLink.length; i++) {
    googleLink[i].innerText = "Instagram"
    googleLink[i].setAttribute("href", "https://instagram.com")
}
