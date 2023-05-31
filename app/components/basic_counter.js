import { useState } from 'react'

export default function SimpleCounter() {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
    return (
        <div>
        <button onClick={handleClick}>Plus</button> {count}
        </div>
    )
}