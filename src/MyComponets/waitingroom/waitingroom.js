import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import io from "socket.io-client"
import DOMPurify from "dompurify";
import queryString from 'query-string';
import {gameboard_assets} from "./gameboard_assets.js";
import {identity_assets} from "./identity_assets.js";
import {yellow_cars_assets} from "./yellow_cards_assets.js";
import {green_cards_assets} from "./green_cards_assets.js";



const ENDPOINT = 'https://api.inequalityopoly.www70-32-25-208.a2hosted.com/';
let socket;
let button_style = {
	position: 'relative',
		width: '100%'
}
let rotation_count = 0;
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
	const [yellows_cards, set_yellows_cards] = useState(yellow_cars_assets);
	const [greens_cards, set_greens_cards] = useState(green_cards_assets);
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
	const [PIC, set_PIC] = useState(0);
	const [pic_turn, set_pic_turn] = useState(0);
	const [yellow_card, set_yellow_card] = useState(0);
	const [sexual_assault, set_sexual_assault] = useState(0);
	const [raise, set_raise] = useState(0);
	const [green_card, set_green_card] = useState(0);
	const [life_event, set_life_event] = useState(0);

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
		fetch("https://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/invite_user", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'authorization': localStorage.getItem('token'),
			},
			body:JSON.stringify(data)
		}).then((resp)=>{
			resp.json().then((result)=>{
				if(result[0][0].SUCCESS == 1){
					seterror_invite_email('INVITE SEND');
					setinvite_email('');
				}else{
					seterror_invite_email(result[1][0].Message);
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

				setTimeout(() =>  setpickup_step(4),22000);
				setTimeout(() =>  setpickup_step(5),25000);
				setTimeout(() =>  setpickup_step(6),28000);

				setTimeout(() =>  setpickup_step(2),31000);
				setTimeout(() =>  setpickup_step(3),46000);
				setTimeout(() =>
					data.players.forEach(function(element) {
						document.getElementById(element.PlayerID+"_player").setAttribute("style", "left:"+(document.getElementById("Gameboard_playboard_0").offsetLeft+30)+"px;top:"+document.getElementById("Gameboard_playboard_0").offsetTop+"px")
					})
				,49000);
			}
		});

		socket.on("dice_roll", (data) => {
			if(data.current_user == current_user){
				setdice1(data.dice1);
				setdice2(data.dice2);
				set_your_last_position(data.player_posstion);
				set_deci_roll_step(1);
				setTimeout(() =>  set_deci_roll_step(2),1500);
				setTimeout(() =>  set_deci_roll_step(3),4500);
				setTimeout(() =>  set_deci_roll_step(0),7500);
				
				// PIC code
				if((data.player_posstion == 5 && data.your_last_position != 5)
				|| (data.player_posstion == 15 && data.your_last_position != 15)
				|| (data.player_posstion == 25 && data.your_last_position != 25)){
					setTimeout(() => set_PIC(1) ,12000);
					setTimeout(() => set_PIC(2) ,15000);
					set_pic_turn(1);
				}

				// Yellow Cards
				if((data.player_posstion == 2 && data.your_last_position != 2)
				|| (data.player_posstion == 12 && data.your_last_position != 12)
				|| (data.player_posstion == 22 && data.your_last_position != 22)
				|| (data.player_posstion == 33 && data.your_last_position != 33)){
					setTimeout(() => set_life_event(1) ,10000);
					setTimeout(() => set_life_event(0) ,12000);
					setTimeout(() => set_yellow_card(data.yellow_card) ,12100);
					console.log(data.yellow_card);
					if(data.yellow_card != 2 && data.yellow_card != 4 ){
						setTimeout(() => set_yellow_card(0) ,17000);
					}
				}

				// Green Cards
				if((data.player_posstion == 9 && data.your_last_position != 9)
				|| (data.player_posstion == 17 && data.your_last_position != 17)
				|| (data.player_posstion == 28 && data.your_last_position != 28)
				|| (data.player_posstion == 37 && data.your_last_position != 37)){
					setTimeout(() => set_life_event(1) ,10000);
					setTimeout(() => set_life_event(0) ,12000);
					setTimeout(() => set_green_card(data.green_card) ,12100);
					setTimeout(() => set_green_card(0) ,16000);
				}
			}else{
				// PIC code
				if((data.player_posstion == 5 && data.your_last_position != 5)
				|| (data.player_posstion == 15 && data.your_last_position != 15)
				|| (data.player_posstion == 25 && data.your_last_position != 25)){
					setTimeout(() => set_PIC(1) ,12000);
				}
			}
			setTimeout(() => set_game_play_position(data.game_play_position) ,8000)
			setTimeout(() => move_token(data.your_last_position,data.player_posstion,data.current_user) ,8000)
			
			
			if(data.Isupdate == 1){
				setTimeout(() => all_player_assets_update() ,5000)
			}
		});

		socket.on("pic_dice_roll", (data) => {
			if(data.current_user == current_user){
				setdice1(data.dice1);
				setdice2(data.dice2);
				set_your_last_position(data.player_posstion);
				set_deci_roll_step(1);
				setTimeout(() =>  set_deci_roll_step(2),1500);
				setTimeout(() =>  set_deci_roll_step(0),4500);
				
				if(data.is_jail == 0){
					setTimeout(() => set_PIC(3) ,5000);
					setTimeout(() => set_pic_turn(0) ,5000);
					setTimeout(() => set_PIC(0) ,8000);
					setTimeout(() => set_game_play_position(data.game_play_position) ,5000)
				}else{
					setTimeout(() => set_PIC(4) ,9000);
					setTimeout(() => set_pic_turn(0) ,9000);
					setTimeout(() => set_PIC(0) ,12000);
					setTimeout(() => set_game_play_position(data.game_play_position) ,9000)
					setTimeout(() => move_token(data.your_last_position,data.player_posstion,data.current_user) ,9000)
				}
			}else{
				if(data.is_jail == 0){
					setTimeout(() => set_PIC(5) ,5000);
					setTimeout(() => set_PIC(0) ,8000);
				}else{
					setTimeout(() => set_PIC(6) ,5000);
					setTimeout(() => set_PIC(0) ,8000);
				}
				setTimeout(() => set_game_play_position(data.game_play_position) ,8000)
				setTimeout(() => move_token(data.your_last_position,data.player_posstion,data.current_user) ,8000)
			}
			
			if(data.Isupdate == 1){
				setTimeout(() => all_player_assets_update() ,5000)
			}
		});

		socket.on("sexual_assault_dice_roll", (data) => {
			if(data.current_user == current_user){
				setdice1(data.dice1);
				setdice2(data.dice2);
				set_your_last_position(data.player_posstion);
				set_deci_roll_step(1);
				setTimeout(() =>  set_deci_roll_step(2),1500);
				setTimeout(() =>  set_deci_roll_step(0),4500);
				setTimeout(() =>  set_sexual_assault(data.sexual_assault),4600);
				setTimeout(() =>  set_sexual_assault(0),7000);
				setTimeout(() => set_game_play_position(data.game_play_position) ,8000)
			}else{
				setTimeout(() => set_game_play_position(data.game_play_position) ,8000)
			}
			
			if(data.Isupdate == 1){
				setTimeout(() => all_player_assets_update() ,5000)
			}
		});

		socket.on("raise_dice_roll", (data) => {
			if(data.current_user == current_user){
				setdice1(data.dice1);
				setdice2(data.dice2);
				set_your_last_position(data.player_posstion);
				set_deci_roll_step(1);
				setTimeout(() =>  set_deci_roll_step(2),1500);
				setTimeout(() =>  set_deci_roll_step(0),4500);
				setTimeout(() =>  set_raise(data.raise),4600);
				setTimeout(() =>  set_raise(0),7000);
				setTimeout(() => set_game_play_position(data.game_play_position) ,8000)
			}else{
				setTimeout(() => set_game_play_position(data.game_play_position) ,8000)
			}
			
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


	

	// Token Move
	const move_token = (last_position,postion_temp,current_userid) => {
		let temp_postion = last_position;
		if(last_position > 39){
			temp_postion = last_position % 40;
		}
		if(current_user == current_userid){
			if(temp_postion == 10){
				let temp_rotation_count = (rotation_count * 360) + 90;
				document.getElementsByClassName("gameplay_game")[0].style.transform = 'rotate(-'+temp_rotation_count+'deg)';
				
				var player_token = document.getElementsByClassName("player_token");
				var n = player_token.length;
				for(var i = 0; i < n; i ++) {
					player_token[i].style.transform = 'rotate('+temp_rotation_count+'deg)';
				}
			}
			if(temp_postion == 20){
				let temp_rotation_count = (rotation_count * 360) + 180;
				document.getElementsByClassName("gameplay_game")[0].style.transform = 'rotate(-'+temp_rotation_count+'deg)';
				var player_token = document.getElementsByClassName("player_token");
				var n = player_token.length;
				for(var i = 0; i < n; i ++) {
					player_token[i].style.transform = 'rotate('+temp_rotation_count+'deg)';
				}
			}
			if(temp_postion == 30){
				let temp_rotation_count = (rotation_count * 360) + 270;
				document.getElementsByClassName("gameplay_game")[0].style.transform = 'rotate(-'+temp_rotation_count+'deg)';
				var player_token = document.getElementsByClassName("player_token");
				var n = player_token.length;
				for(var i = 0; i < n; i ++) {
					player_token[i].style.transform = 'rotate('+temp_rotation_count+'deg)';
				}
			}
			if((temp_postion = 0 && last_position != 0) || last_position == 40){
				let temp_rotation_count = (rotation_count * 360) + 360;
				document.getElementsByClassName("gameplay_game")[0].style.transform = 'rotate(-'+temp_rotation_count+'deg)';
				var player_token = document.getElementsByClassName("player_token");
				var n = player_token.length;
				for(var i = 0; i < n; i ++) {
					player_token[i].style.transform = 'rotate('+temp_rotation_count+'deg)';
				}
				rotation_count++;
			}
		}
		var x;
		var y;
		if(last_position == 40){
			last_position = 0;
		}

		// Find X AND Y Position
		x = document.getElementById("Gameboard_playboard_"+last_position).offsetLeft;
		y = document.getElementById("Gameboard_playboard_"+last_position).offsetTop;

		document.getElementById(current_userid+"_player").style.left = x+'px';
		document.getElementById(current_userid+"_player").style.top = y+'px';
		if(postion_temp != last_position ){
			// Move token again
			setTimeout(() => move_token(last_position+1,postion_temp,current_userid),300);
		}
	}
	
	// Game Start
	const onMessageSubmit = (e) => {
		var json_object = {
			'room_id' : room_id,
			'room_status' : 1,
			'type' : 0,
			'srnumber' : srnumber
		}
		socket.emit('sendMessage', json_object, () => console.log(''));
	}

	// Game Cancel by Admin
	const game_cancel = (e) => {
		var json_object = {
			'room_id' : room_id,
		}
		socket.emit('send_game_stop', json_object, () => console.log(''));
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
	

	// Regualr Dice Roll
	const dice_roll = (e) => {
		var json_object = {
			'room_id' : room_id,
			'current_user' : current_user,
			'your_last_position' : your_last_position,
			'game_play_position' : game_play_position,
			'players' : players.length
		}
		set_PIC(0);
		set_game_play_position(-1);
		socket.emit('send_dice_roll', json_object, () => console.log(''));
	}

	// PIC check Dice Roll
	const pic_dice_roll = (e) => {
		var json_object = {
			'room_id' : room_id,
			'current_user' : current_user,
			'your_last_position' : your_last_position,
			'game_play_position' : game_play_position,
			'players' : players.length
		}
		set_game_play_position(-1);
		set_PIC(0);
		socket.emit('send_pic_dice_roll', json_object, () => console.log(''));
	}

	// Sexual Assault Dice Roll
	const sexual_assault_dice_roll = (e) => {
		var json_object = {
			'room_id' : room_id,
			'current_user' : current_user,
			'your_last_position' : your_last_position,
			'game_play_position' : game_play_position,
			'players' : players.length
		}
		set_game_play_position(-1);
		set_yellow_card(0);
		socket.emit('send_sexual_assault_dice_roll', json_object, () => console.log(''));
	}

	// Raise Assault Dice Roll
	const raise_dice_roll = (e) => {
		var json_object = {
			'room_id' : room_id,
			'current_user' : current_user,
			'your_last_position' : your_last_position,
			'game_play_position' : game_play_position,
			'players' : players.length
		}
		set_game_play_position(-1);
		set_yellow_card(0);
		socket.emit('send_raise_dice_roll', json_object, () => console.log(''));
	}

	function all_player_assets_update(){
		var json_object = {
			'room_id' : room_id
		}
		socket.emit('sent_all_players_assets_update', json_object, () => console.log(''));
	}

	function waiting_user_remove(player_user_id){
		var json_object = {
			'room_id' : room_id,
			'player_user_id' : player_user_id
		}
		socket.emit('waiting_user_remove', json_object, () => console.log(''));
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
						<div className="bg-board">
							<img src="img/December2020-Gameboard.png" alt="" />
						</div>
						<div className="show_cardt" id="oner_id">
							<div className="how_would-main how_would-main1">
								<div className="how_would" id="send-payment" >
									<div className="how_would-join join_or_login">
										<div className="month-price">
											<p style={{color:'#6B8E0C',fontSize:'30px',textTransform:'uppercase',marginLeft:'18px',marginBottom:'0px',fontFamily: 'Bangers'}} className="month-price-text red-class">Sorry, you have not received Inheritance</p>
										</div>
									</div>        
								</div>
							</div>
						</div>
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
												<img src={`img/indentity/${user.IdentityID}_avtar.png`}></img>
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
											return <img className="player_token" src={`img/indentity/${user.IdentityID}_token.png`} id={`${user.PlayerID}_player`}/>;
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
									<a href="javascript:void(0);" onClick={() => dice_roll()}> 
										<img src="img/Component 16 – 3.png" alt="" /> 
									</a>
								</div>
							:
								<div style={{width: '100px'}}>
									<a href="javascript:void(0);">
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
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<img className="dice_throw-img" src="img/Image-4.png" alt="" />
						</div>
					: ""
					}

					{deci_roll_step == 2?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<img className="dice_throw-img-inner" src="img/ScreenShot2021.png" alt="" />
						</div>
					: ""
					}

					{deci_roll_step == 3?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="pass-number">
								<h3 className="title_pass_number">Dice Roll</h3>
								<div className="pass_number-main">
									<h3 className="pass_number">{dice1 + dice2}</h3>
									<div className="pass_number-text">
										<h3> You moved {dice1 + dice2} Space</h3>
									</div>    
								</div>
							</div>
						</div>
					: ""
					}

					{PIC == 1?
						<div className="select_card_first" id="select_card_first" style={{position:'absolute',width:'100%',backgroundColor:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="select_card_first-inner">
								<div className="select_box_bonus">
								<img style={{width:'100%'}} src={`img/pi.png`}></img>
								</div>
							</div>
						</div>
					: ""
					}

					{PIC == 2?
						<div className="select_card_first" id="select_card_first" style={{position:'absolute',width:'100%',backgroundColor:'rgba(70,35,33,0.9)',zIndex:'999'}}>
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
							<div className="Roll_inheritance-main" style={{top:'-50px'}}>
								<button className="sign_in_btn Roll_inheritance" onClick={() => pic_dice_roll()}>ROLL TO AVOID PRISON</button>
							</div>
						</div>
					: ""
					}

					{PIC == 3?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="pass-number">
								<h3 className="title_pass_number">Avoid prison?</h3>
								<div className="pass_number-main">
									<h3 className="pass_number">{dice1 + dice2}</h3>
									<div className="pass_number-text">
										<p style={{fontFamily:'Bangers',color:'#6B8E0C',fontSize:'30px'}}>
											<span className="month-price-text red-class month-price-text2" style={{color:'#6B8E0C',fontSize:'30px'}}>you avoided the <br />prison Industrial complex</span>
										</p>
									</div>    
								</div>
							</div>
						</div>
					 : ""
					}

					{PIC == 4?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="pass-number">
								<h3 className="title_pass_number">Avoid prison?</h3>
								<div className="pass_number-main">
									<h3 className="pass_number">{dice1 + dice2}</h3>
									<div className="pass_number-text">
										<p>
											<span className="month-price-text red-class input_error" style={{fontFamily:'Bangers',color:'#E53F40',fontSize:'30px',textAlign:'center',width:'100%'}}>you are going to prison</span>
										</p>
									</div>    
								</div>
							</div>
						</div>
					 : ""
					}

					{PIC == 5?
						<div className="select_card_first" id="select_card_first" style={{position:'absolute',width:'100%',backgroundColor:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="select_card_first-inner">
								<div className="select_box_bonus">
								<img style={{width:'100%'}} src={`img/go_jail_way.png`}></img>
								</div>
							</div>
						</div>
					: ""
					}

					{PIC == 6?
						<div className="select_card_first" id="select_card_first" style={{position:'absolute',width:'100%',backgroundColor:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="select_card_first-inner">
								<div className="select_box_bonus">
								<img style={{width:'100%'}} src={`img/go_jail.png`}></img>
								</div>
							</div>
						</div>
					: ""
					}

					{life_event == 1?
						<div className="select_card_first" id="select_card_first" style={{position:'absolute',width:'100%',backgroundColor:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="select_card_first-inner">
								<div className="select_box_bonus">
								<img style={{width:'100%'}} src={`img/life_event.png`}></img>
								</div>
							</div>
						</div>
					: ""
					}

					{yellow_card != 0?
						<div className="select_card_first" id="select_card_first" style={{position:'absolute',width:'100%',backgroundColor:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="select_card_first-inner">
								<div className="select_box_bonus">
									<div className="select_card_fist_img">
										<img src={`img/cards/yellow_${yellow_card}.png`}></img>
									</div>
									<div className="select_card_fist_text">
										<h3 className="title_card">Life Event</h3>
										<div className="cards_text_inner" style={{overflow:'auto'}}>
											<br></br>
											{yellows_cards[myidentity-1].map(function(identity_card, i){
												return <div className="select_card_fist_text_servies">
													<h2>{identity_card.name}</h2>
													<h3>{identity_card.value}</h3>
												</div>
											})}
										</div>
									</div>
								</div>
							</div>
							{yellow_card == 2?
								<div className="Roll_inheritance-main" style={{top:'-50px'}}>
									<button className="sign_in_btn Roll_inheritance" onClick={() => sexual_assault_dice_roll()}>ROLL TO AVOID ASSAULT</button>
								</div>
							:""
							}
							{yellow_card == 4?
								<div className="Roll_inheritance-main" style={{top:'-50px'}}>
									<button className="sign_in_btn Roll_inheritance" onClick={() => raise_dice_roll()}>ROLL TO GET RAISE</button>
								</div>
							:""
							}
						</div>
					: ""
					}

					{sexual_assault == 1?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="pass-number">
								<h3 className="title_pass_number">Avoid Sexual Assault?</h3>
								<div className="pass_number-main">
									<h3 className="pass_number">{dice1 + dice2}</h3>
									<div className="pass_number-text">
										<p style={{fontFamily:'Bangers',color:'#6B8E0C',fontSize:'30px'}}>
											<span className="month-price-text red-class month-price-text2" style={{color:'#6B8E0C',fontSize:'30px'}}>you avoided the Sexual Assault</span>
										</p>
									</div>    
								</div>
							</div>
						</div>
					: ""
					}

					{sexual_assault == 2?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="pass-number">
								<h3 className="title_pass_number">Avoid Sexual Assault?</h3>
								<div className="pass_number-main">
									<h3 className="pass_number">{dice1 + dice2}</h3>
									<div className="pass_number-text">
										<p>
											<span className="month-price-text red-class input_error" style={{fontFamily:'Bangers',color:'#E53F40',fontSize:'30px',textAlign:'center',width:'100%'}}>you are Sexual Assault assaulted</span>
										</p>
									</div>    
								</div>
							</div>
						</div>
					: ""
					}

					{raise == 1?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="pass-number">
								<h3 className="title_pass_number">Raise?</h3>
								<div className="pass_number-main">
									<h3 className="pass_number">{dice1 + dice2}</h3>
									<div className="pass_number-text">
										<p style={{fontFamily:'Bangers',color:'#6B8E0C',fontSize:'30px'}}>
											<span className="month-price-text red-class month-price-text2" style={{color:'#6B8E0C',fontSize:'30px'}}>you have received raise</span>
										</p>
									</div>    
								</div>
							</div>
						</div>
					: ""
					}

					{raise == 2?
						<div className="dice_throw" style={{position:'absolute',background:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="pass-number">
								<h3 className="title_pass_number">Raise?</h3>
								<div className="pass_number-main">
									<h3 className="pass_number">{dice1 + dice2}</h3>
									<div className="pass_number-text">
										<p>
											<span className="month-price-text red-class input_error" style={{fontFamily:'Bangers',color:'#E53F40',fontSize:'30px',textAlign:'center',width:'100%'}}>you didn't have received raise</span>
										</p>
									</div>    
								</div>
							</div>
						</div>
					: ""
					}

					{green_card != 0?
						<div className="select_card_first" id="select_card_first" style={{position:'absolute',width:'100%',backgroundColor:'rgba(70,35,33,0.9)',zIndex:'999'}}>
							<div className="select_card_first-inner">
								<div className="select_box_bonus">
									<div className="select_card_fist_img">
										<img src={`img/cards/yellow_${green_card}.png`}></img>
									</div>
									<div className="select_card_fist_text">
										<h3 className="title_card">Green Event</h3>
										<div className="cards_text_inner" style={{overflow:'auto'}}>
											<br></br>
											{greens_cards[myidentity-1].map(function(identity_card, i){
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
					: ""
					}
				</div>  
			:
			pickup_step == 4 ?
				<div className="wapper gamepay-wapper">
					<div className="gamebordPaass_main gamebordPaass_main-1">
						<div className="bg-board">
							<img src="img/December2020-Gameboard.png" alt="" />
						</div>
						<div className="show_cardt" id="oner_id">
							<div className="dice_throw" style={{position:'absolute',background:'rgba(0,0,0,.5)',zIndex:'999'}}>
								<img className="dice_throw-img" src="img/Image-4.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			:
			pickup_step == 5 ?
				<div className="wapper gamepay-wapper">
					<div className="gamebordPaass_main gamebordPaass_main-1">
						<div className="bg-board">
							<img src="img/December2020-Gameboard.png" alt="" />
						</div>
						<div className="show_cardt" id="oner_id">
							<div className="dice_throw" style={{position:'absolute',background:'rgba(0,0,0,.5)',zIndex:'999'}}>
								<img className="dice_throw-img-inner" src="img/ScreenShot2021.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			:
			pickup_step == 6 ?
				<div className="wapper gamepay-wapper">
					<div className="gamebordPaass_main gamebordPaass_main-1">
						<div className="bg-board">
							<img src="img/December2020-Gameboard.png" alt="" />
						</div>
						<div className="show_cardt" id="oner_id">
							<div className="dice_throw" style={{position:'absolute',background:'rgba(0,0,0,.5)',zIndex:'999'}}>
								<div className="pass-number">
									<h3 className="title_pass_number">Dice Roll</h3>
									<div className="pass_number-main">
										<h3 className="pass_number">{dice1 + dice2}</h3>
										<div className="pass_number-text">
											{/* <h3> You moved {dice1 + dice2} Space</h3> */}
										</div>    
									</div>
								</div>
							</div>
						</div>
					</div>
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
										return <p><span className="user_name" id={user.id}>{user.name.split("_")[1]}</span><span className="user_icon" onClick={() => waiting_user_remove(user.id)} style={{cursor: "pointer"}}>
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