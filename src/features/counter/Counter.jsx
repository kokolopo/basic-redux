import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { useEffect } from 'react';

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        console.log(amount);
    }, [amount])

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-6'>
            <div className='flex items-center gap-3 '>
                <button
                    className=' bg-orange-500 py-3 px-8 rounded-md text-white font-semibold'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <span>{count}</span>

                <button
                    className=' bg-blue-500 py-3 px-8 rounded-md text-white font-semibold'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
            </div>
            <div className="flex justify-center items-center gap-5">
                <button
                    className=' bg-green-500 py-3 px-8 rounded-md text-white font-semibold'
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(amount))}
                >
                    incrementByAmount
                </button>
                <div >
                    <input className="field-input" type="number" onChange={e => setAmount(parseInt(e.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default Counter