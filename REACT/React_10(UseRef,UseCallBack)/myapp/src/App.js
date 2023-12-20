import './App.css';
import {useCallback, useEffect, useRef, useState} from 'react'
import Content from './components/Content';

export default function App() {

  // let ulElem

  let ulRef = useRef()
  let numbersRef = useRef()
  let hRef = useRef()

  const [numbers, setNumbers] = useState([1,2,3,4,5])
  numbersRef.current = numbers

  const handle = useCallback(() =>{
    console.log('acroll!!!');
    console.log(numbers);
  }, [])

  useEffect(() => {
    // ulElem = document.querySelector('ul')
    // ulElem.addEventListener('scroll', handle)
    ulRef.current.addEventListener('scroll', handle)
  }, [])

  const stopScroll = () => {
    // ulElem.removeEventListener('scroll', handle)
    ulRef.current.removeEventListener('scroll', handle)
  }

  const refHandle = () => {
    console.log(hRef.current.innerText);
  }
  
  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map(elem =>
          <li key={elem}>{elem}</li>
          )}
      </ul>
      <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>Добавить новый элемент</button>
      <button onClick={stopScroll}>Остановить событие</button>
      <button onClick={refHandle}>Получить в консоль ссылку на узел</button>
      <Content ref={hRef}/>
    </div>
  );
}