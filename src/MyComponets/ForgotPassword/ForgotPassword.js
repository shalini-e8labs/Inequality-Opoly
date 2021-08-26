import React,{useState,useEffect} from 'react'
import useQuery from "./useQuery";
import { Redirect } from "react-router";
export default function Forgotpassword(props) {
    const query = useQuery();
    const key = query.get('key') || '';
    const [forgotpassword_status, setforgotpassword_status] = useState(1);
    const [password, set_password] = useState('');
    const [confirm_password, set_confirm_password] = useState('');
    const [error_password, set_error_password] = useState('');
    const [error_confirm_password, set_error_confirm_password] = useState('');
    // if(key == '' && forgotpassword_status == 1){
    //     setforgotpassword_status(0);
    // }

    if(key != '' && forgotpassword_status == 1){
        let data={
			"key" : key
		}
		fetch("https://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/forgot_password_key_check", {
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
					setforgotpassword_status(1);
				}else{
					setforgotpassword_status(0);
				}
			})
		})
    }
    const change_password = (e) => {
        set_error_password('');
        set_error_confirm_password('');
        if(password == ''){
            set_error_password('Password is required');
            return false;
        }
        if(confirm_password == ''){
            set_error_confirm_password('Confirm Password is required');
            return false;
        }
        if(password != confirm_password){
            set_error_confirm_password('Password & Confirm Password is matched');
            return false;
        }
        let data={
			"key" : key,
            "password" : password
		}
		fetch("https://api.inequalityopoly.www70-32-25-208.a2hosted.com/api/forgot_password_change", {
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
					setforgotpassword_status(2);
                    setTimeout(() =>  setforgotpassword_status(3),3000);
				}else{
					setforgotpassword_status(1);
				}
			})
		})
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
        forgotpassword_status == 1 ?
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

                <div className="how_would" id="joing_or_create_account">
                    
                    <h3>Create a new  <br/>Passsword</h3>
                    <div className="how_would-join join_or_login">
                        <div className="login_input passowrd_input">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => set_password(e.target.value)} />
                            <span className="input_error" style={{color: "#FA303F"}}>{error_password}</span>
                        </div>
                        <div className="login_input passowrd_input">
                            <input type="password" placeholder="Confirm Password" value={confirm_password} onChange={(e) => set_confirm_password(e.target.value)} />
                            <span className="input_error" style={{color: "#FA303F"}}>{error_confirm_password}</span>
                        </div>
                        <div className="how_would-join">
                            <button className="sign_in_btn" id="login" style={{width: "100%"}} onClick={change_password}>UPDATE PASSWORD</button>
                        </div>
                    </div>
                </div>
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
                {forgotpassword_status == 2?
                    <div className="how_would" id="joing_or_create_account">
                        <span className="" style={{color: "#6B8E0C",fontSize:"25px",float:"left",fontWeight:"700",marginTop:"10px",fontFamily:"Bangers",letterSpacing:"2px"}}>Password Change SUCCESSFUL</span>
                        
                    </div>
                : forgotpassword_status == 3 ?
                    <Redirect to='/Join' />
                :
                    <div className="how_would" id="joing_or_create_account">
                        <span className="input_error" style={{color: "#FA303F"}}>Invalid URL</span>
                    </div>
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