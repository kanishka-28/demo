import React from 'react'

const Alert = (props) => {
    return (
        <div className="w-max bg-red-400 fixed top-6 text-center right-0 md:right-24 md:top-12 rounded-lg px-4 py-2 font-semibold ">
            {props.message}
        </div>
    )
}

export default Alert