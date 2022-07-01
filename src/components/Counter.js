import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Counter = ({number, handleMinus, handlePlus}) => {
    
    return (
        <div className='w-1/2 px-2 flex align-center justify-between'>
            <button onClick={number>1 ? handleMinus : ()=>{}} className='w-7 h-7 rounded-full bg-slate-300 grid place-items-center '><AiOutlineMinus className='text-gray-500' /></button>
            <span className='text-xl font-bold text-gray-600 font-montserrat'>{number}</span>
            <button onClick={number<4 ? handlePlus : ()=>{}} className='w-7 h-7 rounded-full bg-slate-300 grid place-items-center '><AiOutlinePlus className='text-gray-500' /></button>
        </div>
    );
}

export default Counter;