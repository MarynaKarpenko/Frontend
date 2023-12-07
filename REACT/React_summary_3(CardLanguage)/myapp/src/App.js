
import {useState} from 'react'
import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { words_data } from './data/words_data';
import Triggers from './components/Triggers/Triggers';

function App() {

  const [words, setWords] = useState(words_data);

  const change_to_eng = () => {
    setWords(words_data.map(el => ({...el, language: 'en'})))
  }

  const change_to_rus = () => {
    setWords(words_data.map(el => ({...el, language: 'ru'})))
  }

  return (
    <div>
      <CardsContainer words_data={words}/>
      <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus}/>
    </div>
  );
}

export default App;
