import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '.././css/Tutorials.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { login: this.props.login}
    }
  render() {
    return(
        // sreen wappper 
        <div class="wapper">
            <div class="wapper_child">
                <div className="tutorials_wait_screen">
                    <center><img src="/img/loader.gif" /></center>
                </div>
                {/* Gameboard Image  */}
                <div class="tutorial-playariya Gameboard-id-1" >
                    {/* <img src="img/December2020-Gameboard.png" alt=""/>  */}
                    <table class="Gameboard-playboard">
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-paydayi"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-19"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-20"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-21"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-22"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-23"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-24"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-25"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-26"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-27"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-jack_poTi"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-18"></td>
                            <td class="center_gmaeboard" colspan="9" rowspan="9" ></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-28"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-17"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-29"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-16"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-30"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-15"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-31"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-14"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-32"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-13"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-33"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-12"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-34"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-11"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-35"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-10"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-36"></td>
                        </tr>
                        <tr>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-9"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-8"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-7"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-6_1"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-6"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-5"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-4"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-3"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-2"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-1"></td>
                            <td loading="lazy" class="Gameboard-playboard-card Gameboard-playboard-start"></td>
                        </tr>
                    </table>
                </div>
                {/* Gameboard Image  */}


                {/* game players images  */}
                <div class="identity_cards-main Gameboard-id-9">
                    <div class="identity_cards-inner">
                        <div class="identity_cards identity_cards-1">
                            <img src="img/indentity/1.png" alt=""/>
                        </div>
                        <div class="identity_cards identity_cards-2">
                            <img src="img/indentity/2.png" alt=""/>
                        </div>
                        <div class="identity_cards identity_cards-3">
                            <img src="img/indentity/3.png" alt=""/>
                        </div>
                        <div class="identity_cards identity_cards-4">
                            <img src="img/indentity/4.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div class="identity_cards-main Gameboard-id-10">
                    <div class="identity_cards-inner">
                        <div class="identity_cards identity_cards-1">
                            <img src="img/indentity/5.png" alt=""/>
                        </div>
                        <div class="identity_cards identity_cards-2">
                            <img src="img/indentity/6.png" alt=""/>
                        </div>
                        <div class="identity_cards identity_cards-3">
                            <img src="img/indentity/7.png" alt=""/>
                        </div>
                        <div class="identity_cards identity_cards-4">
                            <img src="img/indentity/8.png" alt=""/>
                        </div>
                    </div>
                </div>
                {/* game players images  */}
                
                {/* tutorial screen  */}

                {/* tutorial staps  */}
                {/* tutorial stap 1  */}
                <div class="tutorial-stap tutorial-stap-1">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>STARE HERE</h1>
                        <p>Each player starts out on this start space.Each time a player passes by either payday while employed, they receive their current slary.If  they land onplyday they erceive double their salay. There are two paydays representing the 1st and th.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-1" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 1  */}

                {/* tutorial stap 2  */}
                <div class="tutorial-stap tutorial-stap-2">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>Properties</h1>
                        <p>Properties can be purchased if not<br />owned by another player. If owned by<br />another player, you must pay<br />them rent.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-2" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 2  */}

                {/* tutorial stap 3  */}
                <div class="tutorial-stap tutorial-stap-3">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>Life events</h1>
                        <p>If player lands on a life event space, they draw a life event card and follow the instructions. Yellow life event cards affect individual players while green life event cards affect all players.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-3" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 3  */}

                {/* tutorial stap 4  */}
                <div class="tutorial-stap tutorial-stap-4">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>Police interactions</h1>
                        <p>If a player lands on this space, the player must roll the dice to determine if they go to Prison Industrial Complex which would mean they would lose their job and maybe the right to vote.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-4" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 4  */}

                {/* tutorial stap 5  */}
                <div class="tutorial-stap tutorial-stap-5">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>Pink tax</h1>
                        <p>If a player lands on Pink Tax they roll the dice and pay 5 times roll if male and 10 times roll if female to the Lottery.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-5" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 5  */}

                {/* tutorial stap 6  */}
                <div class="tutorial-stap tutorial-stap-6">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>Commissary</h1>
                        <p>If a player, in the ordinary course of  play, lands on Commissary. They must roll the dice and pay 10 times roll to Lottery.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-6" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 6  */}

                {/* tutorial stap 7  */}
                <div class="tutorial-stap tutorial-stap-7">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>Payday</h1>
                        <p>If a player passes pay day, they receive their salary listed on line 3a. If they land on 3a they receive double their salary.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-7" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 7  */}

                {/* tutorial stap 8--> */}
                <div class="tutorial-stap tutorial-stap-8">
                    <div class="tutorial-stap-img">
                        <img src="img/Path 9840.png" alt=""/>
                    </div>
                    <div class="tutorial-stap-text">
                        <h1>Jackpot</h1>
                        <p>If a player lands on the lottery space, they automatically receive all the money in the Lottery. If the lottery is empty, the player collects $500 from the bank.</p>
                        <div class="button button-stap">
                            <button class="play-btn stap-8" data-stap-id="1">NEXT</button>
                            <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                        </div>
                    </div>
                </div>
                {/* tutorial stap 8--> */}

                {/* tutorial stap 9  */}
                <div class="identity_cards-tutorial tutorial-stap-9">
                    <h3>identity Cards</h3>
                    <p>Before the game begins, each player randomly picks a perceived identity<br/>card representing getting born. Specific lines in the ID card will be<br/>constantly referred to throughout the course of the game to show<br/>each player what they have to roll in order to avoid or partake in certain events.</p>
                    <div class="button button-stap">
                        <button class="play-btn stap-9" data-stap-id="1">NEXT</button>
                        <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                    </div>
                </div>
                {/* tutorial stap 9  */}

                {/* tutorial stap 10  */}
                <div class="identity_cards-tutorial tutorial-stap-10">
                    <h3>identity Cards</h3>
                    <p>Before the game begins, each player randomly picks a perceived identity<br/>card representing getting born. Specific lines in the ID card will be<br/>constantly referred to throughout the course of the game to show<br/>each player what they have to roll in order to avoid or partake in certain events.</p>
                    <div class="button button-stap">
                        <Link to="/Join"><button class="play-btn stap-10">NEXT</button></Link>
                        <Link to="/Join"><button class="Learn-More">SKIP TUTORIAL</button></Link>
                    </div>
                </div>
                {/* tutorial stap 10  */}

                {/* tutorial staps  */}
            </div>
            
        </div>  
    )
  }
  componentDidMount(){
    const script = document.createElement("script");
    script.src = "./js/Tutorials_js.js";
    script.async = true;
    document.body.appendChild(script);

    const script2 = document.createElement("script");
    script2.src = "./js/loader.js";
    script2.async = true;
    document.body.appendChild(script2);
  }
}

export default App;