import React, { Component,useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { ElementsConsumer,CardNumberElement,CardCvcElement,CardExpiryElement } from '@stripe/react-stripe-js';
import './css/Tutorials.css';
import './css/login.css';
import CardSection from "./CardSection"

class App extends React.Component {
    
    // const Chat = () => {
    // console.log(props);
    constructor(props) {
        super(props);
        let temp_login = false;
        if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
            temp_login = true;
        }

        // Variable Define
        this.state = {
            loginemail: '',
            loginpassword: '',
            errors_loginpassword: '',
            errors_loginemail: '',
            login: temp_login,
            singup_process_step : 0,
            signupname : '',
            errors_signupname : '',
            signupname_guest : '',
            errors_signupname_guest : '',
            signupemail : '',
            errors_signupemail : '',
            signupemailconfirm : '',
            errors_signuemalconfirm : '',
            signuppassword : '',
            errors_signuppassword : '',
            signuppasswordconfirm : '',
            errors_signuppasswordconfirm : '',
            cardnumber : '',
            errors_cardnumber : '',
            security_code : '',
            error_security_code : '',
            expiration : '',
            error_expiration : '',
            zipcode : '',
            error_zipcode : '',
            IsSubscription : 0,
            room_key : '',
            errors_room_key : '',
            room_id : '',
            isinvite : false,
            invite_email : '',
            error_invite_email : '',
            message : '',
            users : [],
            errors_payment : ''

        };

        // Function define
        this.userlogin = this.userlogin.bind(this);
        this.change_loginemail = this.change_loginemail.bind(this);
        this.change_loginpassword = this.change_loginpassword.bind(this);
        this.create_room = this.create_room.bind(this);
        this.change_signupname = this.change_signupname.bind(this);
        this.change_signupname_guest = this.change_signupname_guest.bind(this);
        this.singup_next = this.singup_next.bind(this);
        this.singup_process_step_back = this.singup_process_step_back.bind(this);
        this.change_signupemail = this.change_signupemail.bind(this);
        this.change_signupemailconfirm = this.change_signupemailconfirm.bind(this);
        this.change_signuppassword = this.change_signuppassword.bind(this);
        this.change_signuppasswordconfirm = this.change_signuppasswordconfirm.bind(this);
        this.singup_function = this.singup_function.bind(this);
        this.change_cardnumber = this.change_cardnumber.bind(this);
        this.change_security_code = this.change_security_code.bind(this);
        this.change_expiration = this.change_expiration.bind(this);
        this.change_zipcode = this.change_zipcode.bind(this);
        this.change_room_key = this.change_room_key.bind(this);
        this.change_invite_email = this.change_invite_email.bind(this);
        this.change_message = this.change_message.bind(this);
        // this.setUsers = this.setUsers.bind(this);
        // const [message, setMessage] = useState('');
        
    }

    // Function logic
    change_message(e) {
        this.setState({message: e.target.value});
        // this.setState({errors_loginemail: ''});
    }
    change_loginemail(e) {
        this.setState({loginemail: e.target.value});
        this.setState({errors_loginemail: ''});
    }
    change_loginpassword(e) {
        this.setState({loginpassword: e.target.value});
        this.setState({errors_loginpassword: ''});
    }
    change_signupname(e){
        this.setState({signupname: e.target.value});
        this.setState({errors_signupname: ''});
    }
    change_signupname_guest(e){
        this.setState({signupname_guest: e.target.value});
        this.setState({errors_signupname_guest: ''});
    }
    change_signupemail(e){
        this.setState({signupemail: e.target.value});
        this.setState({errors_signupemail: ''});
    }
    change_signupemailconfirm(e){
        this.setState({signupemailconfirm: e.target.value});
        this.setState({errors_signuemalconfirm: ''});
    }
    change_signuppassword(e){
        this.setState({signuppassword: e.target.value});
        this.setState({errors_signuppassword: ''});
    }
    change_signuppasswordconfirm(e){
        this.setState({signuppasswordconfirm: e.target.value});
        this.setState({errors_signuppasswordconfirm: ''});
    }
    change_cardnumber(e){
        this.setState({cardnumber: e.target.value});
        this.setState({errors_cardnumber: ''});
    }
    change_security_code(e){
        this.setState({security_code: e.target.value});
        this.setState({error_security_code: ''});
    }
    change_expiration(e){
        this.setState({expiration: e.target.value});
        this.setState({error_expiration: ''});
    }
    change_zipcode(e){
        this.setState({zipcode: e.target.value});
        this.setState({error_zipcode: ''});
    }
    change_room_key(e){
        this.setState({room_key: e.target.value});
        this.setState({errors_room_key: ''});
    }
    change_invite_email(e) {
        this.setState({invite_email: e.target.value});
        this.setState({error_invite_email: ''});
    }
    

    singup_next(e){
        if(e == 2){
            this.setState({errors_signupname: ''});
            if(this.state.signupname == ''){
                this.setState({errors_signupname: 'Please enter Name'});
                return false;
            }
            this.setState({singup_process_step: e});

        }
        if(e == 3){
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let error_log = 0;

            this.setState({errors_signupemail: '',errors_signuemalconfirm: ''});
            if(this.state.signupemail == ''){
                error_log = 1;
                this.setState({errors_signupemail: 'Please enter Email'});
            }else{
                if (!regEmail.test(this.state.signupemail)) {
                    error_log = 1;
                    this.setState({errors_signupemail: 'Invalid Email Address'});
                }
            }
            if(this.state.signupemail == ''){
                error_log = 1;
                this.setState({signupemailconfirm: 'Please enter Email'});
            }else if (!regEmail.test(this.state.signupemail)) {
                error_log = 1;
                this.setState({errors_signuemalconfirm: 'Invalid Email Address'});
            }else if(this.state.signupemail != this.state.signupemailconfirm){
                error_log = 1;
                this.setState({errors_signuemalconfirm: 'Enter confirm email not matched to email'});
            }
            if(error_log == 1){
                return false;
            }
            let data={
                "email" : this.state.signupemail
            }
            fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/emailcheck", {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
            }).then((resp)=>{
                resp.json().then((result)=>{
                    if(result[0][0].SUCCESS == 1){
                        this.setState({singup_process_step: e});
                    }else{
                        this.setState({errors_signupemail: result[1][0].Message});
                        return false;
                    }
                })
            })
        }
        if(e == 4){
            let error_log = 0;

            this.setState({errors_signuppassword: '',errors_signuppasswordconfirm: ''});
            if(this.state.signuppassword == ''){
                error_log = 1;
                this.setState({errors_signuppassword: 'Please enter password'});
            }
            if(this.state.signuppasswordconfirm == ''){
                error_log = 1;
                this.setState({errors_signuppasswordconfirm: 'Please enter password'});
            }else if(this.state.signuppassword != this.state.signuppasswordconfirm){
                error_log = 1;
                this.setState({errors_signuppasswordconfirm: 'Entered confirm password not matched to password'});
            }
            if(error_log == 1){
                return false;
            }
            this.setState({singup_process_step: e});
        }
        if(e == 5){
            this.setState({IsSubscription: 1});
            this.setState({singup_process_step: e});
            
        }
        if(e == 7){
            this.setState({singup_process_step: e});
        }
        if(e == 8){
            var error_log = 0;
            let data={
                // "email" : this.state.signupemail
                "name" : this.state.signupname,
                "email" : this.state.signupemail,
                "password" : this.state.signuppassword,
                "ispayment" : 0,
                "cardnumber" : '',
                "securitycode" : '',
                "expiration" : '',
                "zipcode" : '',
                "gateway" : '',
                "amount" : '',
                "transactionkey" : ''
            }

            fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/registration", {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
            }).then((resp)=>{
                resp.json().then((result)=>{
                    if(result[0][0].SUCCESS == 1){
                        localStorage.setItem('token', 'Bearer '+result[1][0].token);
                        localStorage.setItem('user', JSON.stringify(result[2][0]));
                        this.setState({login: true});
                        this.setState({IsSubscription: 0});
                        this.setState({singup_process_step: 0});
                    }else{
                        this.setState({errors_loginpassword: result[1][0].Message});
                    }
                })
            })
        }
        if(e == 9){
            this.setState({errors_signupname_guest: ''});
            if(this.state.signupname_guest == ''){
                this.setState({errors_signupname_guest: 'Please enter Name'});
                return false;
            }
            
            let data={
                "name" : this.state.signupname_guest
            }

            fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/guest_registration", {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },
                body:JSON.stringify(data)
            }).then((resp)=>{
                resp.json().then((result)=>{
                    if(result[0][0].SUCCESS == 1){
                        localStorage.setItem('token', 'Bearer '+result[1][0].token);
                        localStorage.setItem('user', JSON.stringify(result[2][0]));
                        this.setState({login: true});
                        this.setState({IsSubscription: 0});
                        this.setState({singup_process_step: 0});
                    }else{
                        this.setState({errors_loginpassword: result[1][0].Message});
                    }
                })
            })
        }
        if(e == 10){
            let data={
                "room_key" : this.state.room_key,
                "PlayerID" : JSON.parse(localStorage.getItem('user')).PlayerID,
            }
            this.setState({errors_room_key: ''});
            if(this.state.room_key == '' || this.state.room_key == null){
                this.setState({errors_room_key: 'Please enter the room Key'});
                return false;
            }
            console.log(data);
            fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/join_player", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('token'),
                },
                body:JSON.stringify(data)
            }).then((resp)=>{
                resp.json().then((result)=>{
                    console.log(result);
                    if(result[0][0].SUCCESS == 1){
                        localStorage.setItem('room', JSON.stringify(result[1][0]));
                        localStorage.setItem('room_host', 0);
                        this.setState({room_id: result[1][0].RoomID});
                        this.setState({singup_process_step: e});
                        
                    }else{
                        this.setState({errors_room_key: result[1][0].Message});
                    }
                })
            })
        }
        if(e == 11){
            this.setState({isinvite: true});
        }
        if(e == 12){
            let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            this.setState({errors_serror_invite_emailignupemail: ''});
            if(this.state.invite_email == ''){
                this.setState({error_invite_email: 'Please enter Email'});
                return false
            }else{
                if (!regEmail.test(this.state.invite_email)) {
                    this.setState({error_invite_email: 'Invalid Email Address'});
                    return false
                }
            }
            let data={
                "room_id" : this.state.room_id,
                "email" : this.state.invite_email
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
                        this.setState({error_invite_email: 'INVITE SEND'});
                        this.setState({invite_email: ''});
                    }else{
                        this.setState({error_invite_email: result[1][0].Message});
                    }
                })
            })

        }
        if(e == 13){
            this.setState({isinvite: false});
        }
        
    }

    singup_function = async (event)=>{
        this.setState({errors_payment: ''});
        event.preventDefault();
        const {stripe, elements} = this.props
        if(!stripe || !elements) return;
        const card = elements.getElement(CardNumberElement,CardCvcElement,CardExpiryElement);
        const result = await stripe.createToken(card);
        if(!result){
            console.log(result.error.message);
        }else{
            if(!result.error){
                let data={
                    "name" : this.state.signupname,
                    "email" : this.state.signupemail,
                    "password" : this.state.signuppassword,
                    "ispayment" : 1,
                    "cardnumber" : result.token.card.last4,
                    "token" : result.token.id,
                    "securitycode" : '',
                    "expiration" : result.token.card.exp_month+result.token.card.exp_year,
                    "zipcode" : this.state.zipcode,
                    "gateway" : 'stripe',
                    "amount" : '1.00'
                }
        
                fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/registration", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(data)
                }).then((resp)=>{
                    resp.json().then((result)=>{
                        if(result[0][0].SUCCESS == 1){
                            localStorage.setItem('token', 'Bearer '+result[1][0].token);
                            localStorage.setItem('user', JSON.stringify(result[2][0]));
                            this.setState({login: true});
                            this.setState({IsSubscription: result[2][0].IsSubscription});
                            this.setState({singup_process_step: 6});
                        }else{
                            this.setState({errors_loginpassword: result[1][0].Message});
                        }
                    })
                })
            }else{
                this.setState({errors_payment: result.error.message});
            }
        }
    }
    

    singup_process_step_back(e){
        this.setState({singup_process_step: e});
    }
    
    userlogin(e) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let error_log = 0;
        this.setState({errors_loginpassword: '',errors_loginemail: ''});
        let data={
            "email" : this.state.loginemail,
            "password" : this.state.loginpassword
        }

        if(this.state.loginemail == ''){
            error_log = 1;
            this.setState({errors_loginemail: 'Please enter Email'});
        }else{
            if (!regEmail.test(this.state.loginemail)) {
                error_log = 1;
                this.setState({errors_loginemail: 'Invalid Email Address'});
            }
        }
        if(this.state.loginemail == ''){
            error_log = 1;
            this.setState({errors_loginpassword: 'Please enter Passsword'});
        }
        if(error_log == 1){
            return false;
        }
        fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/login", {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn("result",result)
                if(result[0][0].SUCCESS == 1){
                    localStorage.setItem('token', 'Bearer '+result[1][0].token);
                    localStorage.setItem('user', JSON.stringify(result[2][0]));
                    this.setState({login: true});
                }else{
                    this.setState({errors_loginpassword: result[1][0].Message});
                }
            })
        })
    }
    create_room(e){
        this.setState({singup_process_step: 1});
    }
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
                    {this.state.login  == false && this.state.singup_process_step == 0 ? 
                        <div className="how_would joing_or_gestd_account" id="joing_or_create_account">
                            <Link className="back_arrow" to="/Join"><img src="img/Group_3325.png" alt="" /></Link>
                            <h3>Log in or <br/>Create Account</h3>
                            <div className="how_would-join join_or_login">
                                <div className="login_input">
                                    <input type="text" placeholder="Email" value={this.state.loginemail} onChange={this.change_loginemail} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_loginemail}</span>
                                </div>
                                <div className="login_input">
                                    <input type="password" placeholder="Password" value={this.state.loginpassword} onChange={this.change_loginpassword} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_loginpassword}</span>
                                </div>
                                <a class="create_account_or forget-password" href="javascript:void(0);">FORGOT YOUR PASSWORD?</a>
                                <div className="how_would-join">
                                    <button className="sign_in_btn" id="login" onClick={this.userlogin}>SIGN IN</button>
                                </div>
                                <a className="create_account_or create_new_account" href="javascript:void(0);" onClick={this.create_room} > CREATE AN ACCOUNT </a>
                                <div className="how_would-join">
                                    <button id="createaccount" onClick={() => this.singup_next(7)}>CONTINUE AS GUST</button>
                                </div>   
                            </div>
                        </div>
                    : ""}
                    {/*  create and join Room */}

                    {/* <!--  Pregame Waiting Room --> */}
                    {this.state.login == true && this.state.singup_process_step == 0 && this.state.room_id == '' ? 
                        <div className="how_would enter_name enter_room " id='enter_room'>
                            <Link className="back_arrow" to="/Join"><img src="img/Group_3325.png" alt="" /></Link>
                            <h3>ENTER GAME <br/> CODE</h3>
                            <div className="how_would-join join_or_login">
                                <div className="login_input">
                                    <input type="text" placeholder="#Ikao21"  value={this.state.room_key} onChange={this.change_room_key} />
                                    <span className="input_error" style={{color: "#FA303F",marginTop:"-40px",paddingBottom:"40px"}}>{this.state.errors_room_key}</span>
                                </div>
                                <div className="how_would-join">
                                    <button className="sign_in_btn enter_room_next" onClick={() => this.singup_next(10)}>JOIN</button>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* <!--  Pregame Waiting Room --></div> */}

                    {/* <!-- Enter Name box --> */}
                    {this.state.login == false && this.state.singup_process_step == 1 ? 
                        <div className="how_would enter_name" id="enter_name">
                            <div onClick={() => this.singup_process_step_back(0)} className="back_arrow"><img src="img/Group_3325.png" alt=""/></div>
                            <h3>ENTER<br/>YOUR NAME</h3>
                            <div className="how_would-join join_or_login">
                                <div className="login_input">
                                    <input type="text" placeholder="NAME" value={this.state.signupname} onChange={this.change_signupname} />
                                <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_signupname}</span>
                                </div>
                                <div className="how_would-join">
                                    <button className="sign_in_btn enter_name-join_next" onClick={() => this.singup_next(2)}>NEXT</button>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* Enter Name box */}
                    
                    {/* Enter email box */}
                    {this.state.login == false && this.state.singup_process_step == 2 ? 
                        <div className="how_would enter_name enter_email" id='enter_email'>
                            <div onClick={() => this.singup_process_step_back(1)}  className="back_arrow"><img src="img/Group_3325.png" alt="" /></div>
                            <h3>ENTER YOUR<br/>EMAIL</h3>
                            <div className="how_would-join join_or_login">
                                <div className="login_input">
                                    <input type="email" placeholder="Email" value={this.state.signupemail} onChange={this.change_signupemail} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_signupemail}</span>
                                </div>
                                <div className="login_input">
                                    <input type="email" placeholder="Confirm email" value={this.state.signupemailconfirm} onChange={this.change_signupemailconfirm} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_signuemalconfirm}</span>
                                </div>
                                <div className="how_would-join">
                                    <button className="sign_in_btn enter_email_next" onClick={() => this.singup_next(3)}>NEXT</button>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* Enter email box */}

                    {/* Enter password box */}
                    {this.state.login == false && this.state.singup_process_step == 3 ? 
                        <div className="how_would enter_name enter_password" id='enter_password'>
                            <div onClick={() => this.singup_process_step_back(2)}  className="back_arrow"><img src="img/Group_3325.png" alt="" /></div>
                            <h3>ENTER YOUR<br/>PASSWORD</h3>
                            <div className="how_would-join join_or_login">
                                <div className="login_input">
                                    <input type="password" placeholder="Password" value={this.state.signuppassword} onChange={this.change_signuppassword} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_signuppassword}</span>
                                </div>
                                <div className="login_input">
                                    <input type="password" placeholder="Confirm password" value={this.state.signuppasswordconfirm} onChange={this.change_signuppasswordconfirm} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_signuppasswordconfirm}</span>
                                </div>
                                <div className="how_would-join">
                                    <button className="sign_in_btn enter_password_next" onClick={() => this.singup_next(4)}>NEXT</button>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* Enter password box */}

                    {/* Enter password box */}
                    {this.state.login == false && this.state.singup_process_step == 4 ? 
                        <div className="pricing–2" id='pricing–2' >
                            <div className="how_would enter_name">
                                <h3> Premium Account<br/>$5.99 PER MONTH</h3>
                                <div className="how_would-join join_or_login">
                                    <div className="month-price">
                                        <p>
                                            <span className="month-price-img"><img src="img/invite.png" alt="" /></span>
                                            <span className="month-price-text green-class">Create your oen Rooms</span>
                                        </p>
                                        <p>
                                            <span className="month-price-img"><img src="img/invite.png" alt="" /></span>
                                            <span className="month-price-text green-class"> JOIN ANY ROOM</span>
                                        </p>
                                        <p>
                                            <span className="month-price-img"><img src="img/invite.png" alt="" /></span>
                                            <span className="month-price-text green-class"> INVITE PLAYERS</span>
                                        </p>
                                    </div>
                                    
                                    <div className="how_would-join">
                                        <button className="sign_in_btn go_premium" onClick={() => this.singup_next(5)}>GO PREMIUM</button>
                                    </div>
                                </div>
                            </div>
                            <div className="how_would enter_name">
                                <h3>FREE Account<br/>$0.00</h3>
                                <div className="how_would-join join_or_login">
                                    <div className="month-price">
                                        <p style={{opacity:0}}>
                                            <span className="month-price-img"><img src="img/cannot.png" alt="" /></span>
                                            <span className="month-price-text red-class">CANNOT Create Rooms</span>
                                        </p>
                                        <p>
                                            <span className="month-price-img"><img src="img/cannot.png" alt="" /></span>
                                            <span className="month-price-text red-class">CANNOT Create Rooms</span>
                                        </p>
                                        <p>
                                            <span className="month-price-img"><img src="img/invite.png" alt="" /></span>
                                            <span className="month-price-text green-class"> JOIN ANY ROOM</span>
                                        </p>
                                    </div>
                                    <div className="how_would-join">
                                        <button className="sign_in_btn free_account" onClick={() => this.singup_next(8)}>FREE ACCOUNT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* Enter password box */}
                    
                    {/* payment */}
                    {this.state.login == false && this.state.singup_process_step == 5 ? 
                        <div className="how_would enter_name" id='payment'>
                            <div onClick={() => this.singup_process_step_back(4)}  className="back_arrow"><img src="img/Group_3325.png" alt="" /></div>
                            <h3>PAYMENT DETAILS</h3>
                            <div className="how_would-join join_or_login">
                                <CardSection/>
                                <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_payment}</span>
                                <div className="how_would-join">
                                    <button className="sign_in_btn enter_payment_next" onClick={this.singup_function}>SIGN UP</button>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* payment */}

                    {/* create and join Room */}
                    {this.state.login == true && this.state.singup_process_step == 6 ? 
                        <div className="how_would" id="send-payment">
                            <div className="how_would-join join_or_login">
                                <div className="month-price">
                                    <p>
                                        <span className="month-price-img"><img src="img/cannot.png" alt="" /></span>
                                        <span className="month-price-text red-class">CANNOT Create Rooms</span>
                                    </p>
                                </div>
                            </div>        
                        </div>
                    : ""}
                    {/* create and join Room */}
                    
                    {this.state.login == false && this.state.singup_process_step == 7 ?
                       <div className="how_would enter_name" id="enter_name">
                        <div onClick={() => this.singup_process_step_back(0)} className="back_arrow"><img src="img/Group_3325.png" alt=""/></div>
                        <h3>ENTER<br/>YOUR NAME</h3>
                        <div className="how_would-join join_or_login">
                            <div className="login_input">
                                <input type="text" placeholder="NAME" value={this.state.signupname_guest} onChange={this.change_signupname_guest} />
                            <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_signupname_guest}</span>
                            </div>
                            <div className="how_would-join">
                                <button className="sign_in_btn enter_name-join_next" onClick={() => this.singup_next(9)}>NEXT</button>
                            </div>
                        </div>
                    </div>
                    :""}
                    {this.state.login == true && this.state.room_id != ''  && this.state.singup_process_step == 10 ?
                        <div className="how_would" id='Pregame_Waiting_Room'>
                            <Redirect to='/waitingroom' />
                            <Link className="back_arrow" to="/Join"><img src="img/Group_3325.png" alt="" /></Link>
                            <div className="Pregame_Waiting_Room_main">
                                <div className="Pregame_Waiting_Room_ID">
                                    <p>ROOM</p>
                                    <h3>{this.state.room_key}</h3>
                                    <div className="how_would-join">
                                        {/* <button className="sign_in_btn go_premium ">PLAY</button> */}
                                        <h4>Waiting for host to start the game...</h4>
                                    </div>
                                </div>
                                <div className="Pregame_Waiting_joing_usere_list">
                                    <div className="Pregame_Waiting_joing_usere_list-inner">
                                        <p className="host"><img className="host_icon" src="img/Group3331.png" /><span className="user_name">{this.state.user} (host)</span></p>
                                    </div>
                                    <div className="how_would-join">
                                        <button className="sign_in_btn enter_room_next" onClick={() => this.singup_next(11)}>INVITE PLAYERS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* invaite user box box */}
                    {this.state.isinvite == true ?
                        <div className="invaite_user" id='invaite_user'>
                            <div className="how_would enter_name enter_room  invaite_user_inner">
                                <div onClick={() => this.singup_next(13)}  className="back_arrow"><img src="img/Group_3325.png" alt="" /></div>
                                <h3>SEND AN INVITE TO...</h3>
                                <div className="how_would-join join_or_login">
                                    <div className="login_input">
                                        <input type="email" placeholder="Email" value={this.state.invite_email} onChange={this.change_invite_email}/>
                                    </div>
                                    <div className="send_email" id="send_email">{this.state.error_invite_email}
                                        {/* <span className="send_icon"><img src="img/invite.png" /></span>
                                        <span className="send_icon_text">INVITE SEND</span> */}
                                    </div>
                                    <div className="how_would-join">
                                        <button className="sign_in_btn enter_name_next" onClick={() => this.singup_next(12)}>NEXT</button>
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
}
// export default App;
export default function JoinRoomfun(){
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
            <App stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    )
}