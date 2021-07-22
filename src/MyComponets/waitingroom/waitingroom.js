import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import io from "socket.io-client"
import DOMPurify from "dompurify";
import queryString from 'query-string';

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
	let srnumber2 = 0;
	const [hostid, sethostid] = useState(JSON.parse(localStorage.getItem('room')).PlayerID);
	const [ishostid, setishostid] = useState(localStorage.getItem('room_host'));
	const [current_user, setcurrent_user] = useState(JSON.parse(localStorage.getItem('user')).PlayerID);
	const [name, setName] = useState(JSON.parse(localStorage.getItem('user')).PlayerID+'_'+JSON.parse(localStorage.getItem('user')).Name);
    const [room, setRoom] = useState(JSON.parse(localStorage.getItem('room')).room_key);
	const [room_id, setroom_id] = useState(JSON.parse(localStorage.getItem('room')).room_id);
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
				setTimeout(() =>  setpickup_step(1),5000);
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
				<div style={{color:'#fff'}}>Identity Card {myidentity}</div>
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
							{/* <p className="host"><img className="host_icon" src="img/Group3331.png" /><span className="user_name">(host)</span></p> */}
							{users.map(function(user, i){
								// return <ObjectRow obj={object} key={i} />;
								if(user.name.split("_")[0] == hostid) {
									return <p className="host"><img className="host_icon" src="img/Group3331.png" /><span className="user_name">{user.name.split("_")[1]}(host)</span></p>;
								}else{
									return <p><span className="user_name" id={user.id}>{user.name.split("_")[1]}</span><span className="user_icon"><img src="img/Group3333.png" alt="" /></span></p>;
								}
								
							})}
						</div>
						<div className="how_would-join">
							<button className="sign_in_btn enter_room_next" onClick={() => setisinvite(true)}>INVITE PLAYERS</button>
						</div>
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
								{/* <span className="send_icon"><img src="img/invite.png" /></span>
								<span className="send_icon_text">INVITE SEND</span> */}
							</div>
							<div className="how_would-join">
								<button className="sign_in_btn enter_name_next" onClick={invite_fucntion}>NEXT</button>
							</div>
						</div>
					</div>
				</div>
			: ""}
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