import React from 'react'
import Header from "./Header";

const Operators = ({ theme, setTheme }) => {
    return (
        <div className='flex flex-col h-2/6'>
            <Header theme={theme} setTheme={setTheme} />
        </div>
    )
}

export default Operators