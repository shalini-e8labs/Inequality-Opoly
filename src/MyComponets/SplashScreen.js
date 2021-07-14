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
                    <img src="img/Union 8.png" alt="" />
                    <h1>Inequality-Opoly</h1>
                    <p>The Board Game of Structral Racism and Sexism in America</p>
                    <div className="button">
                        {/* <button className="play-btn"><Link to="Tutorials">Play</Link></button> */}
                        <Link to="Tutorials"><button className="play-btn">Play</button></Link>
                        <button className="Learn-More">Learn More</button>
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
