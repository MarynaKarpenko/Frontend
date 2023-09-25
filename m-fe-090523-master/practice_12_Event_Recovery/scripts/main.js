const tooltip = document.querySelector('.tooltip');
/* 1. Освежаем в памяти методы Event. На странице есть инпут с id=`nameInput`. 
Предполагается, что мы будем вводить в него имя пользователя. 
Нвам нужно сделать так, чтобы имя пользователя было не больше 12 символов. 
То есть, нужно добавить обработчик на событие `change`, и при каждом этом событии проверять длину 
введенного. Если длина равна 12 - то предотвращаем поведение по умолчанию. */

const nameInput = document.querySelector('#nameInput');

nameInput.addEventListener('keypress', (event) => {
    if (event.target.value.length > 11) {
        event.preventDefault();
    }
});

/* 2. Теперь добавим минимальную длину для нашего имени пользователя. Нам нужно при уходе 
пользователя из инпута (при событии потери фокуса - `blur`), проверять, 
введено ли в инпут значение больше 3 символов длиной. Если длина введенного в инпуте меньше 
3 символов - нам нужно:
 - применить класс `errorInput` к инпуту
 - установить на него фокус (для этого у DOMElement-ов есть метод `focus()`)*/
nameInput.addEventListener('blur', (e) => {
    if(e.target.value.length < 3) {
        e.target.classList.add('errorInput')
        e.target.focus()
    } else {
        e.target.classListremove('errorInput')
    }
})

/* 3. Работаем с событиями мыши. Нужно, чтобы при "заходе" мыши в блок `div.#bubblingBlock`, 
у этого блока становился цвет фона `yellow`, а после ухода курсора из блока - цвет фона должен 
быть обычный ('');*/
const bubblingBlock = document.querySelector('bubblingBlock')
bubblingBlock.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'yellow'
})
bubblingBlock.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = ''
})
/* 4. Работаем со всплытием событий. У нас на странице есть блок `div#bubblingBlock`. 
Нужно добавить на него обработчик клика, чтобы он при клике выводил в консоль текст 
"Кликнули по " + ID элемента, по которому кликнули.*/
bubblingBlock.addEventListener('click', (e) => {
    if(!e.defaultPrevented)
    console.log(`Clicked on ${e.target.id}`);
})
/* 5. Теперь нам нужно предотвратить отработку этого обработчика для первой кнопки. 
То есть, сделать так, чтобы при клике на первую кнопку (`button#firstButton`), 
обработчик из п.3 не отрабатывал. */
const firstButton = document.querySelector('#firstButton')
firstButton.addEventListener('click', (e) => {
    e.preventDefault()
})
