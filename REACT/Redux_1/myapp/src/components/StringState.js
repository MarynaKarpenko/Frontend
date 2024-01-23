import { useDispatch, useSelector } from "react-redux"
import { initAction, lowerAction, setStringAction, upperAction } from "./store/stringReducer"

export default function StringState(){

    const string = useSelector((store) => store.string)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>String</h2>
            <h3>{string}</h3>
            <div>
                <button onClick={() => dispatch(upperAction())}>Upper Case</button>
                <button onClick={() => dispatch(lowerAction())}>Lower Case</button>
                <button onClick={() => dispatch(setStringAction(prompt()))}>Set string</button>
                <button onClick={() => dispatch(initAction())}>Init cap</button>
            </div>
        </div>
    )
}