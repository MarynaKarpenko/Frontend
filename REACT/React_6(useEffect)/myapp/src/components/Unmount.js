import { useEffect } from "react"

function Unmount(){

    useEffect(() => {
        console.log('Монтирование');
        return () => {
            console.log('Размонтирование');
        }
    }, [])
    return(
        <div>
            UnMount
        </div>
    )
}
export default Unmount