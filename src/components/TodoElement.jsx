import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaRegSquare, FaRegCheckSquare, FaPencilAlt } from 'react-icons/fa';

const TodoElement = ({ item, toggleCompleted, deleteItem, setToggleBtn, setNewToDo, setUpdateItem }) => {

    // Helper to update a todo item
    const updateToDo = (item) => {
        setUpdateItem(item);
        setToggleBtn(true);
        setNewToDo(item.title);
    }

    return (
        <div className="flex h-16 min-w-32 w-screen md:w-2/6 md:max-w-lg mx-2 my-4 justify-between font-medium hover:font-bold bg-violet-700 shadow-xl hover:shadow-2xl dark:shadow-none text-white dark:bg-gradient-to-tr from-cyan-500 to-blue-500 dark:text-white dark:shadow-white/70 px-5 py-5 rounded-full">
            {item.completed ?
                <div className='overflow-y-auto line-through'>{item.title}</div> :
                <div className='overflow-y-auto'>{item.title}</div>
            }

            <div className='flex justify-evenly'>
                <div className='cursor-pointer pl-2' onClick={()=> updateToDo(item)}>
                    <FaPencilAlt className='mt-1' />
                </div>
                <div className='cursor-pointer'>
                    {item.completed ?
                        <FaRegCheckSquare className="h-6 w-6 mx-1" onClick={() => { toggleCompleted(item) }} /> :
                        <FaRegSquare className="h-6 w-6 mx-1" onClick={() => { toggleCompleted(item) }} />}
                </div>
                <div><MdDeleteForever className='text-red-600 h-6 w-6 cursor-pointer hover:shadow-lg hover:shadow-purple-600' onClick={() => deleteItem(item)} /></div>
            </div>

        </div>
    )
}

export default TodoElement