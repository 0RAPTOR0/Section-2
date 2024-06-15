'use client';
import React from 'react'

const EventHandling = () => {
    return (
        <div className='max-w-[768px] mx-auto'>

            <h1 className='text-center text-2xl font-bold'>EventHandling</h1>

            <button className='p-3 bg-blue-500 mt-5 text-white rounded-md' onClick={() => { alert('button was clicked') }}>click me</button>

            <input
                className='border-2 border-gray-500 block w-full mt-3'
                type="text"
                onChange={(e) => { console.log(e.target.value); }}
            />

            <input type="color" onChange={(e) => { document.body.style.backgroundColor = e.target.value }} />

        </div>
    )
}

export default EventHandling;