import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import io from "socket.io-client"
import DOMPurify from "dompurify";
import queryString from 'query-string';
import {gameboard_assets} from "./gameboard_assets.js"

const ENDPOINT = 'http://api.inequalityopoly.www70-32-25-208.a2hosted.com/';
let socket;
let button_style = {
	position: 'relative',
		width: '100%'
}
// console.log(location.search);
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
	let temp_identity = [
			[
				{ "name":"Inheritance", "value":"Roll less than 9 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 12 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $235" },
				{ "name":"Promotion", "value":"Roll less than 10 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 11 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $50" },
				{ "name":"Voting", "value":"Roll less than 8 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 11 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 11 to own" },
				{ "name":"Insurance", "value":"Roll less than 10 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 11 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $100 and Odd for pay $50" },
			],
			[
				{ "name":"Inheritance", "value":"Roll less than 6 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 6 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $145" },
				{ "name":"Promotion", "value":"Roll less than 9 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 6 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $75" },
				{ "name":"Voting", "value":"Roll less than 6 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 8 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 6 to own" },
				{ "name":"Insurance", "value":"Roll less than 8 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 6 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $100 and Odd for pay $150" },
			],
			[
				{ "name":"Inheritance", "value":"Roll less than 7 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 9 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $140" },
				{ "name":"Promotion", "value":"Roll less than 9 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 7 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $75" },
				{ "name":"Voting", "value":"Roll less than 7 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 8 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 7 to own" },
				{ "name":"Insurance", "value":"Roll less than 7 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 9 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $350 and Odd for pay $150" },
			],
			[
				{ "name":"Inheritance", "value":"Roll less than 11 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 10 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $200" },
				{ "name":"Promotion", "value":"Roll less than 12 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 9 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $50" },
				{ "name":"Voting", "value":"Roll less than 9 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 12 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 9 to own" },
				{ "name":"Insurance", "value":"Roll less than 11 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 9 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $700 and Odd for receive $150" },
			],
			[
				{ "name":"Inheritance", "value":"Roll less than 9 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 12 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $175" },
				{ "name":"Promotion", "value":"Roll less than 10 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 11 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $50" },
				{ "name":"Voting", "value":"Roll less than 11 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 11 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 11 to own" },
				{ "name":"Insurance", "value":"Roll less than 10 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 10 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $100 and Odd for pay $50" },
			],
			[
				{ "name":"Inheritance", "value":"Roll less than 6 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 7 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $130" },
				{ "name":"Promotion", "value":"Roll less than 7 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 9 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $75" },
				{ "name":"Voting", "value":"Roll less than 9 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 8 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 6 to own" },
				{ "name":"Insurance", "value":"Roll less than 8 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 5 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $100 and Odd for pay $50" },
			],
			[
				{ "name":"Inheritance", "value":"Roll less than 7 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 8 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $115" },
				{ "name":"Promotion", "value":"Roll less than 7 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 9 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $75" },
				{ "name":"Voting", "value":"Roll less than 9 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 8 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 7 to own" },
				{ "name":"Insurance", "value":"Roll less than 7 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 8 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $350 and Odd for pay $150" },
			],
			[
				{ "name":"Inheritance", "value":"Roll less than 11 to receive inheritance" },
				{ "name":"Employment", "value":"Roll less than 11 to become employed" },
				{ "name":"Salary", "value":"Receive a base salary of $165" },
				{ "name":"Promotion", "value":"Roll less than 11 to receive a promotion" },
				{ "name":"Prison Industrial", "value":"Roll less than 12 to avoid a P.I.C" },
				{ "name":"Bail", "value":"Pay $50" },
				{ "name":"Voting", "value":"Roll less than 12 to keep right to vote" },
				{ "name":"Mortgage", "value":"Roll less than 12 to get approval" },
				{ "name":"Entrepreneurship", "value":"Roll less than 9 to own" },
				{ "name":"Insurance", "value":"Roll less than 11 to receive health insurance" },
				{ "name":"Violence", "value":"Roll less than 7 to avoid intimate partner violence" },
				{ "name":"Disaster", "value":"Event for receive $700 and Odd for receive $150" },
			],
		]

	// let temp_card = [
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $70 every time they land on this space" },
	// 	],
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $70 every time they land on this space" },
	// 		{ "name":"Purchase Price", "value":"I no player purchase owns this property, it cost $900 to but." },
	// 		{ "name":"Auction Roles", "value":"If a player can’t afford the purchase price, the property goes to the highest bidder."},
	// 	],
	// 	[
	// 		{ "name":"Yellow Card", "value":"Yellow Card" },
	// 	],
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $5 every time they land on this space" },
	// 		{ "name":"Purchase Price", "value":"I no player purchase owns this property, it cost $70 to but." },
	// 		{ "name":"Auction Roles", "value":"If a player can’t afford the purchase price, the property goes to the highest bidder."},
	// 	],
		
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $10 every time they land on this space" },
	// 		{ "name":"Purchase Price", "value":"I no player purchase owns this property, it cost $80 to but." },
	// 		{ "name":"Auction Roles", "value":"If a player can’t afford the purchase price, the property goes to the highest bidder."},
	// 	],
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $10 every time they land on this space" },
	// 		{ "name":"Purchase Price", "value":"I no player purchase owns this property, it cost $90 to but." },
	// 		{ "name":"Auction Roles", "value":"If a player can’t afford the purchase price, the property goes to the highest bidder."},
	// 	],
	// 	[
	// 		{ "name":"Police", "value":"Police" },
	// 	],
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $10 every time they land on this space" },
	// 		{ "name":"Purchase Price", "value":"I no player purchase owns this property, it cost $90 to but." },
	// 		{ "name":"Auction Roles", "value":"If a player can’t afford the purchase price, the property goes to the highest bidder."},
	// 	],
	// 	[
	// 		{ "name":"Pink Tax", "value":"Pink Tax" },
	// 	],
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $20 every time they land on this space" },
	// 		{ "name":"Purchase Price", "value":"I no player purchase owns this property, it cost $110 to but." },
	// 		{ "name":"Auction Roles", "value":"If a player can’t afford the purchase price, the property goes to the highest bidder."},
	// 	],
	// 	[
	// 		{ "name":"Green Card", "value":"Green Card" },
	// 	],
	// 	[
	// 		{ "name":"Rental Income", "value":"Player pays  you $20 every time they land on this space" },
	// 		{ "name":"Purchase Price", "value":"I no player purchase owns this property, it cost $130 to but." },
	// 		{ "name":"Auction Roles", "value":"If a player can’t afford the purchase price, the property goes to the highest bidder."},
	// 	],
	// 	[
	// 		{ "name":"Yellow Card", "value":"Yellow Card" },
	// 	],
	// ]

	/*let temp_card = [
		[
			{ "name":"Pay Day", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Red Park", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Yellow Life Event", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Red Road", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Tangerine Place", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Police Interaction", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Tangerine View", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Pin Tax", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Tangerine Towers", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Green Life Event", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"PIC", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Lemon Center", "value":"Player pays  you $70 every time they land on this space" },
		],
		[
			{ "name":"Yellow Life Event", "value":"Player pays  you $70 every time they land on this space" },
		]
	]*/

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
	const [identity_cards, setidentity_cards] = useState(temp_identity);
	const [board_cards, setitemp_card] = useState(gameboard_assets);
	const [hostisonline, sethostisonline] = useState(1);
	const [inheritance_id, setinheritance_id] = useState(0);
	
	
	const invite_fucntion = (e) => {
		if(invite_email == '' || invite_email == null){
			seterror_invite_email('Please enter the EmailID');
			return false;
		}

		let data={
			"room_id" : JSON.parse(localStorage.getItem('room')).room_id,
			"email" : invite_email
		}
		console.log(data);
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
					}
				});

				data.dice.forEach(function(element) {
					if(element.PlayerID == current_user){
						setdice1(element.dice1);
						setdice2(element.dice2);
						setinheritance_id(element.isinheritance);
					}
				});
				setTimeout(() =>  setpickup_step(1),7000);
				setTimeout(() =>  setpickup_step(2),12000);
				setTimeout(() =>  setpickup_step(3),17000);
				
			}
		});
    }, [ENDPOINT, room,name]);
	
	const onMessageSubmit = (e) => {
		var json_object = {
			'room_id' : room_id,
			'room_status' : 1,
			'type' : 0,
			'srnumber' : srnumber
		}
		socket.emit('sendMessage', json_object, () => console.log(''));
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
								<div class="lodding-fills_child"></div>
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
												{identity_cards[myidentity-1].map(function(identity_card, i){
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
						<div class="show_cardt" id="oner_inheritance">
							{/* details about selected Inheritence screen */}
							<div class="select_card_first " id="first-card-inheritance">
								<div class="select_card_first-inner">
								<div class="select_box_bonus">
									<div class="select_card_fist_img">
										{/* <img src="img/red_park.png" /> */}
										<img src={board_cards[inheritance_id].url}></img>
									</div>
									<div class="select_card_fist_text">
										<h3 class="title_card">{board_cards[inheritance_id].name}</h3>
										<div class="cards_text_inner">
											{board_cards[inheritance_id].description.map(function(board_cards, i){
												return <div className="select_card_fist_text_servies">
														<h3>{board_cards.name}</h3>
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
				<div>
					Game Start {inheritance_id}
					<br/>
					Dice 1 {dice1}
					<br/>
					Dice 2 {dice2}
					<br/>
					myidentity {myidentity}
					<br/>
					inheritance_id {inheritance_id}
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
								<button className="sign_in_btn go_premium game-start-btn" onClick={() => onMessageSubmit(0)}>PLAY</button>
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
						<div onClick={() => setisinvite(false)}  className="back_arrow back-email"><img src="img/Group_3325.png" alt="" /></div>
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