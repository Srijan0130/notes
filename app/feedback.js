'use client'

import { useState } from "react"

export default function FeedBack(){
    const[good, setGood] = useState(0)
    const[neutral, setNeutral] = useState(0)
    const[bad, setBad] = useState(0)
    return (
        <>
        <h2> give FeedBack </h2>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>

        <h2>stats</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad:{bad}</p>
        </>
    )
}