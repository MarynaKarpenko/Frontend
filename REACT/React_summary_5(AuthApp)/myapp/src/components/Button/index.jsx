import s from './Button.module.css'

export default function Button({text, color, ...otherProps}){
    return(
        <button {...otherProps} className={`${s.button_elem} ${s[color]}`}>
            {text}
        </button>
    )
}