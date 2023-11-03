// 1. При клике на burger_icon показывать скрытое меню. При повторном клике - обратно прятать его

// найти элементы burger_icon и nav_menu в документе
const burgerIcon = document.querySelector('.burger-icon')
const navMenu = document.querySelector('.nav-menu ul')

// повесить на burger_icon слушатель события click
// при клике на burger_icon у элемента nav_menu будет добавляться/пропадать класс nav_menu_active
burgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-active')
})

// CSS: для класса nav_menu_active прописать стили, которые сделают меню видимым в интерфейсе


// ДЗ
// 1. Стилизовать форму по макету

// 2. Реализовать открытие и закрытие модального окна

// найти три элемента - account, x, popup

// повесить слушатель события на account
// при клике на account к popup добавляется класс modal_active

// повесить слушатель события на x
// при клике на х у popup удаляется класс modal_active


// css: прописать стили для класса modal_active
// если класс modal_active есть, то popup виден. если класса нет - то popup невиден