import { useState } from "react";
import './ItemCounter.css';

interface Props {
    productName: string,
    productQuantity?: number,
}

export const ItemCounter = ({ productName, productQuantity = 1 }: Props) => {
    const [count, setCount] = useState<number>(productQuantity);

    const handleAddItem = () => { setCount(count + 1); };
    const handleSubtractItem = () => {
        if (count === 1) return;

        setCount(count - 1);
    };

    return (
        <section className="item-row">

            <span className="item-text" style={{ color: count === 0 ? 'red' : 'black' }}>{productName}</span>
            <button onClick={handleAddItem}>+1</button>
            <span data-testid="item-count">{count}</span>
            <button onClick={handleSubtractItem}>-1</button>

        </section>
    );
};