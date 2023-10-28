import {useState} from "react";

/**
 * A custom hook for managing quantity selection with minimum and maximum limits.
 *
 * @param {number} initial - The initial quantity value.
 * @param {number} min - The minimum allowed quantity.
 * @param {number} max - The maximum allowed quantity.
 * @returns {Object} An object containing the quantity counter and functions for decrement, increment, and reset.
 */

export const useQuantitySelector = (initial = 0, min, max) => {
    if (initial < min || initial > max) initial = min

    const [counter, setCounter] = useState(initial)

    const decrement = () => {
        if (counter > min) setCounter(prev => prev - 1)
    }

    const increment = () => {
        if (counter < max) setCounter(prev => prev + 1)
    }

    const reset = () => {
        setCounter(initial)
    }

    return {counter, decrement, increment, reset}
}