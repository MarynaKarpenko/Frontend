function Description(){

    let a = 10
    let result = Math.round(Math.pow(3 + a * 10 / 10.5, 2))
    let result2 = Math.ceil(Math.random() * 100)
    let string = 'product_wrapper'

  return(
    <>
      <p className={(a === 10) ? string : 'empty'}>Цена: 200$</p>
      <p className={string}>Рейтинг: 5.5</p>    
      <p>Result Math: {result}</p>    
      <p>Random num: {result2}</p> 
      {(a > 10) ? <h1>a Больше 10</h1> : <button>а меньше или равен 10</button>}   
    </>
  )
}

export default Description

// Задание 1. 
    // Создайте очередной параграф, который будет хранить рандомное число от 1 до 100.
    // Полученное значение округлите