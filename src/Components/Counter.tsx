import { useState } from "react"

const Counter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter(counter+1)
    }
    const decrement = () => {
        if(counter>0) {
        setCounter(counter-1)
        }
    }

    const reset = () => {
        setCounter(0)
    }
    return (
        <>
        <button onClick={()=>increment()}>+</button>
        {counter}
        <button onClick={()=>decrement()}>-</button><br/>
        <button onClick={()=>reset()}>Reset</button>
        </>
    )
}

export default Counter