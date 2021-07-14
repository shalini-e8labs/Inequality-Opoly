import React, { Component } from 'react';
import { Link } from "react-router-dom";
import io from "socket.io-client"
const ENDPOINT = 'http://api.inequalityopoly.www70-32-25-208.a2hosted.com/';
let socket;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickup_step : 0,
            pickup_animation : 0,
        }
        setTimeout(
        () => this.setState({ pickup_step: 1 }), 
            3000
        );
    }
    singup_next(e){
        if(e == 2){
            this.setState({ pickup_step:e});
            this.setState({pickup_animation: 1});
            setTimeout(() => 
                this.setState({ pickup_animation:0}), 
                    3000
                );
        }
        if(e == 3){
            this.setState({ pickup_step:e});
            this.setState({ pickup_animation:1});
            setTimeout(() => 
                this.setState({ pickup_animation:2}), 
                2000
            );
            setTimeout(() => 
                this.setState({ pickup_animation:3}), 
                4000
            );
            setTimeout(() => 
                this.setState({ pickup_animation:4}), 
                6000
            );
        }
        if(e == 4){
            this.setState({ pickup_animation:5});
            setTimeout(() => 
            this.setState({ pickup_step:e}),
                3000
            );
        }
        if(e == 5){
            this.setState({ pickup_step:e});
        }
    }
    
    
  render() {
    return(
        <>
        {/* sreen wappper */}
        {this.state.pickup_step == 0 ? 
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
                        <p>The Board Game of Structral Racism and sexism in America</p>
                        <div className="lodding-fills"></div>
                    </div>
                </div>
                {/* gameboard index content */}
            </div>
        : ""}
        {this.state.pickup_step == 1? 
            <div className="wapper gamepay-wapper">
                <div className="gamebordPaass_main gamebordPaass_main-1">
                    {/* background gamedoard img */}
                    <div className="bg-board">
                        <img src="img/December2020-Gameboard.png" alt="" />
                    </div>
                    {/* background gamedoard img */}
                    {/* Pick in identity card  */}
                    <div className="show_cardt" id="oner_id">
                        {/* Pick in identity card screen */}
                        <div className="born">
                            <div className="born-inner">
                                <h3>"GET BORN"</h3>
                                <p>PICK AN IDENTITY CARD</p>
                            </div>
                        </div>
                        <div className="born-card" onClick={() => this.singup_next(2)}>
                            <img src="img/Group-3372-1.png" alt="" />
                        </div>
                        {/* Pick in identity card screen */}
                    </div>
                    {/* Pick in identity card  */}
                    
                </div>
            </div>
        : ""}

        {this.state.pickup_step == 2 ? 
            <div className="wapper gamepay-wapper">
                <div className="gamebordPaass_main gamebordPaass_main-1">
                    {/* background gamedoard img */}
                    <div className="bg-board">
                        <img src="img/December2020-Gameboard.png" alt="" />
                    </div>
                    {/* background gamedoard img */}
                    {/* Pick in identity card  */}
                    <div className="show_cardt" id="oner_id">
                        {/* Pick in identity card screen */}
                        {/* select identity card image */}
                        {this.state.pickup_animation == 1 ? 
                            <img src="img/Group-4722-1.png" class="select-card_back active" />
                        : ""}
                        {/* select identity card image */}
                        {/* details about selected  identity card screen */}
                        {this.state.pickup_animation == 0 ?
                            <div className="select_card_first" id="select_card_first">
                                <div className="select_card_first-inner">
                                    <div className="select_box_bonus">
                                        <div className="select_card_fist_img">
                                            <img src="img/02.png" />
                                        </div>
                                        <div className="select_card_fist_text">
                                            <h3 className="title_card">PERCEIVED IDENTITY</h3>
                                            <div className="select_card_fist_text_servies">
                                                <h3>Inheritance</h3>
                                                <p>Roll less than 9 to receive inheritance</p>
                                            </div>
                                            <div className="select_card_fist_text_servies">
                                                <h3>Employment</h3>
                                                <p>Roll less than 12 to become Employed</p>
                                            </div>
                                            <div className="select_card_fist_text_servies">
                                                <h3>Salary</h3>
                                                <p>Receive a base salary of $235</p>
                                            </div>
                                            <div className="select_card_fist_text_servies">
                                                <h3>Promotion </h3>
                                                <p>Roall less than 10 to receivw a promotion </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Roll_inheritance-main">
                                        <button className="sign_in_btn Roll_inheritance " onClick={() => this.singup_next(3)}>Roll For Inheritance</button>
                                    </div>
                                </div>
                            </div>
                        : ""}
                        {/* details about selected  identity card screen- */}
                    </div>
                    {/* Pick in identity card  */}
                    
                </div>
            </div>
        : ""}

        {this.state.pickup_step == 3 ? 
            <div className="wapper gamepay-wapper">
                <div className="gamebordPaass_main gamebordPaass_main-1">
                    {/* background gamedoard img */}
                    <div className="bg-board">
                        <img src="img/December2020-Gameboard.png" alt="" />
                    </div>
                    {/* background gamedoard img */}
                    {/* Pick in identity card  */}
                    {/* Pick in inheritance */}
                    <div class="show_cardt" id="oner_inheritance">
                        {/* </div>dice throw */}
                        
                        {this.state.pickup_animation == 1 ?
                            <div class="dice_throw">
                                <img class="dice_throw-img" src="img/Image-4.png" alt="" />
                            </div>
                        : ""}
                        {this.state.pickup_animation == 2 ?
                            <div class="dice_throw">
                                <img class="dice_throw-img-inner" src="img/ScreenShot2021.png" alt="" />
                            </div>
                        : "" }
                        {this.state.pickup_animation == 3 ?
                            <div class="dice_throw">
                                <div class="pass-number">
                                    <h3 class="title_pass_number">CONGRATULATIONS</h3>
                                        <div class="pass_number-main">
                                        <h3 class="pass_number">6</h3>
                                        <div class="pass_number-text">
                                            <h3><img src="img/invite.png" alt="" /><span>YOU RECEVED AN INHERITANCE</span></h3>
                                            <p> You rolled less than 9! </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : "" }
                        
                        {/* select Inheritence card sreeen */}
                        <div class="born">
                            <div class="born-inner">
                            </div>
                        </div>
                        {this.state.pickup_animation == 4 ?
                            <div class="born-card" id="Inheritance-card" onClick={() => this.singup_next(4)}>
                                <img src="img/Group-4725-1.png" alt="" id="Inheritance-card_select " />
                            </div>
                        : ""}
                        
                        {/* select Inheritence card sreeen */}
                        {/* selected Inheritence card Image */}
                        {this.state.pickup_animation == 5 ?
                            <img src="img/Group-4722-1.png" class="select-card_back active" />
                        : ""}
                        {/* selected Inheritence card Image */}
                    </div>
                    {/* game inheritance */}
                </div>
            </div>
        : ""}
        {this.state.pickup_step == 4 ? 
            <div className="wapper gamepay-wapper">
                <div className="gamebordPaass_main gamebordPaass_main-1">
                    {/* background gamedoard img */}
                    <div className="bg-board">
                        <img src="img/December2020-Gameboard.png" alt="" />
                    </div>
                    {/* background gamedoard img */}
                    {/* Pick in identity card  */}
                    {/* Pick in inheritance */}
                    <div class="show_cardt" id="oner_inheritance">
                        {/* details about selected Inheritence screen */}
                        <div class="select_card_first " id="first-card-inheritance">
                            <div class="select_card_first-inner">
                            <div class="select_box_bonus">
                                <div class="select_card_fist_img">
                                    <img src="img/red_park.png" />
                                </div>
                                <div class="select_card_fist_text">
                                    <h3 class="title_card">RED PARK</h3>
                                    <div class="cards_text_inner">
                                        <div class="select_card_fist_text_servies">
                                        <h3> Rental Income</h3>
                                        <p>Player pays you $70 every time they land on this space</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Purchase Price</h3>
                                        <p>If no player owns this property, it costs $900 yo buy.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3>Auction Rules</h3>
                                        <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Rental Income</h3>
                                        <p>Player pays you $70 every time they land on this space</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Purchase Price</h3>
                                        <p>If no player owns this property, it costs $900 yo buy.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3>Auction Rules</h3>
                                        <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Rental Income</h3>
                                        <p>Player pays you $70 every time they land on this space</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Purchase Price</h3>
                                        <p>If no player owns this property, it costs $900 yo buy.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3>Auction Rules</h3>
                                        <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Rental Income</h3>
                                        <p>Player pays you $70 every time they land on this space</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Purchase Price</h3>
                                        <p>If no player owns this property, it costs $900 yo buy.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3>Auction Rules</h3>
                                        <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Rental Income</h3>
                                        <p>Player pays you $70 every time they land on this space</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Purchase Price</h3>
                                        <p>If no player owns this property, it costs $900 yo buy.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3>Auction Rules</h3>
                                        <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Rental Income</h3>
                                        <p>Player pays you $70 every time they land on this space</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Purchase Price</h3>
                                        <p>If no player owns this property, it costs $900 yo buy.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3>Auction Rules</h3>
                                        <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Rental Income</h3>
                                        <p>Player pays you $70 every time they land on this space</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3> Purchase Price</h3>
                                        <p>If no player owns this property, it costs $900 yo buy.</p>
                                        </div>
                                        <div class="select_card_fist_text_servies">
                                        <h3>Auction Rules</h3>
                                        <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="Roll_inheritance-main">
                                <button class="sign_in_btn start_game_play" onClick={() => this.singup_next(5)}>START GAME</button>
                            </div>
                            </div>
                        </div>
                        {/* details about selected Inheritence screen */}
                    </div>
                    {/* game inheritance */}
                </div>
            </div>
        : ""}
        {this.state.pickup_step == 5 ? 
            <div className="wapper gamepay-wapper">
                <div className="gamebordPaass_main gamebordPaass_main-1">
                    {/* background gamedoard img */}
                    <div className="bg-board">
                        <img src="img/December2020-Gameboard.png" alt="" />
                    </div>
                    {/* background gamedoard img */}
                    {/* Pick in identity card  */}
                    {/* Pick in inheritance */}
                    <div class="show_cardt" id="wiet_for_player">
                        <div class="select_card_first" id="wiet_for_player_inner">
                            <div class="select_card_first-inner">
                            <div class="select_box_bonus">
                                <div class="select_card_fist_img">
                                    <img class="wiet_for_player_img" src="img/Screen Shot 2021-03-13 at 11.23.36 AM.png" />
                                    <div class="wiaht-for_text-inner">
                                        <h3>WAITING FOR OTHER PLAYERS...</h3>
                                        <p>Waiting for other players to finish their set up...</p>
                                    </div>
                                </div>
                                <div class="select_card_fist_text">
                                    <h3 class="title_card">WAITING ON...</h3>
                                    <div class="Pregame_Waiting_joing_usere_list">
                                        <div class="Pregame_Waiting_joing_usere_list-inner">
                                            <p class="host"><img class="host_icon" src="img/Group3331.png" /><span class="user_name">Perry (host)</span></p>
                                            <p><span class="user_name">Melanie</span><span class="user_icon"></span></p>
                                            <p><span class="user_name">Noah</span><span class="user_icon"></span></p>
                                            <p><span class="user_name">Andy</span><span class="user_icon"></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* game inheritance */}
                </div>
            </div>
        : ""}
        </>
    )
  }
//   componentDidMount(){
//     const script = document.createElement("script");
//     script.src = "./js/Tutorials_js.js";
//     script.async = true;

//     document.body.appendChild(script);
//   }
}

export default App;