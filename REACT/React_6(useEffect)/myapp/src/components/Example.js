import { useEffect, useState } from "react"
import Unmount from "./Unmount";


function Example(){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    // useEffect(() => {
    //     console.log('Монтирование');
    // }, [count1])

    // useEffect(() => {
    //     console.log('Монтирование');
    // }, [count2])

    // console.log('Инициализация');

    return(
        <div>
            {/* <p>{count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Click</button>

            <p>{count1}</p>
            <button onClick={() => setCount1(count2 + 1)}>Click</button>

            {count1 < 3 && <Unmount/>} */}
        </div>
    )
}

export default Example