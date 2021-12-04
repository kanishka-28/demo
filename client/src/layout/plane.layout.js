import React from 'react'
import { Link } from 'react-router-dom'
import Home from "../assets/images/Home.png"


const planeLayout = (props) => {
    return (
        <div>
            <Link to="/">
            <img src={Home} alt="home" className="w-36 h-36 mb-12 mx-auto"/>
            </Link>
            {props.children}
        </div>
    )
}

export default planeLayout