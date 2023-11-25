import React,{useState} from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button'
import SustenLinLogo from "../assets/sustenlinLogo.png";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
//import { navigate } from "../helpers/useNavigate"; 


export default function LoginComponent() {

    let navigate = useNavigate();
    const [credentails, setCredentials] = useState({});

    const login = async () =>{
        try{
        let res = await LoginAPI(credentails.email,credentails.password);
        toast.success('Signed in SustenLin');
        localStorage.setItem('userEmail',res.user.email);
        navigate("/home");
    } catch(err){
        console.log(err);
        toast.error('Something heappend! Please Check your Credentials!');
    }
    };

/*     const GoogleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
    }; */
   

    return (
        <div className="login-wrapper">
        <img src={SustenLinLogo} className="sustenlinlogo"/>

       <div className="login-wrapper-inner">
           <h1 className="heading">Sign in</h1>
           <p className="sub-heading">Aqui você fica mais verde!</p>


       <div className="auth-inputs">
         <input
           onChange={(event) =>
             setCredentials({ ...credentails, email: event.target.value })
           }
           type="email" 
           className="common-input"
           placeholder="Email"
         />
         <input
           onChange={(event) =>
             setCredentials({ ...credentails, password: event.target.value })
           }
           type="password" 
           className="common-input"
           placeholder="Password"
         />
       </div>
       <button onClick={login} className="login-btn">
         Sign in
       </button> 
       </div>
       <hr className="hr-text" data-content="or" />
       <div className="google-btn-container">
            <p className="go-to-signup">
            New to SustenLin?
            <span className="join-now" onClick={() => navigate("/register")}>
                Join now
            </span>
            </p> 
        </div>
    </div>
    )
}
