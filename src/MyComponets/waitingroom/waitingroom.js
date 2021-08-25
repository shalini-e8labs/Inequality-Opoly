import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import io from "socket.io-client"
import DOMPurify from "dompurify";
import queryString from 'query-string';
import {gameboard_assets} from "./gameboard_assets.js";
import {identity_assets} from "./identity_assets.js"

const ENDPOINT = 'http://api.inequalityopoly.www70-32-25-208.a2hosted.com/';
let socket;
let button_style = {
	position: 'relative',
		width: '100%'
}
function App() {
	var image_opacitty = {
		'opacity':0.5
	}
	//01-Asian-man
	//02-Black-man
	//03-hispanic-man
	//04-white-man
	//05-Asian-Woman
	//06-Black-Woman
	//07-Hispanic-Woman
	//08-White-Woman

	let srnumber2 = 0;
	const [hostid, sethostid] = useState(JSON.parse(localStorage.getItem('room')).PlayerID);
	const [ishostid, setishostid] = useState(localStorage.getItem('room_host'));
	const [current_user, setcurrent_user] = useState(JSON.parse(localStorage.getItem('user')).PlayerID);
	const [name, setName] = useState(JSON.parse(localStorage.getItem('user')).PlayerID+'_'+JSON.parse(localStorage.getItem('user')).Name);
    const [room, setRoom] = useState(JSON.parse(localStorage.getItem('room')).room_key);
	const [room_id, setroom_id] = useState(JSON.parse(localStorage.getItem('room')).room_id);
	const [IsSubscription, setIsSubscription] = useState(JSON.parse(localStorage.getItem('user')).IsSubscription);
	const [users, setUsers] = useState([]);
	const [isinvite, setisinvite] = useState(false);
	const [invite_email, setinvite_email] = useState('');
	const [error_invite_email, seterror_invite_email] = useState('');
	const [message, setMessage] = useState(0);
	const [messages, setMessages] = useState([]);
	const [gamestart, setgamestart] = useState(0);
	const [players, setplayers] = useState([]);
	const [srnumber, setsrnumber] = useState(0);
	const [pickup_step, setpickup_step] = useState(0);
	const [myidentity, setmyidentity] = useState(0);
	const [dice1, setdice1] = useState(0);
	const [dice2, setdice2] = useState(0);
	const [identity_cards, setidentity_cards] = useState(identity_assets);
	const [board_cards, setitemp_card] = useState(gameboard_assets);
	const [hostisonline, sethostisonline] = useState(1);
	const [inheritance_id, setinheritance_id] = useState(0);
	const [player_assets, setplayer_assets] = useState([]);
	const [player_identity_assests, setplayer_identity_assests] = useState([]);
	const [game_play_position, set_game_play_position] = useState(1);
	const [your_play_position, set_your_play_position] = useState(0);
	const [your_last_position, set_your_last_position] = useState(0);
	const [deci_roll_step, set_deci_roll_step] = useState(0);
	const [game_instraction, set_game_instraction] = useState('');
	
	const invite_fucntion = (e) => {
		if(invite_email == '' || invite_email == null){
			seterror_invite_email('Please enter the EmailID');
			return false;
		}

		let data={
			"room_id" : JSON.parse(localStorage.getItem('room')).room_id,
			"email" : invite_email,
			"Name" : JSON.parse(localStorage.getItem('user')).Name,
			"room_key" : JSON.parse(localStorage.getItem('room')).room_key
		}
		fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/invite_user", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'authorization': localStorage.getItem('token'),
			},
			body:JSON.stringify(data)
		}).then((resp)=>{
			resp.json().then((result)=>{
				console.warn("result",result)
				if(result[0][0].SUCCESS == 1){
					seterror_invite_email('INVITE SEND');
					setinvite_email('');
				}else{
					this.setState({error_invite_email: result[1][0].Message});
				}
			})
		})
	}

	useEffect(() => {
        socket = io(ENDPOINT);

        socket.emit('join', {
            name,
            room
        }, (error) => {
            if (error) {
                console.log(error);
            }
        });

		socket.on("roomData", ({
            users
        }) => {
            setUsers(users);
			let status = 0;
			users.forEach(function(element) {
				if(element.name.split("_")[0] == hostid){
					status = 1;
				}
			});
			sethostisonline(status);
        });

		socket.on("message", (data) => {
			if(data.players != undefined){
				setplayers(data.players);
				setgamestart(data.text);
				data.players.forEach(function(element) {
					if(element.PlayerID == current_user){
						setmyidentity(element.IdentityID)
						setplayer_assets(JSON.parse(element.assets))
						set_your_play_position(element.SrNumber)
					}
				});

				data.dice.forEach(function(element) {
					if(element.PlayerID == current_user){
						setdice1(element.dice1);
						setdice2(element.dice2);
						setinheritance_id(element.isinheritance);
						setplayer_identity_assests(element.identity_assests);
						
					}
				});
				setTimeout(() =>  setpickup_step(1),7000);
				setTimeout(() =>  setpickup_step(2),12000);
				setTimeout(() =>  setpickup_step(3),17000);
				setTimeout(() =>
					data.players.forEach(function(element) {
						document.getElementById(element.PlayerID+"_player").setAttribute("style", "left:"+(document.getElementById("Gameboard_playboard_0").offsetLeft+30)+"px;top:"+document.getElementById("Gameboard_playboard_0").offsetTop+"px")
					})
				,18000);
			}
		});

		socket.on("dice_roll", (data) => {
			if(data.current_user == current_user){
				setdice1(data.dice1);
				setdice2(data.dice2);
				set_your_last_position(data.player_posstion);
				set_deci_roll_step(1);
				setTimeout(() =>  set_deci_roll_step(2),1500);
				setTimeout(() =>  set_deci_roll_step(3),3000);
				setTimeout(() =>  set_deci_roll_step(0),4500);
			}
			setTimeout(() => set_game_play_position(data.game_play_position) ,5000)
			setTimeout(() => 
				move_token(data.your_last_position,data.player_posstion,data.current_user)
				// document.getElementById(data.current_user+"_player").setAttribute("style", "left:"+document.getElementById("Gameboard_playboard_"+data.player_posstion).offsetLeft+"px;top:"+document.getElementById("Gameboard_playboard_"+data.player_posstion).offsetTop+"px")
			,5000)
			if(data.Isupdate == 1){
				setTimeout(() => all_player_assets_update() ,5000)
			}
		});

		socket.on("all_players_assets_update", (data) => {
			setplayers(data.players);
			data.players.forEach(function(element) {
				if(element.PlayerID == current_user){
					setplayer_assets(JSON.parse(element.assets))
				}
			});
		});

		socket.on("game_stop", (data) => {
			sethostisonline(2);
		});
    }, [ENDPOINT, room,name]);
	const move_token = (last_position,postion_temp,current_userid) => {
		if(postion_temp >= last_position){
            var x;
            var y;
            x = document.getElementById("Gameboard_playboard_"+last_position).offsetLeft+30;
            y = document.getElementById("Gameboard_playboard_"+last_position).offsetTop;
            document.getElementById(current_userid+"_player").setAttribute("style", "left:"+x+"px;top:"+y+"px");
            setTimeout(() => move_token(last_position+1,postion_temp,current_userid),300);
        }
	}
	
	const onMessageSubmit = (e) => {
		var json_object = {
			'room_id' : room_id,
			'room_status' : 1,
			'type' : 0,
			'srnumber' : srnumber
		}
		socket.emit('sendMessage', json_object, () => console.log(''));
	}
	const game_cancel = (e) => {
		var json_object = {
			'room_id' : room_id,
		}
		socket.emit('send_game_stop', json_object, () => console.log(''));
	}

	function removeNull(array) {
		return array.filter(x => x !== null)
	};

	function randomArrayShuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex -= 1;
		  temporaryValue = array[currentIndex];
		  array[currentIndex] = array[randomIndex];
		  array[randomIndex] = temporaryValue;
		}
		return array;
	}
	useEffect(() => {
		const script = document.createElement('script');
		script.src = "./js/loader.js";
		script.async = true;
		document.body.appendChild(script);
	  	return () => {
		  document.body.removeChild(script);
		}
	}, []);
	
	const dice_roll = (e) => {
		var json_object = {
			'room_id' : room_id,
			'current_user' : current_user,
			'your_last_position' : your_last_position,
			'game_play_position' : game_play_position,
			'players' : players.length
		}
		socket.emit('send_dice_roll', json_object, () => console.log(''));
	}

	function all_player_assets_update(){
		var json_object = {
			'room_id' : room_id
		}
		socket.emit('sent_all_players_assets_update', json_object, () => console.log(''));
	}
	return (
		gamestart == 1 ?
			pickup_step == 0 ?
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
							<p></p>
							<div className="lodding-fills">
								<div className="lodding-fills_child"></div>
							</div>
						</div>
					</div>
					{/* gameboard index content */}
				</div>
			: 
			pickup_step == 1 ?
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
							<div className="select_card_first" id="select_card_first">
									<div className="select_card_first-inner">
										<div className="select_box_bonus">
											<div className="select_card_fist_img">
												<img src={`img/indentity/${myidentity}.png`}></img>
											</div>
											<div className="select_card_fist_text">
												<h3 className="title_card">PERCEIVED IDENTITY</h3>
												<div className="cards_text_inner" style={{overflow:'auto'}}>
													<br></br>
													{identity_cards[myidentity-1].map(function(identity_card, i){
														return <div className="select_card_fist_text_servies">
															<h2>{identity_card.name}</h2>
															<h3>{identity_card.value}</h3>
														</div>
													})}
												</div>
											</div>
										</div>
									</div>
								</div>
							{/* details about selected  identity card screen- */}
						</div>
						{/* Pick in identity card  */}
					</div>
				</div>
			:
			pickup_step == 2 && inheritance_id != 0 ?
				<div className="wapper gamepay-wapper">
					<div className="gamebordPaass_main gamebordPaass_main-1">
						{/* background gamedoard img */}
						<div className="bg-board">
							<img src="img/December2020-Gameboard.png" alt="" />
						</div>
						{/* background gamedoard img */}
						{/* Pick in identity card  */}
						{/* Pick in inheritance */}
						<div className="show_cardt" id="oner_inheritance">
							{/* details about selected Inheritence screen */}
							<div className="select_card_first " id="first-card-inheritance">
								<div className="select_card_first-inner">
								<div className="select_box_bonus">
									<div className="select_card_fist_img">
										{/* <img src="img/red_park.png" /> */}
										<img src={board_cards[inheritance_id].url}></img>
									</div>
									<div className="select_card_fist_text">
										<h3 className="title_card">{board_cards[inheritance_id].name}</h3>
										<div className="cards_text_inner" style={{overflow:'auto'}}>
											{board_cards[inheritance_id].description.map(function(board_cards, i){
												return <div className="select_card_fist_text_servies">
														<h2>{board_cards.name}</h2>
														<h3>{board_cards.value}</h3>
													</div>
												})}
										</div>
									</div>
								</div>
								</div>
							</div>
							{/* details about selected Inheritence screen */}
						</div>
						{/* game inheritance */}
					</div>
				</div>
			:
			pickup_step == 2 && inheritance_id == 0 ?
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
							<div className="select_card_first" id="select_card_first">
									<div className="select_card_first-inner">
										<div className="select_box_bonus">
											<div className="select_card_fist_img">
												<img src={`img/indentity/${myidentity}.png`}></img>
											</div>
											<div className="select_card_fist_text">
												<h3 className="title_card">PERCEIVED IDENTITY</h3>
												{identity_cards[myidentity].map(function(identity_card, i){
													return <div className="select_card_fist_text_servies">
														<h3>{identity_card.name}</h3>
														<h3>{identity_card.value}</h3>
													</div>
												})}
											</div>
										</div>
									</div>
								</div>
							{/* details about selected  identity card screen- */}
						</div>
						{/* Pick in identity card  */}
					</div>
				</div>
			:
			pickup_step == 3 ?
				<div className="wapper gamestart-wapper">
					{/* Gameboard Image */}
					<div className="gameplay_gameboard_wapper gameplay_gameboard_wapper1">
						<div className="player_card_wapper">
							<div className="player_cared_user">
							{players.map(function(user, i){
									return <div className="playser_with_money">
												<img src={`img/indentity/${myidentity}_avtar.png`}></img>
												<div className="Playser_data">
													<h3 className="player_user_name">{user.Name}</h3>
													<span>${JSON.parse(user.assets).balance}</span>
												</div>
											</div>;
									
								})}
							</div>
						</div>
						<div className="gameplay_game gameplay_game1" >
							{/* <img src="img/December2020-Gameboard.png" alt="" style={{width:"100%"}}/> */}
							<table className="Gameboard-playboard">
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-paydayi" id="Gameboard_playboard_20"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-19 top" id="Gameboard_playboard_21"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-20 top" id="Gameboard_playboard_22"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-21 top" id="Gameboard_playboard_23"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-22 top" id="Gameboard_playboard_24"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-23 top" id="Gameboard_playboard_25"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-24 top" id="Gameboard_playboard_26"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-25 top" id="Gameboard_playboard_27"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-26 top" id="Gameboard_playboard_28"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-27 top" id="Gameboard_playboard_29"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-jack_poTi" id="Gameboard_playboard_30"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-18 left" id="Gameboard_playboard_19"></td>
									<td className="center_gmaeboard" colspan="9" rowspan="9" ></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-28 right" id="Gameboard_playboard_31"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-17 left" id="Gameboard_playboard_18"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-29 right" id="Gameboard_playboard_32"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-16 left" id="Gameboard_playboard_17"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-30 right" id="Gameboard_playboard_33"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-15 left" id="Gameboard_playboard_16"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-31 right" id="Gameboard_playboard_34"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-14 left" id="Gameboard_playboard_15"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-32 right" id="Gameboard_playboard_35"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-13 left" id="Gameboard_playboard_14"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-33 right" id="Gameboard_playboard_36"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-12 left" id="Gameboard_playboard_13"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-34 right" id="Gameboard_playboard_37"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-11 left" id="Gameboard_playboard_12"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-35 right" id="Gameboard_playboard_38"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-10 left" id="Gameboard_playboard_11"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-36 right"  id="Gameboard_playboard_39"></td>
								</tr>
								<tr>
									<td className="Gameboard-playboard-card Gameboard-playboard-9 bottom" id="Gameboard_playboard_10"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-8 bottom" id="Gameboard_playboard_9"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-7 bottom" id="Gameboard_playboard_8"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-6_1 Gameboard-playboard-6 bottom" id="Gameboard_playboard_7"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-4 bottom" id="Gameboard_playboard_6"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-5 bottom" id="Gameboard_playboard_5"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-6 bottom" id="Gameboard_playboard_4"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-3 bottom" id="Gameboard_playboard_3"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-2 bottom" id="Gameboard_playboard_2"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-1 bottom" id="Gameboard_playboard_1"></td>
									<td className="Gameboard-playboard-card Gameboard-playboard-start" id="Gameboard_playboard_0">
										{players.map(function(user, i){
											return <img src={`img/indentity/${user.IdentityID}_token.png`} id={`${user.PlayerID}_player`}/>;
										})}
									</td>
								</tr>
							</table>
						</div>
					</div>
					{/* Gameboard Image */}
					{/* user profile */}
					<div className="payboard_user payboard_user1"  style={{width:"100%"}}>
						<div className="user_profile">
							{/* user img */}
							<div className="user_profile_img">
								<img src={`img/indentity/${myidentity}_profile.png`}></img>
							</div>
							{/* user img */}
							{/* user propati list */}
							<div className="user_profile_text">
								<ul className="user_data">
									<li style={{backgroundColor: player_identity_assests.Color}}>
										<a href="#">
											<span className="user_data_icon"><img src="img/Work.png" alt="" /></span>
											<span className="user_data_icon_text">$103,000</span>
										</a> 
									</li>
									<li style={{backgroundColor: player_identity_assests.Color}}>
										<a href="#">
											<span className="user_data_icon"><img src="img/Path 23800.png" alt="" /></span>
											<span className="user_data_icon_text">${player_assets.balance}</span>
										</a> 
									</li>
									<li style={{backgroundColor: player_identity_assests.Color}}>
										<a href="#">
											<span className="user_data_icon"><img src="img/Group 4803.png" alt="" /></span>
											<span className="user_data_icon_text">PROPERTIES</span>
										</a> 
									</li>
									<li style={{backgroundColor: player_identity_assests.Color}}>
										<a href="#">
											<span className="user_data_icon"><img src="img/User.png" alt="" /></span>
											<span className="user_data_icon_text">
												{player_assets.blue_chip == 1 ?
													"CAN VOTE"
													:
													"CAN NOT VOTE"
												}
												</span>
										</a> 
									</li>
								</ul>
							</div>
							{/* user propati list */}
						</div>
						{/* dice settiong area */}
						<div className="gamepay-sreens">
							{/* home */}
							<div className="gamepay-sreens-home gamepay-sreens-home-inner">
								<a href="#"> 
									<img src="img/Group 4801.png" alt="" /> 
								</a>
							</div>
							{/* home */}
							{/* user icon */}
							<div className="gamepay-sreens-home gamepay-sreens-home-inner">
								<a href="#"> 
									<img src="img/Group 4798.png" alt="" /> 
								</a>
							</div>
							{/* user icon */}
							{/* dice */}
							{your_play_position == game_play_position? 
								<div className=" gamepay-sreens-rolling">
									<a href="#" onClick={() => dice_roll()}> 
										<img src="img/Component 16 – 3.png" alt="" /> 
									</a>
								</div>
							:
								<div style={{width: '100px'}}>
									<a href="#">
											<img src="img/Component 16 – 3.png" alt="" style={{opacity: '0.5',cursor:'none',pointerEvents:'none',width:'100%'}} />
									</a>
								</div>
							}
							
							{/* user icon */}
							{/* dice */}
							<div className="gamepay-sreens-home gamepay-sreens-home-inner">
								<a href="#"> 
									<img src="img/Group 4735.png" alt="" /> 
								</a>
							</div>
							{/* user icon */}
							{/* dice */}
							<div className="gamepay-sreens-home gamepay-sreens-home-inner">
								<a href="#"> 
									<img src="img/Group 4793.png" alt="" /> 
								</a>
							</div>
							{/* end game */}
						</div>
						{/* dice settiong ariay */}
						{/* current user play */}
						<div className="game-instraction">
							<p>{game_instraction}</p>
						</div>
						{/* current user play */}
					</div>
					{deci_roll_step == 1?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(0,0,0,.5)',zIndex:'999'}}>
							<img className="dice_throw-img" src="img/Image-4.png" alt="" />
						</div>
					: ""
					}
					{deci_roll_step == 2?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(0,0,0,.5)',zIndex:'999'}}>
							<img className="dice_throw-img-inner" src="img/ScreenShot2021.png" alt="" />
						</div>
					: ""
					}
					{deci_roll_step == 3?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(0,0,0,.5)',zIndex:'999'}}>
							<div class="pass-number">
								<h3 class="title_pass_number">Dice Roll</h3>
								<div class="pass_number-main">
									<h3 class="pass_number">{dice1 + dice2}</h3>
									<div class="pass_number-text">
										<h3> You moved {dice1 + dice2} Space</h3>
									</div>    
								</div>
							</div>
						</div>
					: ""
					}
				</div>  
			: ""
			: 
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
				<div className="how_would" id='Pregame_Waiting_Room'>
					<Link className="back_arrow back-name" to="/Join"><img src="img/Group_3325.png" alt="" /></Link>
					<div className="Pregame_Waiting_Room_main">
						<div className="Pregame_Waiting_Room_ID">
							<p>ROOM</p>
							<h3>{JSON.parse(localStorage.getItem('room')).room_key}</h3>
							<div className="how_would-join game-start-btn-main">
								{ishostid == 1?
									<>
									{users.length > 1 ?
										<button className="sign_in_btn go_premium game-start-btn" onClick={() => onMessageSubmit(0)}>PLAY</button>									
									:
										<button className="sign_in_btn go_premium game-start-btn play_buton_hold">PLAY</button>
									}
									
									<button className="sign_in_btn go_premium game-start-btn" onClick={() => game_cancel(0)}>CANCEL</button>
									</>
								:  'Wait for host for start the game'
								}
							</div>
							{ishostid == 1?
									<p className="game_start_host_ewait_msg">Players cannot join the room once the game has started.</p>
								:  ''
								}
						</div>
						
						<div className="Pregame_Waiting_joing_usere_list">
							<div className="Pregame_Waiting_joing_usere_list-inner">
								{users.map(function(user, i){
									if(user.name.split("_")[0] == hostid) {
										return <p className="host"><img className="host_icon" src="img/Group3331.png" /><span className="user_name">{user.name.split("_")[1]}(host)</span></p>;
									}else{
										return <p><span className="user_name" id={user.id}>{user.name.split("_")[1]}</span><span className="user_icon">
											{ishostid == 1?
												<img src="img/Group3333.png" alt="" />
											: ''
											}
											</span></p>;
									}
									
								})}
							</div>
							{IsSubscription == 1?
								<div className="how_would-join">
									<button className="sign_in_btn enter_room_next" onClick={() => setisinvite(true)}>INVITE PLAYERS</button>
								</div>
							: ''
							}
						</div>
					</div>
				</div>
				{isinvite == true ?
					<div className="invaite_user" id='invaite_user'>
						<div className="how_would enter_name enter_room  invaite_user_inner">
							<div onClick={() => setisinvite(false)}  className="back_arrow"><img src="img/Group_3325.png" alt="" /></div>
							<h3>SEND AN INVITE TO...</h3>
							<div className="how_would-join join_or_login">
								<div className="login_input">
									<input type="email" placeholder="Email" value={invite_email} onChange={(e) => setinvite_email(e.target.value)} />
								</div>
								<div className="send_email" id="send_email">{error_invite_email}
								</div>
								<div className="how_would-join">
									<button className="sign_in_btn enter_name_next" onClick={invite_fucntion}>NEXT</button>
								</div>
							</div>
						</div>
					</div>
				: ""}
				{ hostisonline == 0 ? 
					<div className="forgot_password" id='forgot_password'>
						<div className="how_would enter_room forgot_password_inner">
							<span className="" style={{color: "#6B8E0C",fontSize:"25px",float:"left",fontWeight:"700",marginTop:"10px",fontFamily:"Bangers",letterSpacing:"2px",paddingTop:"40px",paddingBottom:"40px"}}>Host leaves or closes the window</span>
						</div>
					</div>
				: ""
				}
				{hostisonline == 0 ?
					setTimeout(
					() => sethostisonline(2), 
					3000
					)
				:	""
				}
				{hostisonline == 2 ?
					<Redirect to='/Join' />
				: ""
				}
			</div>

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

export default App