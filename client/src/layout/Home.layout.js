import React from 'react'
import Navbar from '../components/Navbar'

const HomeLayout = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default HomeLayout
