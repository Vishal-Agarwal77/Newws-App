import React from 'react'
import spinner from './Spinner.gif';

const Spinner = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <img src={spinner} alt="Loading" />
        </div>
    )
}

export default Spinner
