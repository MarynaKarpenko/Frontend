import React from "react"
import style from "./AddCardForm.module.css"


function AddCardForm({add_new_word}){

    const addWord = event => {
    event.preventDefault();

    const { rus, eng } = event.target;

    const newWord = {
      id: Date.now(),
      rus: rus.value,
      eng: eng.value,
      language: 'en'
    }

    add_new_word(newWord);

    event.target.reset()
  }

  const change_lang = card_id => {
    // Пройти по состоянию words, взять каждый объект, проверить совпадает ли его айди с айди карточки на которую было кликнуто. 
    // И у найденной карточки изменить значение language на противоположное

    setWords(word.map(() => {
        if(el.id === card_id){
            el.language = el.language === 'ru' ? 'en' : 'ru'
        }
        return el
    }))
  }

    return(
        <form className={style.add_card_form} onSubmit={addWord}>
            <input type="text" placeholder="ENG" name="eng"></input>
            <input type="text" placeholder="RUS" name="rus"></input>
            <button>Add new word</button>
        </form>
    )
}

export default  AddCardForm
