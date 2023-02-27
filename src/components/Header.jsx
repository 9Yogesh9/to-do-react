import React from 'react'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { BsInfoCircleFill } from 'react-icons/bs';

const Header = ({ theme, setTheme }) => {

    const toggletheme = () => {
        setTheme((previous) => {
            if (previous === 'light')
                return 'dark';
            else
                return 'light';
        })
    }

    const icon_class = 'my-3 h-8 w-8';

    return (
        <div className='px-3 py-1 flex justify-around content-center w-full h-2/6 '>
            <div className='cursor-pointer'>
                <BsInfoCircleFill className={icon_class} />
            </div>
            <div>
                <h1 className='font-headers text-xxx my-1'>To Do List</h1>
            </div>
            <div>
                <button
                    onClick={toggletheme}
                >
                    {theme === 'light' ? <MdOutlineLightMode className={icon_class} /> : <MdDarkMode className={icon_class} />}
                </button>
            </div>
        </div>
    )
}

export default Header