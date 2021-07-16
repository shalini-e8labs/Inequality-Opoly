import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './css/Tutorials.css';
import './css/login.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login
        }
        localStorage.removeItem('room');
        localStorage.removeItem('room_host');
        if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
            this.setState({ login: true})
        }
    }
    
    
    // this.setState({login: name});
  render() {
    
    return(
        // sreen wappper
        <div className="wapper">
            {/*  gameboard image animation */}
            <div className="gameboard">
                <img src="img/December2020-Gameboard.png" alt="" />
            </div>
            {/*  gameboard image animation */}

            {/*  gameboard price animation */}
            <div className="gameboard_price">
                <img src="img/Group 636.png" alt="" />
            </div>
            {/*  gameboard price animation */}

            {/*  User login and registration area  */}
            <div className="how_would-main">

                {/*  create and join Room */}
                <div className="how_would" id="how_would">
                    <h3>What would you<br/>like to do?</h3>
                    <div className="how_would-join">
                        <Link to="CreateRoom"><button class="sign_in_btn">CREATE ROOM</button></Link>
                        <Link to="JoinRoom"><button class="sign_in_btn go_premium join_room_btn  ">JOIN ROOM</button></Link>
                        <Link to="#"><button class="sign_in_btn manage_account ">MANAGE MY ACCOUNT</button></Link>
                    </div>
                </div>
                {/*  create and join Room */}

            {/*  Create Accouunt */}
            </div>
            {/*  User login and registration area  */}

            {/*  gameboard property card animation */}
            <div className="gameboard_property_card">
                <img src="img/Group 4910.png" alt="" />
            </div>
            {/*  gameboard property card animation */}

            {/*  gameboard dice animation */}
            <div className="gameboard_dice">
                <img src="img/Group 4912.png" alt="" />
            </div>
            {/*  gameboard dice animation */}

        </div>  
    )
  }
}

export default App;