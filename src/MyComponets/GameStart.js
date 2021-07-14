/*import React from 'react';
import ReactDOM from 'react-dom';*/
import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";

class App extends Component
{
    
    constructor(props) {
        super(props);
        this.roll = this.roll.bind(this)
        this.state = {
            position :0,
            
        /*diceanimation : 0,*/
         
        };
    }  
        
    roll()
    {
       let RandomNumber = Math.floor(Math.random()*6) + 1;
       console.log(RandomNumber);
       let RandomNumber1 = Math.floor(Math.random()*6) + 1;
       console.log(RandomNumber1);
       let sum = RandomNumber + RandomNumber1;
       alert (sum);
        
        let value = sum;
        
            this.setState({position:(this.state.position)+sum});
           alert(this.state.position+sum);
           /* console.log(this.state.position+sum);*/
            
    }
   
    render(){
        
        return(
           
<div className="wapper gamestart-wapper" id="Game-tab_top"> 
        
    {/*Gameboard Image */}
    <div className="gameplay_gameboard_wapper">
        <div className="player_card_wapper">
            <div className="player_cared_user">
                <div className="playser_with_money">
                    <div className="playser_with_money_user playser_with_money_1">
                        <div className="Playser_data">
                            <h3 className="player_user_name select_player_1">JANET</h3>
                            <span>$11,000</span>
                        </div>
                    </div>
                </div>
                <div className="playser_with_money">
                    <div className="playser_with_money_user playser_with_money_2">
                        <div className="Playser_data">
                            <h3 className="player_user_name select_player_1">MELANIE</h3>
                            <span>$50,000</span>
                        </div>
                    </div>
                </div>
                <div className="playser_with_money">
                    <div className="playser_with_money_user playser_with_money_3">
                        <div className="Playser_data">
                             <h3 className="player_user_name select_player_1">PEERY</h3>
                            <span>$120,000</span>
                        </div>
                    </div>
                </div>
                <div className="playser_with_money">
                    <div className="playser_with_money_user playser_with_money_4">
                        <div className="Playser_data">
                            <h3 className="player_user_name select_player_1">NOHA</h3>
                            <span>$10,000</span>
                        </div>
                    </div>
                </div>
                <div className="playser_with_money">
                    <div className="playser_with_money_user playser_with_money_5">
                        <div className="Playser_data">
                            <h3 className="player_user_name select_player_1">ANDY</h3>
                            <span>$21,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="gameplay_game">
            {/*<img src="img/December2020-Gameboard.png" alt=""/> */}
            <table className="Gameboard-playboard">
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-paydayi"></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-19 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-20 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-21 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-22 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-23 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-24 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-25 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-26 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-27 top"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-jack_poTi"></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-18 left"><span className="user_name select_player_1"></span></td>
                    <td className="center_gmaeboard" colspan="9" rowspan="9" ></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-28 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-17 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-29 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-16 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-30 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-15 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-31 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-14 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-32 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-13 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-33 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-12 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-34 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-11 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-35 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-10 left"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-36 right"><span className="user_name select_player_1"></span></td>
                </tr>
                <tr>
                    <td className="Gameboard-playboard-card Gameboard-playboard-9 bottom"></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-8 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-7 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-6_1 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-4 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-5 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-6 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-3 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-2 bottom"><span className="user_name select_player_1"></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-1 bottom"><span className="user_name select_player_1 "></span></td>
                    <td className="Gameboard-playboard-card Gameboard-playboard-start bottom">
                    {/*this.state.position==sum ? */}

                        <div id="player_id_1" className="player_dise">
                            <img src="img/Group 4622.png"/>
                        </div>
                        
                        {/*: ""}*/}
                        <div className="player_dise"  id="player_id_2">
                            <img src="img/Group 4607.png"/>
                        </div>
                        <div className="player_dise" id="player_id_3">
                            <img src="img/.png"/>
                        </div>
                        <div className="player_dise" id="player_id_4">
                            <img src="img/Group 4637.png"/>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    {/*Gameboard Image 
     user profile */}
    <div className="payboard_user">
        <div className="user_profile">
            {/* user img */}
            <div className="user_profile_img">
                <img src="img/02-Black-man.png" alt=""/>
            </div>

            {/* user img 
            user propati list */}
            <div className="user_profile_text">
                <ul className="user_data">
                    <li> 
                        <Link to="#">
                            <span className="user_data_icon"><img src="img/Work.png" alt=""/></span>
                            <span className="user_data_icon_text">$103,000</span>
                        </Link> 
                    </li>
                    <li> 
                        <Link to="#">
                            <span className="user_data_icon"><img src="img/Path 23800.png" alt=""/></span>
                            <span className="user_data_icon_text">$50,000</span>
                        </Link>
                    </li>
                    <li> 
                        <Link to="#">
                            <span className="user_data_icon"><img src="img/Group 4803.png" alt=""/></span>
                            <span className="user_data_icon_text">3 PROPERTIES</span>
                        </Link> 
                    </li>
                    <li> 
                        <Link to="#">
                            <span className="user_data_icon"><img src="img/User.png" alt=""/></span>
                            <span className="user_data_icon_text">CAN VOTE</span>
                        </Link> 
                    </li>
                </ul>
            </div>
            {/* user propati list */}
        </div>
        {/*  dice settiong area */}
        <div className="gamepay-sreens">
            {/* home */}
            <div className="gamepay-sreens-home gamepay-sreens-home-inner">
                <Link to="">
                    <img src="img/Group 4801.png" alt=""/> 
                </Link>
            </div>
            {/* home */}
            {/* user icon */}
            <div className="gamepay-sreens-home gamepay-sreens-home-inner">
                <Link to="#">
                    <img src="img/Group 4798.png" alt=""/> 
                </Link>
            </div>
            {/* user icon  */}
            {/*  dice --> */}
            <div className="gamepay-sreens-rolling">
                <Link to="#" onClick={()=>this.roll()} id="rolling_dise"> 
                    <img src="img/Component 16 – 3.png" alt=""/> 
                </Link>
            </div>
            {/* dice*/}
            {/* setting */}
            <div className="gamepay-sreens-home gamepay-sreens-home-inner">
                <Link to="#"> 
                    <img src="img/Group 4735.png" alt=""/> 
                </Link>
            </div>
            {/* setting  */}
            {/* end game */}
            <div className="gamepay-sreens-home gamepay-sreens-home-inner">
                <Link to="#"> 
                    <img src="img/Group 4793.png" alt=""/> 
                </Link>
            </div>
            {/* end game */}
        </div>
        {/*  dice settiong ariay 
        < current user play */}
        <div className="game-instraction">
            <p>NOHA IS CURRENTLY ROLLING DICE...</p>
        </div>
        {/* current user play */}
    </div>
    {/* Pick in inheritance  */}
    <div className="show_cardt rolling_dise_game-start" id="oner_inheritance" style={{display:'none'}}>
        {/* dice throw  */}
        <div className="dice_throw">
            <img className="dice_throw-img" src="img/Image-4.png" alt=""/>
            <img className="dice_throw-img-inner" src="img/ScreenShot2021.png" alt="" style={{display:'none'}}/>
            <div className="pass-number" style={{display:'none'}}>
                <h3 className="title_pass_number">CONGRATULATIONS</h3>
                <div className="pass_number-main">
                    <h3 className="pass_number">6</h3>
                    <div className="pass_number-text">
                        <h3><img src="img/invite.png" alt=""/><span>YOU RECEVED AN INHERITANCE</span></h3>
                        <p> You rolled less than 9! </p>
                    </div>    
                </div>
            </div>
        </div>

        {/* select Inheritence card sreeen */}
        <div className="born">
            <div className="born-inner">
            </div>    
        </div>
        <div className="born-card" id="Inheritance-card">
            <img src="img/Group-4725-1.png" alt="" id="Inheritance-card_select"/>
        </div>
        {/* select Inheritence card sreeen */}

        {/* selected Inheritence card Image */}
        <img src="img/Group-4722-1.png" className="select-card_back"/>
        {/* selected Inheritence card Image */}
        {/* details about selected Inheritence screen*/}
        <div className="select_card_first " id="first-card-inheritance" style={{display:'block'}}>
            <div className="select_card_first-inner">
                <div className="select_box_bonus">
                    <div className="select_card_fist_img">
                        <img src="img/red_park.png" style={{width: '250px'}}/>
                    </div>
                    <div className="select_card_fist_text">
                        <h3 className="title_card">RED PARK</h3>
                        <div className="cards_text_inner">
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="Roll_inheritance-main">
                    <button className="sign_in_btn start_game_play">START GAME</button>
                </div>
            </div>
        </div>
        {/* details about selected Inheritence screen*/}
    </div>
    {/* Show select card */}
    <div className="gameplay_select_card gameplay_select_card-first" id="gameplay_select_card" style={{display:'none'}}>
        {/* show card after dise back */}
        <div className="gameplay_select_card_inner"  id="show_card_after_dise" style={{display:'none'}}>
            <img src="img/Group-4722-1.png" alt="" />
        </div>
        {/* show card after dise back */}
        {/* details about selected  identity card screen*/}
         <div className="select_card_first" id="select_card_first" style={{display:'none'}}>
            <div className="select_card_first-inner">
                <div className="select_box_bonus">
                    <div className="select_card_fist_img">
                        <img src="img/tangerine tower.png" style={{width: '250px'}}/>
                    </div>
                    <div className="select_card_fist_text">
                        <h3 className="title_card yello" id="chagne_background">TANGERINE TOWERS</h3>
                        <div className="cards_text_inner">
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Rental Income</h3>
                                <p>Player pays you $70 every time they land on this space</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3> Purchase Price</h3>
                                <p>If no player owns this property, it costs $900 yo buy.</p>
                            </div>
                            <div className="select_card_fist_text_servies">
                                <h3>Auction Rules</h3>
                                <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                            </div>
                        </div>
                        <div className="by_project">
                            <div className="Roll_inheritance-main">
                                <button className="sign_in_btn Roll_inheritance ">BUY PROPERTY</button>
                            </div>
                            <span>OR</span>
                            <div className="Roll_inheritance-main">
                                <button className="sign_in_btn Roll_inheritance" id="not_buy_property">DON'T BUY PROPERTY</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="Roll_inheritance-main">
                    <button className="sign_in_btn Roll_inheritance ">Roll For Inheritance</button>
                </div> */}
            </div>
        </div>
        {/* details about selected  identity card screen*/}
        <div className="show_cardt rolling_dise_game-start" id="Go_to_auction" style={{display: 'none'}}>
            {/* dice throw */}
            <div className="dice_throw">
                <img className="dice_throw-img auction_property_img" src="img/Screen Shot 2021-04-02 at 2.13.58 PM.png" alt=""/>
            </div>
            {/* dice throw */}
        </div>        
        
        {/* auction_property */}
        <div className="auction_property_main" style={{display:'none'}}>
            <div className="auction_property_detales">
                <div className="auction_property_detales-inner">
                    <div className="auction_property_card_pecification">
                        <div className="select_card_fist_text_servies">
                            <h3> Rental Income</h3>
                            <p>Player pays you $70 every time they land on this space</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3> Purchase Price</h3>
                            <p>If no player owns this property, it costs $900 yo buy.</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Auction Rules</h3>
                            <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                        </div>
                    </div>
                    <div className="auction_property_card">
                        <img src="img/tengerine view.png" alt="" />
                    </div>
                    <div className="auction_property_card_pecification">
                        <div className="select_card_fist_text_servies">
                            <h3> Rental Income</h3>
                            <p>Player pays you $70 every time they land on this space</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3> Purchase Price</h3>
                            <p>If no player owns this property, it costs $900 yo buy.</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Auction Rules</h3>
                            <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                        </div>
                    </div>
                </div>
                <div className="auction_property_bid">
                    <div className="auction_property_bid_price">
                        <span className="dolor-icon"><img src="img/Path 23800.png" alt=""/></span>
                        <span className="dolor-Price">$900</span>
                        <div className="timer">
                            <span className="timer-icon"><img src="img/Time Circle.png" alt=""/></span>
                            <span className="timer-text">15</span>
                        </div>
                    </div>
                    <div className="auction_property_bid_add_money">
                        <button className="add_money_auction">  
                            +$50
                        </button>
                    </div>
                </div>
            </div>
            <div className="all_users_buy_property">
                <div className="player_cared_user">
                    <div className="playser_with_money">
                        <div className="playser_with_money_user playser_with_money_1">
                            <div className="Playser_data">
                                <h3 className="player_user_name select_player_1">JANET</h3>
                                <span>$11,000</span>
                            </div>
                            <div className="wen_auction_property playser_with_money_1_bid" style={{display:'none'}}>
                                <img src="img/Group3331.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="playser_with_money">
                        <div className="playser_with_money_user playser_with_money_2">
                            <div className="Playser_data">
                                <h3 className="player_user_name select_player_1">MELANIE</h3>
                                <span>$50,000</span>
                            </div>
                            <div className="wen_auction_property playser_with_money_2_bid" style={{display:'none'}}>
                                <img src="img/Group3331.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="playser_with_money">
                        <div className="playser_with_money_user playser_with_money_3">
                            <div className="Playser_data">
                                    <h3 className="player_user_name select_player_1">PEERY</h3>
                                <span>$120,000</span>
                            </div>
                            <div className="wen_auction_property playser_with_money_3_bid" style={{display:'none'}}>
                                <img src="img/Group3331.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="playser_with_money">
                        <div className="playser_with_money_user playser_with_money_4">
                            <div className="Playser_data">
                                <h3 className="player_user_name select_player_1">NOHA</h3>
                                <span>$10,000</span>
                            </div>
                            <div className="wen_auction_property playser_with_money_4_bid" style={{display:'none'}}>
                                <img src="img/Group3331.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="playser_with_money">
                        <div className="playser_with_money_user playser_with_money_5">
                            <div className="Playser_data">
                                <h3 className="player_user_name select_player_1">ANDY</h3>
                                <span>$21,000</span>
                            </div>
                            <div className="wen_auction_property playser_with_money_5_bid" style={{display:'none'}}>
                                <img src="img/Group3331.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="player_win_auction" style={{display:'none'}}>
                    <div className="user_profile">
                        {/* user img */}
                        <div className="user_profile_img">
                            <img src="img/02-Black-man.png" alt=""/>
                            <div className="wen_auction_property playser_with_money_1_bid win_auction" style={{display:'none'}}>
                                <img src="img/Group3331.png" alt=""/>
                            </div>
                        </div>
                        {/* user img */}
                        {/* user propati list */}
                        <div className="user_profile_text">
                            <ul className="user_data">
                                <li> 
                                    <Link to="#">
                                        <span className="user_data_icon"><img src="img/Work.png" alt=""/></span>
                                        <span className="user_data_icon_text">$103,000</span>
                                    </Link> 
                                </li>
                                <li> 
                                    <Link to="#">
                                        <span className="user_data_icon"><img src="img/Path 23800.png" alt=""/></span>
                                        <span className="user_data_icon_text">$50,000</span>
                                    </Link> 
                                </li>
                                <li> 
                                    <Link to="#">
                                        <span className="user_data_icon"><img src="img/Group 4803.png" alt=""/></span>
                                        <span className="user_data_icon_text">3 PROPERTIES</span>
                                    </Link> 
                                </li>
                                <li> 
                                    <Link to="#">
                                        <span className="user_data_icon"><img src="img/User.png" alt=""/></span>
                                        <span className="user_data_icon_text">CAN VOTE</span>
                                    </Link> 
                                </li>
                            </ul>
                        </div>
                        {/* user propati list */}
                    </div>
                </div>
            </div>
        </div>
        {/* auction_property */}


    </div>
    {/* Show select card */}

    {/* Stopped By Police cards */}
    <div className="gameplay_select_card police-card" style={{display:'none'}}>
        {/* dice throw  */}
        <div className="overseeding">
            <div className="dice_throw">
                <img className="dice_throw-img auction_property_img" src="img/Screen Shot 2021-04-02 at 4.46.16 PM.png" alt=""/>
                <h3>JANET WAS STOPPED BY POLICE!!!</h3>
            </div>
        </div>
        <div className="overseeding_go_jail" style={{display:'none'}}>
            <div className="dice_throw">
                <img className="dice_throw-img auction_property_img" src="img/Screen Shot 2021-04-08 at 1.25.36 PM.png" alt=""/>
                <h3>JANET IS GOLING TO JAIL!!!</h3>
            </div>
        </div>
        <div className="overseeding_jail_free" style={{display:'none'}}>
            <div className="dice_throw">
                <img className="dice_throw-img auction_property_img" src="img/Screen Shot 2021-04-08 at 1.27.41 PM.png" alt=""/>
                <h3>JANET GOT  AWAY!!!</h3>
            </div>
        </div>
        {/* dice throw  */}
    </div>
    {/* Stopped By Police cards */}

    {/*  Brother deth cards */}
    <div className="gameplay_select_card Brother_deth" style={{display:'none'}}>
        {/* dice throw  */}
        <div className="overseeding orenge_life">
            <div className="dice_throw">
                <img className="dice_throw-img auction_property_img" src="img/Screen Shot 2021-04-08 at 1.39.58 PM.png" alt=""/>
                <h3>AND LANDED ON A ORANGE LIFE <br /> EVENT !!! </h3>
            </div>
        </div>
        {/* dice throw  */}
        <div className="select_box_bonus Brother_deth_card" style={{display:'none'}}>
            <div className="select_card_fist_img " >
                <img src="img/your brother died.png" style={{width: '250px'}}/>
            </div>
            <div className="select_card_fist_text">
                <h3 className="title_card">LIFE EVENT</h3>
                <div className="cards_text_inner">
                    <div className="select_card_fist_text_servies">
                        <h3> Funeral Fees</h3>
                        <p>pay $150 dollars in funeraln fees</p>
                    </div>
                    <div className="select_card_fist_text_servies">
                        <h3> Inheritance</h3>
                        <p>Roll less thne 11to receive an inheritance</p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    {/* Brother deth cards */}

    {/*  Economic boom cards */}
    <div className="gameplay_select_card economic_boom" style={{display: 'none'}}>
        {/* dice throw  */}
        <div className="overseeding economic_boom_event_life">
            <div className="dice_throw">
                <img className="dice_throw-img auction_property_img" src="img/Screen Shot 2021-04-08 at 1.39.58 PM.png" alt=""/>
                <h3>AND LANDED ON A ORANGE LIFE <br /> EVENT !!! </h3>
            </div>
        </div>
        {/* dice throw  */}
        <div className="economic_boom-card" style={{display: 'none'}}>
            <div className="select_box_bonus">
                <div className="select_card_fist_img " >
                    <img src="img/economic room.png" style={{width: '250px'}}/>
                </div>
                <div className="select_card_fist_text">
                    <h3 className="title_card">LIFE EVENT</h3>
                    <div className="cards_text_inner">
                        <div className="select_card_fist_text_servies">
                            <h3> Economic Boom</h3>
                            <p>All Players receive $200 bonus and  a raise or employment !</p>
                        </div>
                    </div>
                </div>    
            </div>
            <h3>ANDY LANDED ON A GREEN LIFE EVENT!!!</h3>
        </div>
    </div>
    

    {/* Go to Prison */}
    <div className="gameplay_select_card go_to_pricon" style={{display: 'none'}}>
        {/* dice throw  */}
        <div className="overseeding go_to_pricon_life">
            <div className="dice_throw">
                <img className="dice_throw-img auction_property_img" src="img/Screen Shot 2021-04-02 at 4.46.16 PM.png" alt=""/>
            </div>
        </div>
        {/*} dice throw */}
        <div className="go_to_pricon-card" style={{display: 'none'}}>
            <div className="select_box_bonus">
                <div className="select_card_fist_img ">
                    <img src="img/m04.png" style={{width: '250px'}}/>
                </div>
                <div className="select_card_fist_text">
                    <h3 className="title_card">PERCEVED IDENTITY</h3>
                    <div className="cards_text_inner">
                        <div className="select_card_fist_text_servies">
                            <h3>Police Interaction</h3>
                            <p>If firest time. Roll less than 11 to avoid prison</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become empioyed</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Police Interaction</h3>
                            <p>If firest time. Roll less than 11 to avoid prison</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become empioyed</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Police Interaction</h3>
                            <p>If firest time. Roll less than 11 to avoid prison</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become empioyed</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                    </div>
                    <div className="staricon">
                        <img src="img/Group 4879.png" alt=""/>
                    </div>
                </div>    
            </div>
            <div className="Roll_inheritance-main">
                <button className="sign_in_btn Roll_inheritance ">ROLL TO AVOID PRISON
                    <div className="timer">
                        <span className="timer-icon"><img src="img/Time Circle.png" alt=""/></span>
                        <span className="timer-text">15</span>
                    </div>
                </button>
                
            </div>
        </div>
    </div>
    {/* Go to Prison */}

    {/* Out of Prison */}
    <div className="gameplay_select_card get_out_pricon" style={{display: 'none'}}>
       <div className="get_out_pricon_card">
            <div className="select_box_bonus">
               <div className="select_card_fist_text">
                    <h3 className="title_card">PAY BAIL</h3>
                    <div className="cards_text_inner">
                        <div className="select_card_fist_text_servies">
                            <h3>GETTING OUT OF PRISON</h3>
                            <p>YOU MUST PAY BAIL OF $50</p>
                            <p>ROLL LESS THAN 8 TO GET VOTING RIGHTS </p>
                            <p>ROLL LESS THAN 11 TO BECOME REMPLOVED </p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="Roll_inheritance-main">
                <button className="sign_in_btn Roll_inheritance ">ROLL TO GET OUT OF PRISON
                    <div className="timer">
                        <span className="timer-icon"><img src="img/Time Circle.png" alt=""/></span>
                        <span className="timer-text">15</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
    {/* Out of Prison */}
    {/* Return To Game */}
    <div className="gameplay_select_card return_to_game" style={{display: 'none'}}>
        <div className="return_to_game-card">
            <div className="select_box_bonus">
                <div className="select_card_fist_img " >
                    <img src="img/m04.png" style={{width: '250px'}}/>
                </div>
                <div className="select_card_fist_text">
                    <h3 className="title_card">PERCEVED IDENTITY</h3>
                    <div className="cards_text_inner">
                        <div className="select_card_fist_text_servies">
                            <h3>Inheritance</h3>
                            <p>Roll less than 9 to receive inheritance</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become employment</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Salary</h3>
                            <p>Receive a base salary of $235</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Inheritance</h3>
                            <p>Roll less than 9 to receive inheritance</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become employment</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Salary</h3>
                            <p>Receive a base salary of $235</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="Roll_inheritance-main">
                <button className="sign_in_btn Roll_inheritance ">
                    RETURN TO GAME
                </button>
                
            </div>
        </div>
    </div>
    {/* Return To Game */}
    {/* Back To Game */}
    <div className="gameplay_select_card back_to_game" style={{display: 'none'}}>
        <div className="back_to_game-card">
            <div className="select_box_bonus">
                <div className="select_card_fist_img ">
                    <img src="img/01.png" style={{width: '250px'}}/>
                    <div className="back_to_game">
                        <ul className="user_data">
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Work.png" alt=""/></span>
                                    <span className="user_data_icon_text">$103,000</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Path 23800.png" alt=""/></span>
                                    <span className="user_data_icon_text">$50,000</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Group 4803.png" alt=""/></span>
                                    <span className="user_data_icon_text">3 PROPERTIES</span>
                                </Link> 
                            </li>
                        </ul>
                        <ul className="user_data">
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Path 23800.png" alt=""/></span>
                                    <span className="user_data_icon_text">CAN VOTE</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Group 4803.png" alt=""/></span>
                                    <span className="user_data_icon_text">UNNEMPLOVED</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/handcuffs.png" alt=""/></span>
                                    <span className="user_data_icon_text">EX-CONVICT X7</span>
                                </Link> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="select_card_fist_text">
                    <h3 className="title_card">MELANIE</h3>
                    <div className="cards_text_inner">
                        <div className="select_card_fist_text_servies">
                            <h3>Inheritance</h3>
                            <p>Roll less than 9 to receive inheritance</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become employment</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Salary</h3>
                            <p>Receive a base salary of $235</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Inheritance</h3>
                            <p>Roll less than 9 to receive inheritance</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become employment</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Salary</h3>
                            <p>Receive a base salary of $235</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="Roll_inheritance-main">
                <button className="sign_in_btn Roll_inheritance ">
                    RETURN TO GAME
                </button>
                
            </div>
        </div>
    </div>
    {/* Back To Game */}
    
    <div className="gameplay_select_card back_to_game" style={{display: 'none'}}>
        <div className="back_to_game-card">
            <div className="select_box_bonus">
                <div className="select_card_fist_img " >
                    <img src="img/01.png" style={{width: '250px'}}/>
                    <div className="back_to_game">
                        <ul className="user_data">
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Work.png" alt=""/></span>
                                    <span className="user_data_icon_text">$103,000</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Path 23800.png" alt=""/></span>
                                    <span className="user_data_icon_text">$50,000</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Group 4803.png" alt=""/></span>
                                    <span className="user_data_icon_text">3 PROPERTIES</span>
                                </Link> 
                            </li>
                        </ul>
                        <ul className="user_data">
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Path 23800.png" alt=""/></span>
                                    <span className="user_data_icon_text">CAN VOTE</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/Group 4803.png" alt=""/></span>
                                    <span className="user_data_icon_text">UNNEMPLOVED</span>
                                </Link> 
                            </li>
                            <li> 
                                <Link to="#">
                                    <span className="user_data_icon"><img src="img/handcuffs.png" alt=""/></span>
                                    <span className="user_data_icon_text">EX-CONVICT X7</span>
                                </Link> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="select_card_fist_text">
                    <h3 className="title_card">RED PARK</h3>
                    <div className="cards_text_inner">
                        <div className="select_card_fist_text_servies">
                            <h3>Inheritance</h3>
                            <p>Roll less than 9 to receive inheritance</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become employment</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Salary</h3>
                            <p>Receive a base salary of $235</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Inheritance</h3>
                            <p>Roll less than 9 to receive inheritance</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Employment</h3>
                            <p>Roll less than 12 to become employment</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Salary</h3>
                            <p>Receive a base salary of $235</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Promotion</h3>
                            <p>Roll less than 10 to recive a promotion</p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="Roll_inheritance-main">
                <button className="sign_in_btn Roll_inheritance ">
                    RETURN TO GAME
                </button>
                
            </div>
        </div>
    </div>
    {/* red park */}
    <div className="gameplay_select_card red_park_sreen" style={{display: 'none'}}>
        <div className="red_park_sreen-card">
            <div className="select_box_bonus">
                <div className="select_card_fist_img " >
                    <img src="img/red_park_1.png" style={{width: '250px'}}/>
                    <div className="arrow-red-park">
                        <button className="arrow-red-park-button left-button"><img src="img/Group 4915.png" alt=""/></button>
                        <button className="arrow-red-park-button right-button"><img src="img/Group 4916.png" alt=""/></button>
                    </div>
                </div>
                <div className="select_card_fist_text">
                    <h3 className="title_card">MELANIE</h3>
                    <div className="cards_text_inner">
                        <div className="select_card_fist_text_servies">
                            <h3>Rental Icome</h3>
                            <p>Player pays you $70 every time they land on this space</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Purchase Price</h3>
                            <p>If no player owns this property, it cost $900 to buy.</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Auction Rules</h3>
                            <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Rental Icome</h3>
                            <p>Player pays you $70 every time they land on this space</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Purchase Price</h3>
                            <p>If no player owns this property, it cost $900 to buy.</p>
                        </div>
                        <div className="select_card_fist_text_servies">
                            <h3>Auction Rules</h3>
                            <p>If a player can't afford the purchase price, the property goes to the highest bidder.</p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="Roll_inheritance-main">
                <button className="sign_in_btn Roll_inheritance ">
                    RETURN TO GAME
                </button>
            </div>
        </div>
    </div>
    {/*red park  */}

    {/* LANDED ON PICK TEX ...*/}
    <div className="gameplay_select_card landed_no_pick" style={{display: 'none'}}>
        <div className="landed_no_pick-card">
            <div className="select_box_bonus">
                <img src="img/Screen Shot 2021-04-16 at 1.56.22 PM.png" alt=""/>
            </div>
            <p>ANDY LANDED ON A  PINK TEX...</p>
            <div className="Roll_inheritance-main">
                <button className="sign_in_btn Roll_inheritance">
                   ANDY MUST PAY $500
                    <div className="timer">
                        <span className="timer-icon"><img src="img/Time Circle.png" alt=""/></span>
                        <span className="timer-text">15</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
 </div>   
        )
   }
}
export default App;

