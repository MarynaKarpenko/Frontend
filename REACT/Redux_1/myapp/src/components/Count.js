import {useDispatch, useSelector} from "react-redux"
import { decrAction, incrAction, nullAction } from "./store/countReducer"


export default function Count(){

    const count = useSelector(store => store.count)

    const dispatch = useDispatch()

    return(
        <div>
            <h2>Count</h2>
            <h3>{count}</h3>
            <div>
                <button onClick={() => dispatch(incrAction(1))}>Increment</button>
                <button onClick={() => dispatch(decrAction(1))}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch(incrAction(100))}>Increment 100</button>
                <button onClick={() => dispatch(decrAction(100))}>Decrement 100</button>
            </div> 
            <div>
                <button onClick={() => dispatch(nullAction)}>Null</button>
            </div> 
            <div>
                <button onClick={() => dispatch(incrAction (+prompt()))}>INCR_BY_N</button>
            </div> 
        </div>
    )
}