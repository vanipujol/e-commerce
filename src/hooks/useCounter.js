import {useState} from "react";

export const useCounter = (initial = 0, min, max ) => {
    if (initial < min || initial > max) initial = min

    const [counter, setCounter] = useState(initial)

    const decrement = () => {
        if (counter > min) setCounter(prev => prev -1)
    }

    const increment = () => {
        if( counter < max) setCounter(prev => prev + 1)
    }

    const reset = () => {
        setCounter(initial)
    }

    return { counter, decrement, increment, reset}
}