const buttons = document.querySelectorAll("button") // querySelectorAll - находит все элименты

//  for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     if(buttons[i].id == "img") {
//       document.body.style.background = "url(./images/img1.jpeg)"
//     } else {
//       // console.log(buttons[i].id)
//     const color = buttons[i].id // в переменной color будет храниться цвет, id - принимает цвет, который указан в html
//     document.body.style.background = color
//     }
//   })
// }

buttons.forEach(function(button) {
  button.addEventListener ("click", function(){
    if (button.id == "img") {
      document.body.style.background = "url(./images/img1.jpeg)"
    } else {
      const color = button.id
      document.body.style.background = color
    }
  }) 
})
