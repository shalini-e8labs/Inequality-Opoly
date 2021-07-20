import React, { Component,useState } from 'react';
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { ElementsConsumer,CardNumberElement,CardCvcElement,CardExpiryElement } from '@stripe/react-stripe-js';
import './css/Tutorials.css';
import './css/login.css';
import CardSection from "./CardSection"
class App extends React.Component {
    constructor(props) {
        
        super(props);
        let temp_login = false;
        let temp_name = '';
        let temp_IsSubscription = 0;
        if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
            temp_login = true;
        }
        if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
            // temp_IsSubscription = JSON.parse(localStorage.getItem('user')).IsSubscription;
            let temp_name = JSON.parse(localStorage.getItem('user')).Name;
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
            signupemail : '',
            errors_signupemail : '',
            signupemailconfirm : '',
            errors_signuemalconfirm : '',
            signuppassword : '',
            errors_signuppassword : '',
            signuppasswordconfirm : '',
            errors_signuppasswordconfirm : '',
            cardnumber : '4242424242424242',
            errors_cardnumber : '',
            security_code : '1025',
            error_security_code : '',
            expiration : '1030',
            error_expiration : '',
            zipcode : '2020',
            error_zipcode : '',
            IsSubscription : temp_IsSubscription,
            room_key : '',
            room_id : '',
            user : temp_name,
            isinvite : false,
            invite_email : '',
            error_invite_email : ''
        };
        if(localStorage.getItem('token') != '' && localStorage.getItem('token') != null){
            if(this.state.room_key == ''){
                let data={
                    "PlayerID" : JSON.parse(localStorage.getItem('user')).PlayerID,
                    "name" : JSON.parse(localStorage.getItem('user')).Name,
                    "email" : JSON.parse(localStorage.getItem('user')).Email
                }
                fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/room_create", {
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
                            localStorage.setItem('room', JSON.stringify(result[1][0]));
                            localStorage.setItem('room_host', 1);
                            setTimeout(() =>  
                                this.setState({IsSubscription: 1,room_key: result[1][0].room_key,room_id:result[1][0].room_id})
                            ,3000);
                            
                        }
                        if(result[0][0].SUCCESS == 2){
                            localStorage.removeItem('token');
                            localStorage.removeItem('user');
                            this.setState({login: 'false'});
                        }
                    })
                })
            }
        }
        
        // Function define
        this.userlogin = this.userlogin.bind(this);
        this.change_loginemail = this.change_loginemail.bind(this);
        this.change_loginpassword = this.change_loginpassword.bind(this);
        this.create_room = this.create_room.bind(this);
        this.change_signupname = this.change_signupname.bind(this);
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
        this.buynow_function = this.buynow_function.bind(this);
        this.change_invite_email = this.change_invite_email.bind(this);
    }
    // Function logic
    change_invite_email(e) {
        this.setState({invite_email: e.target.value});
        this.setState({error_invite_email: ''});
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
                    'Content-Type': 'application/json'
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
            this.setState({isinvite: true});
        }
        if(e == 6){
            this.setState({isinvite: false});
        }
        if(e == 7){
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
    }

    singup_function = async (event)=>{
        event.preventDefault();
        const {stripe, elements} = this.props
        if(!stripe || !elements) return;
        const card = elements.getElement(CardNumberElement,CardCvcElement,CardExpiryElement);
        const result = await stripe.createToken(card);
        if(!result){
            console.log(result.error.message);
        }else{
            let data={
                "name" : this.state.signupname,
                "email" : this.state.signupemail,
                "password" : this.state.signuppassword,
                "ispayment" : 1,
                "token" : result.token.id,
                "cardnumber" : result.token.card.last4,
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

                        let data={
                            "PlayerID" : JSON.parse(localStorage.getItem('user')).PlayerID,
                            "name" : JSON.parse(localStorage.getItem('user')).Name,
                            "email" : JSON.parse(localStorage.getItem('user')).Email
                        }
                        fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/room_create", {
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
                                    localStorage.setItem('room', JSON.stringify(result[1][0]));
                                    localStorage.setItem('room_host', 1);
                                    this.setState({room_key: result[1][0].room_key});
                                    this.setState({room_id: result[1][0].room_id});
                                    this.setState({singup_process_step:0});
                                }
                                if(result[0][0].SUCCESS == 2){
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('user');
                                    this.setState({login: 'false'});
                                }
                            })
                        })

                        this.setState({login: true});
                        this.setState({IsSubscription: result[2][0].IsSubscription});
                        this.setState({singup_process_step: 5});
                    }else{
                        this.setState({errors_loginpassword: result[1][0].Message});
                    }
                })
            })
        }
    }
    buynow_function = async (event)=>{
        
        event.preventDefault();
        const {stripe, elements} = this.props
        if(!stripe || !elements) return;
        const card = elements.getElement(CardNumberElement,CardCvcElement,CardExpiryElement);
        const result = await stripe.createToken(card);
        if(!result){
            console.log(result.error.message);
        }else{
            let data={
                "cardnumber" : result.token.card.last4,
                "securitycode" : '',
                "expiration" : result.token.card.exp_month+result.token.card.exp_year,
                "zipcode" : this.state.zipcode,
                "gateway" : 'stripe',
                "amount" : '1.00',
                "token" : result.token.id,
                "PlayerID" : JSON.parse(localStorage.getItem('user')).PlayerID,
                "token" : result.token.id
            }
    
            fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/subscription", {
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

                        let data={
                            "PlayerID" : JSON.parse(localStorage.getItem('user')).PlayerID,
                            "name" : JSON.parse(localStorage.getItem('user')).Name,
                            "email" : JSON.parse(localStorage.getItem('user')).Email
                        }
                        fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/room_create", {
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
                                    localStorage.setItem('room', JSON.stringify(result[1][0]));
                                    localStorage.setItem('room_host', 1);
                                    this.setState({room_key: result[1][0].room_key});
                                    this.setState({room_id: result[1][0].room_id});
                                    setTimeout(() => 
                                        this.setState({ singup_process_step:0,IsSubscription:1}), 
                                        3000
                                    );
                                }
                                if(result[0][0].SUCCESS == 2){
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('user');
                                    this.setState({login: 'false'});
                                }
                            })
                        })

                        this.setState({IsSubscription: 1});
                        this.setState({singup_process_step: 5});
                    }else{
                        this.setState({errors_loginpassword: ''});
                    }
                })
            })
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
                if(result[0][0].SUCCESS == 1){
                    localStorage.setItem('token', 'Bearer '+result[1][0].token);
                    localStorage.setItem('user', JSON.stringify(result[2][0]));
                    this.setState({login: true});
                    if(result[2][0].IsSubscription == 1){
                        let data={
                            "PlayerID" : JSON.parse(localStorage.getItem('user')).PlayerID,
                            "name" : JSON.parse(localStorage.getItem('user')).Name,
                            "email" : JSON.parse(localStorage.getItem('user')).Email
                        }
                        fetch("http://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/room_create", {
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
                                    localStorage.setItem('room', JSON.stringify(result[1][0]));
                                    localStorage.setItem('room_host', 1);
                                    this.setState({room_key: result[1][0].room_key});
                                    this.setState({room_id: result[1][0].room_id});
                                    setTimeout(() => 
                                        this.setState({ singup_process_step:0,IsSubscription:1}), 
                                        2000
                                    );
                                    // this.setState({singup_process_step:0});
                                }
                                if(result[0][0].SUCCESS == 2){
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('user');
                                    this.setState({login: 'false'});
                                }
                            })
                        })
                    }else{
                        this.setState({singup_process_step: 4});
                        this.setState({IsSubscription: 0});
                    }
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
                        <div className="how_would" id="joing_or_create_account">
                            <Link className="back_arrow" to="/Join"><img src="img/Group_3325.png" alt="" /></Link>
                            <h3>Log in or <br/>Create Account</h3>
                            <div className="how_would-join join_or_login">
                                <div className="login_input">
                                    <input type="text" placeholder="Email" value={this.state.loginemail} onChange={this.change_loginemail} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_loginemail}</span>
                                </div>
                                <div className="login_input passowrd_input">
                                    <input type="password" placeholder="Password" value={this.state.loginpassword} onChange={this.change_loginpassword} />
                                    <span className="input_error" style={{color: "#FA303F"}}>{this.state.errors_loginpassword}</span>
                                </div>
                                <a className="create_account_or forget-password" href="javascript:void(0);">FORGOT YOUR PASSWORD?</a>
                                <div className="how_would-join">
                                    <button className="sign_in_btn" id="login" onClick={this.userlogin}>SIGN IN</button>
                                </div>
                                
                                <div className="how_would-join">
                                    <br/>
                                    <button id="createaccount" onClick={this.create_room}>CREATE AN ACCOUNT</button>
                                </div>   
                            </div>
                        </div>
                    : ""}
                    {/*  create and join Room */}

                    {/* <!--  Pregame Waiting Room --> */}
                    {this.state.login == true && this.state.singup_process_step == 0 && this.state.IsSubscription == 1 ? 
                        <div className="how_would" id='Pregame_Waiting_Room'>
                            <Redirect to='/waitingroom' />
                            <Link className="back_arrow back-name" to="/Join"><img src="img/Group_3325.png" alt="" /></Link>
                            <div className="Pregame_Waiting_Room_main">
                                <div className="Pregame_Waiting_Room_ID">
                                    <p>ROOM</p>
                                    <h3>{this.state.room_key}</h3>
                                    <div className="how_would-join">
                                        <button className="sign_in_btn go_premium ">PLAY</button>
                                    </div>
                                </div>
                                <div className="Pregame_Waiting_joing_usere_list">
                                    <div className="Pregame_Waiting_joing_usere_list-inner">
                                        <p className="host"><img className="host_icon" src="img/Group3331.png" /><span className="user_name">{this.state.user} (host)</span></p>
                                        {/* <p><span className="user_name">Melanie</span><span className="user_icon"><img src="img/Group3333.png" alt="" /></span></p>
                                        <p><span className="user_name">Noah</span><span className="user_icon"><img src="img/Group3333.png" alt="" /></span></p>
                                        <p><span className="user_name">Andy</span><span className="user_icon"><img src="img/Group3333.png" alt="" /></span></p> */}
                                    </div>
                                    <div className="how_would-join">
                                        <button className="sign_in_btn enter_room_next" onClick={() => this.singup_next(5)}>INVITE PLAYERS</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* <!--  Pregame Waiting Room --></div> */}

                    {/* <!-- Enter Name box --> */}
                    {this.state.login == false && this.state.singup_process_step == 1 ? 
                        <div className="how_would enter_name" id="enter_name" >
                            <div onClick={() => this.singup_process_step_back(0)} className="back_arrow"><img src="img/Group_3325.png" alt=""/></div>
                            <h3>ENTER YOUR <br/> NAME</h3>
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
                            <h3>Enter your<br/>Email</h3>
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
                            <h3>Enter your<br/>password</h3>
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
                    
                    {/* payment */}
                    {(this.state.login == false && this.state.singup_process_step == 4) || (this.state.login == true && this.state.IsSubscription == 0) ? 
                        <div className="how_would enter_name" id='payment'>
                            <div onClick={() => this.singup_process_step_back(3)}  className="back_arrow"><img src="img/Group_3325.png" alt="" /></div>
                            <h3>PAYMENT DETAILS</h3>
                            <div className="how_would-join join_or_login">
                                <CardSection/>

                                <div className="how_would-join">
                                    {this.state.login == true && this.state.IsSubscription == 0 ?
                                        <button className="sign_in_btn enter_payment_next" onClick={this.buynow_function}>Pay Now</button>
                                    : <button className="sign_in_btn enter_payment_next" onClick={this.singup_function}>SIGN UP</button>}
                                </div>
                            </div>
                        </div>
                    : ""}
                    {/* payment */}

                    {/* create and join Room */}
                    {this.state.login == true && this.state.singup_process_step == 5 ? 
                        <div className="how_would" id="send-payment">
                            <div className="how_would-join join_or_login">
                                <div className="month-price">
                                    <p>
                                        {/* <span className="month-price-img"><img src="img/cannot.png" alt="" /></span> */}
                                        <span className="month-price-text red-class" style={{color:'#6B8E0C'}}>PAYMENT SUCCESSFUL</span>
                                    </p>
                                </div>
                            </div>        
                        </div>
                    : ""}
                    {/* create and join Room */}

                    {/* invaite user box box */}
                    {this.state.isinvite == true ?
                        <div className="invaite_user" id='invaite_user'>
                            <div className="how_would enter_name enter_room  invaite_user_inner">
                                <div onClick={() => this.singup_next(6)}  className="back_arrow"><img src="img/Group_3325.png" alt="" /></div>
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
                                        <button className="sign_in_btn enter_name_next" onClick={() => this.singup_next(7)}>NEXT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : ""}
                    
                    {/* invaite user box box */}
                    
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
export default function CreateRoomfun(){
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
            <App stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    )
}