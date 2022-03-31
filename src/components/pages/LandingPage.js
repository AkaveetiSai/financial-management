import React from 'react'
import { Link } from 'react-router-dom'

import 'App.css'
import BackgroundImage from 'bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Fincare</h1>
            <p className="main-para text-center">One Stop Solution For All Your Financial Needs</p>
            <div className="buttons text-center">
                <Link to="/login">
                <button className="primary-button" id="reg_btn"><span>Login </span></button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}