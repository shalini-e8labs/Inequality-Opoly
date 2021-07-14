import React, { Component } from 'react'

export default class pickidentity extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            onMessageSubmit2 : this.props.onMessageSubmit2,
            players : this.props.players,
            current_user : JSON.parse(localStorage.getItem('user')).PlayerID,
            srnumber : this.props.srnumber
        }
    }
    render() {
        return (
            <>
            <div>
                <h1>Let Bigging the Game</h1>
                {this.state.players[this.state.srnumber].PlayerID == this.state.current_user ?
                    <button className="sign_in_btn go_premium" onClick={()=>{this.state.onMessageSubmit2(this.state.srnumber+1)}}>Your Turn</button>
                : 
                    <button className="sign_in_btn go_premium">Not Your Turn</button>
                }
            </div>
           </>
        )
    }
}