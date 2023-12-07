import React, { useState } from "react";
import SimpleParagraph from "../simpleParagraph/SimpleParagraph";

export default function LoginForm(props) {

  const [login, setLogin] = useState('');
  const [passwd, setPasswd] = useState('');

  const [error, setError] = useState('');

  

  return (
    <div>
      <input
        value={login}
        onChange={ (event) => { setLogin(event.target.value) } }
        placeholder="Login" type="text" className="input"
      />

      <input
        value={passwd}
        onChange={ (event) => { setPasswd(event.target.value) } }
        placeholder="Password" type="password" className="input"
      />

      { error && <SimpleParagraph text={error}/> }

      <button onClick={() => {
        if (!login || !passwd) {
          setError('Fill all fields!')
        }
        else {
          setError('');
          props.setName(login)
          console.log('Form state: ', login, passwd);
        }
      }}>Enter</button>
    </div>
  );
}