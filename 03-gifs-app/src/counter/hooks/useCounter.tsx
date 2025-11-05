import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const handleAdd = () => {
        setCounter(prevState => prevState + 1);
    }

    const handleSustract = () => {
        if (counter === 0) return;
        setCounter(prevState => prevState - 1);
    }

    const handleReset = () => {
        setCounter(initialValue);
    }

    return {
        // Values
        counter: counter,
        // Methods
        handleAdd: handleAdd,
        handleSustract: handleSustract,
        handleReset: handleReset,
    }
}