import React from "react"

export default function LoginForm(){

    const [login, setLogin] = useState('')
    const [password, setPasswd] = useState('')
    const [error, setError] = useState('')

    return(
        <div>
            <input 
            value={login}
            onChange={(event) => {setLogin(event.target.value)}}
            placeholder="Login" type="text" className="input">
            </input>
            <input 
            value={password}
            onChange={(event) => {setPasswd(event.target.value)}}
            placeholder="Password" type="password" className="input"> 
            </input>

            {error && <SimpleParagraph text={error}/> }

            <button onClick={() => {
                if(!login || !password){
                    setError('Fill all fields')
                } else{
                    setError('')
                }
                concole.log('From state: ', login, password)
                } 
            }>Enter</button>
        </div>
    )
}