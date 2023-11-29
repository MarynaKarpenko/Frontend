import {useState} from "react"


function Counter() {

  const [count, setCount] = useState(0);

  function countHandler(){
    count++
  }

  function promtCount(){
    let promtResult = +promt()
    if(isNaN(promtResult)){
      alert('указано не число')
    } else{
      setCount(promtResult)
    }
  }

  return (
    <div>
        <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Chenge count</button>
      <button onClick={() => setCount(count + 1)}>Инкремент</button>
      <button onClick={() => setCount(count - 1)}>Дикремент</button>
      <button onClick={() => setCount(0)}>Обнулить</button>
      <button onClick={promtCount}>Конкотинация</button>
    </div>
  );
}

export default Counter;