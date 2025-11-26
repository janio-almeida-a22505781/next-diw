'use client'
import React, { useEffect, useState } from 'react'

export default function ContadorPage() {
    const [num, setNum] = useState<number>(0)
    const [numList, setNumList] = useState<number[]>([num])
    

    const updateColor = (): string => {
        if (num >= 4 && num < 8) return "text-yellow-600"
        if (num >= 8 && num < 11) return "text-green-600"
        return "text-red-600"
    }

    useEffect(() => {
        setNumList([...numList, num])
        localStorage.setItem("num", num.toString())
    }, [num])

    useEffect(() => {
        localStorage.setItem("numList", JSON.stringify(numList))
    }, [numList])

    const increment = (): void => {
        console.log("increment")
        if (num < 10) setNum(num + 1)
    }

    const decrement = (): void => {
        console.log("decrement")
        if (num > 0) setNum(num - 1)
    }

    const reset = (): void => {
        console.log("reset")
        setNum(0)
        setNumList([])
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className="flex items-center justify-center p-7 rounded-2xl gap-4">
                <button onClick={decrement} className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Decrementar</button>
                <span className={`font-medium text-2xl ${updateColor()}`}>{num}</span>
                <button onClick={increment} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Incrementar</button>
            </div>
            <button onClick={reset} className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>Resetar</button>
            {numList.length > 0 && (
                <ul className='list-none'>
                    {numList.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
