'use client'
import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <div style={ {display: 'flex'} }>
            <button name='plus' onClick={ () => setCounter(counter + 1) }>plus</button>
            <h2>{counter}</h2>
            <button name='minus' onClick={ () => setCounter(counter - 1) }>minus</button>
        </div>
    );
}