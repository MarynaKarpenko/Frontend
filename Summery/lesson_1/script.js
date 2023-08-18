// 1. При клике на параграф перекрашивать цвет текста в красный цвет
// и менять размер шрифта на 30px

// - Найти параграф в докум и присвоить его переменной
// - Повесить слушатель событий на эту переменную
// - При клике менять стиль

const par = document.querySelector('.par')

par.addEventListener('click', function(){
    par.style.color = 'red';
    par.style.fontSize = '30px';
});

// 2. При клике на параграф перекрашивать его в зеленый цвет и
// менять размер шрифта. При повторном клике возвращать все как было

const par2 = document.querySelector('.par2');

par2.addEventListener('click', function(){
    par2.classList.toggle('par2_styles')
})

// add() - добавить класс
// remove() - удалить класс
// toggle() - добавить класс, если его нет, или удалить, если он есть

// 3. Создать кнопку Click и параграф. При клике на кнопку у 
// параграфа меняется цвет заднего фона на зеленый и 
// увеличивается шрифт до 25px. При повторном клике на кнопку 
// все возвращаются

const click_btn = document.querySelector('.click_btn');
const par3 = document.querySelector('.par3');

click_btn.addEventListener('click', function () {
    par3.classList.toggle('par3_style')
});

// 4. Создать три параграфа. При клике на первый параграф у 
// второго менять цвет текста и цвет заднего фона. 
// При клике на второй параграф, выводить сообщение в консоль 
// - 'Произошел клик на второй параграф'. При клике на третий 
// параграф. Удалять стили у второго парграфа.

const click1 = document.querySelector('.click1');
const click2 = document.querySelector('.click2');
const click3 = document.querySelector('.click3');

click1.addEventListener('click', function () {
    click2.classList.add('click2_style')
});

click2.addEventListener('click', function () {
    console.log('Произошел клик на второй параграф');
});

click3.addEventListener('click', function () {
    click2.classList.remove('click2_style')
});

// 5. Создать кнопку Add paragraph и div. При клике на кнопку 
// в контейнер добавляется параграф с произвольным текстом

const add_text = document.querySelector('.add_text');
const text = document.querySelector('.text');

add_text.addEventListener('click', function () {
    // создать элемент
    const par = document.createElement('p');

    // добавить к эл текст
    par.innerText = 'Hello!';

    // добавить созданный эл в контейнер
    text.append(par)
})

// 6. Создать div в html-документе. Через js 
// добавить в этот div параграф красного цвета

// - найти эл
    const par_conteiner = document.querySelector('.par_conteiner');

// - создать параграф
    const par4 = document.createElement('p');

// - наполнить параграф текстом
    par4.innerText = 'Hello, Maryna'

// - покрасить цвет параграфа красным
    par4.style.color = 'red';

// - положить параграф в контейнер
    par_conteiner.append(par4);

// 7. Создать параграф с произвольным текстом в HTML. 
// Создать переменную num с любым числом в JS. 
// Если число в переменной больше 10, то покрасить цвет 
// текстав параграфе в синий, если меньше или равно 10, 
// то покрасить в зеленый 

// - найти параграф
const color_text = document.querySelector('.color_text');

// - создать переменную с любым числом
const num = 20;

// - прописать стили для парграфа через if else
if (num > 10) {
    color_text.style.color = 'blue';
} else {
    color_text.style.color = 'green';
};

// 8. Создать кнопку и параграф. При каждом клике на 
// кнопку размер шрифта в параграфе увеличивается на 5px

// - найти кнопку и парграф
const incr_btn = document.querySelector('.incr_btn');
const incr_text = document.querySelector('.incr_text');
let size = 14;

// - повесить на кнопку событие клик
// - при клике изменять fontSize параграфа на +5px
incr_btn.addEventListener('click', function () {
    size += 5;
    incr_text.style.fontSize = size + 'px';
});