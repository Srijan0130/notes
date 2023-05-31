    import { useState } from "react";

    export default function Counter() {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);

    const handleClickLeft = () => {
        setLeft(left + 1);
    };
    const handleClickRight = () => {
        setRight(right + 1);
    };
    return (
        <>
        <h2>Stateful component</h2>
        {left}
        <button onClick={handleClickLeft}>left</button>
        <button onClick={handleClickRight}>right</button>
        {right}
        </>
    );
    }
