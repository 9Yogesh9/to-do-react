import React, { useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';

const TodoElement = ({ item, toggleCompleted }) => {

    return (
        <div className="flex h-16 min-w-32 w-screen md:w-2/6 md:max-w-lg mx-2 my-4 justify-between font-medium hover:font-bold bg-violet-700 shadow hover:shadow-xl text-white dark:bg-gradient-to-tr from-cyan-500 to-blue-500 dark:text-white dark:shadow-white/10 px-5 py-5 rounded-full">
            {item.completed ?
                <div className='overflow-y-auto line-through'>{item.title}</div> :
                <div className='overflow-y-auto'>{item.title}</div>
            }

            <div className='flex'>
                <div className='cursor-pointer'>
                    {item.completed ?
                        <FaRegCheckSquare className="h-6 w-6 mx-2" onClick={() => { toggleCompleted(item) }} /> :
                        <FaRegSquare className="h-6 w-6 mx-2" onClick={() => { toggleCompleted(item) }} />}
                </div>
                <div><MdDeleteForever className='text-red-600 h-6 w-6 cursor-pointer' /></div>
            </div>

        </div>
    )
}

export default TodoElement