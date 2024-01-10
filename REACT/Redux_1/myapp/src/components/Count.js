import {useDispatch, useSelector} from "react-redux"

export default function Count(){

    const count = useSelector(store => store)

    const dispatch = useDispatch()

    return(
        <div>
            <h2>Count</h2>
            <h3>{count}</h3>
            <div>
                <button onClick={() => dispatch({type: 'INCR'})}>Increment</button>
                <button onClick={() => dispatch({type: 'DECR'})}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'INCR100'})}>Increment 100</button>
                <button onClick={() => dispatch({type: 'DECR100'})}>Decrement 100</button>
            </div> 
            <div>
                <button onClick={() => dispatch({type: 'NULL'})}>Null</button>
            </div> 
            <div>
                <button onClick={() => dispatch({type: 'INCR_BY_N', payload: +prompt()})}>INCR_BY_N</button>
            </div> 
        </div>
    )
}