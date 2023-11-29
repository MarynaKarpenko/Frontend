import {useState} from "react"

function String(){

    const [theme, setTheme] = useState('light')

    function changeTheme(){
        setTheme(theme ==='light' ? 'dark' : 'light')
    }

    const light = {
        backgroundColor: 'gray',
        color: 'black',
    }

    const dark = {
        backgroundColor: 'darkblue',
        color: 'white',
    }

    const style = (theme === 'light') ? dark : light

    return(
        <div style={style}>
            <h1>Theme</h1>
            <h2>{theme}</h2>
            <div>
                <button onClick={changeTheme}>Change Theme</button>
            </div>
        </div>
    )
}
export default String;