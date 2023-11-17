let burger_menu = document.querySelector('.burger_menu')
let navigation = document.querySelector('nav')
let setBurgerMenu = false

burger_menu.onclick = () => {
    burgerManuHandler()
}
function burgerManuHandler(){
    if(!setBurgerMenu){
        burger_menu.classList.add('active')
        navigation.classList.add('active')
    } else{
        burger_menu.classList.remove('active')
        navigation.classList.remove('active')
    }
    setBurgerMenu = !setBurgerMenu
}

window.onresize = (e) => {
    if(e.target.outerWidth > 850){
        navigation.classList.remove('active')
    } else{
        navigation.classList.add('active')
    }
}