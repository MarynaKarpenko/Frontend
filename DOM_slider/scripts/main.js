/* 1. Проектируем класс Slider. Он должен содержать несколько свойств:
 - текущий номер слайда (который мы показываем)
 - общее количество слайдов
 - массив слайдов */
const IMG_WIDTH = 300;

class Slider {
    #totalSlides = 0;
    #currentSlide = 0;
    #slides = [];
    #containerEl;


/* 2. Теперь делаем конструктор. Он будем принимать только 
массив с данными о слайдах (это будет массив наших товаров). 
В конструкторе, стоит инициализировать все наши приватные 
свойства - количество слайдов, текущий слайд и т.д. */

    constructor(slides){
        this.#slides = slides;
        this.#totalSlides = slides.length;
        this.#currentSlide = 0;
    }

/* 3. Делаем метод отрисовки одного слайда (`renderSlide`). 
Он будет принимать данные слайда, и создавать 
(НО не добавлять на экран), DOM-элемент с этим слайдом. 
Наш слайд - это контейнер `div.sliderCard`, 
который содержит картинку (`img`). 
Данные для ресурса картинки (атрибут src), 
берем из данных слайда, свойство `img`. */

    #renderSlide(slideData){
        const slideContainer = document.createElement('div');
        slideContainer.classList.add('sliderCard');

        const imgElement = document.createElement('img');
        imgElement.src = slideData.img;

        slideContainer.append(imgElement);

        return slideContainer;
    }
    #renderControls(container) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('controlButtonContainer');
    const btnLeft = document.createElement('button');
    const btnRight = document.createElement('button');
    btnLeft.classList.add('controlButton');
    btnRight.classList.add('controlButton');
    btnLeft.textContent = '<';
    btnRight.textContent = '>';
    buttonsContainer.append(btnLeft, btnRight);
    container.append(buttonsContainer);
  }

    slideLeft(){
        if(this.#currentSlide > 0){
            this.#currentSlide--;
        }
    }
    slideRight() {
    if (this.#currentSlide !== this.#totalSlides - 1) {
      this.#currentSlide++;
    }
    else {
      this.#currentSlide = 0;
    }
    this.#containerEl.style.left = `${ -1 * this.#currentSlide * IMG_WIDTH }px`;
  }

/* 4. Теперь делаем функцию отрисовки всего слайдера 
в какой-то DOM-узел. Пишем метод `render`, 
он будет принимать в аргументе ссылку на DOM-элемент, 
в который мы отрисуем наш слайдер. 
Нам нужно пройтись по всем слайдам, для каждого создать 
элемент (вызвать функцию `renderSlide`), 
и добавить результат в контейнер. */

    render(container){
        const innerContainer = document.createElement('div')
        innerContainer.classList.add('slideContainer')
        this.#slides.forEach(slide =>{
            innerContainer.append(this.#renderSlide(slide))
        })
        this.#containerEl = innerContainer;
        container.append(innerContainer);
    }
}