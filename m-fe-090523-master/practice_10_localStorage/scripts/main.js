const testObejct = {
    firstProperty: 'This is my first property',
    secondProperty: 'The second one',
    composedProperty: {
        firstPart: 'First part',
        secondPart: 'The second part'
    }
}

/* 1. Пристрелочная задача. Освежаем в памяти сериализацию/десериализацию объектов, 
и обработчики событий. В файле `main.js` есть объект `testObject`, 
который содержит поля. Задача - его сериализовать и записать в `localStorage`, 
с ключом `testObject`. */
localStorage.setItem('testObject', JSON.stringify(testObejct))

/* 2. В разметке есть кнопка `testButton`, у нее есть ID. Добавляем обработчик события на эту кнопку. 
При клике нужно:
 - достать из `localStorage` значение по ключу `testObject`.
 - десериализовать его
 - вывести результат десериализации в консоль
 - вывести в консоль значение свойства `firstProperty` десериализованного объекта. */
 const testButton = document.querySelector('#saveTestObjectBtn')
 testButton.addEventListener('click', (event) => {
    const serializedObject = localStorage.getItem('testObject')
    const deserialized = JSON.parse(serializedObject)
    console.log(deserialized);
    console.log(deserialized.firstProperty);
 })

/* 3. Обеспечить сохранение данных всех инпутов в блоке "Блок для второй задачи". У блока есть ID: `inputsBlock`. 
В блоке есть несколько инпутов. У каждого инпута есть свой ID.
 - Написать функцию `saveInputsData`, которая будет запоминать все значения инпутов в `localStorage`. Функция должна создать объект, 
 в который запишет значения всех инпутов в блоке, при этом в качестве ключей используем идентификаторы (ID). 
 И этот объект записать в `localStorage`. Эта функция должна вызываться при клике на кнопку "Сохранить".
  - Далее написать функцию `restoreInputsData` - она должна восстановить значения в инпутах из `localStorage`. 
  Эта функция должна вызываться при клике на кнопку "Восстановить".
  - написать функцию `clearInputsData` - очистка объекта с данными инпутов в `localStorage`. Вызывается при клике на кнопку 
  "Очистить". */
  function saveInputsData() {
    // найти в ДОМ-дереве наш блок #inputsBlock
    // пройтись по ВСЕМ инпутам именно этого блока querySelectorAll
    // записать в localStorage объект, который будет содержать в качестве ключей ID этих инпутов, а в качестве значений - значения.
    let inputsData = {};

    const inputsBlock = document.querySelector('#inputsBlock');
    const inputsInBlock = inputsBlock.querySelectorAll('input');
    inputsInBlock.forEach( item => {
        inputsData[item.id] = item.value;
    });
  //   for (let i = 0; i < inputsInBlock.length; i++) {
  //     inputsData[inputsInBlock[i].id] = inputsInBlock[i].value
  // }
  localStorage.setItem('inputsData', JSON.stringify(inputsData))
}

// const myVar = 'myKey';
// testObejct.myVar = "myValue"; // testObject = { myVar: "myValue"}
// testObejct[myVar] = "myValue"; // testObject = { myKey: "myValue" }

const ball = {
    id: 1,
    name: "Ball",
    category: "Sport",
    img: "./assets/ball.jpeg",
    price: 100
  };
  const gloves = {
    id: 2,
    name: "Gloves",
    category: "Sport",
    img: "./assets/gloves.jpg",
    price: 140
  };
  const shoes = {
    id: 3,
    name: "Sport shoes",
    category: "Sport",
    discount: true,
    img: "./assets/shoes.png",
    price: 320
  };
  const hammer = {
    id: 4,
    name: "Hammer",
    category: "Tools",
    img: "./assets/hammer.jpeg",
    price: 40
  };
  const saw = {
    id: 5,
    name: "Saw",
    category: "Tools",
    discount: true,
    img: "./assets/saw.jpeg",
    price: 75
  };
  const shark = {
    id: 6,
    name: "Shark toy",
    category: "Other",
    img: "./assets/shark.jpeg",
    price: 45
  };

  // Массив объектов
  let products = [ball, gloves, shoes, hammer, saw, shark];
