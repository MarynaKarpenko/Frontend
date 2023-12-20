import { forwardRef } from "react"

const Content = forwardRef((props, ref) => {
    return(
       <div ref={ref}>
            <h2>Some text</h2>
        </div> 
    )
})

export default Content