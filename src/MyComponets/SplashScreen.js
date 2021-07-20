import React from 'react'
import { Link } from "react-router-dom";
export default function SplashScreen() {
    return (
            <div className="wapper">
            {/* gameboard image animation */}
            <div className="gameboard">
                <img src="img/December2020-Gameboard.png" alt="" />
            </div>
            {/* gameboard image animation */}

            {/* gameboard price animation */}
            <div className="gameboard_price">
                <img src="img/Group 636.png" alt="" />
            </div>
            {/* gameboard price animation */}

            {/* gameboard index content */}
            <div className="gameboardPaass_main ">
                <div className="gameboardPaass">
                    <img className="union_icon" src="img/Union 8.png" alt="" width="200px" />
                    {/* <h1>Inequality-Opoly</h1> */}
                    <p><img className="logo" src="img/logo.png" width="55%" /></p>
                    <p className="sub_tittle">The Board Game of Structral Racism and Sexism in America</p>
                    <div className="button">
                        <Link to="Tutorials"><button className="play-btn splashscreen">PLAY</button></Link>
                        <Link to="/"><button className="Learn-More">LEARN MORE</button></Link>
                    </div>
                </div>
            </div>
            {/* gameboard index content */}
        
            {/* gameboard property card animation */}
            <div className="gameboard_property_card">
                <img src="img/Group 4910.png" alt="" />
            </div>
            {/* gameboard property card animation */}

            {/* gameboard dice animation */}
            <div className="gameboard_dice">
                <img src="img/Group 4912.png" alt="" />
            </div>
            {/* gameboard dice animation */}
        </div>
    )
}
