
import {useState} from 'react'
import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { words_data } from './data/words_data';
import Triggers from './components/Triggers/Triggers';
import AddCardForm from './components/AddCardForm/AddCardForm';

function App() {

  const [words, setWords] = useState(words_data);

  const change_to_eng = () => {
    setWords(words_data.map(el => ({...el, language: 'en'})))
  }

  const change_to_rus = () => {
    setWords(words_data.map(el => ({...el, language: 'ru'})))
  }

  
  const add_new_word = new_word => {
    setWords([...words, new_word])
  }

  const delete_word = id => {
    // В setWords передать отфильтрованный массив => сравнить айди элемента в массиве с айди карточки, на крестик которой было кликнуто
    setWords(words.filter(el => el.id !== card_id))
  }

  return (
    <div>
      <AddCardForm add_new_word={add_new_word}/>
      <CardsContainer words_data={words} delete_word={delete_word}/>
      <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus}/>
    </div>
  );
}

export default App;
