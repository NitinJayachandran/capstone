import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/user_auth_action";
import { useDispatch, useSelector } from "react-redux";
import { selectRegisteredUser } from "../../store/selector/selector";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registeredUser = useSelector(selectRegisteredUser);

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const userToLogin = { email, password };
        console.log("Registered User:", registeredUser);
        console.log("User to Login:", userToLogin);

         // Check data types of email and password

        
        // Check if the userToLogin matches the registeredUser
        if (
            registeredUser &&
            userToLogin.email === registeredUser.email &&
            userToLogin.password === registeredUser.password
        ) {
            // Successful login
            // You can dispatch a login action if needed
            dispatch(loginUser(userToLogin)); // Dispatch the loginUser action with the login data
            console.log('Login successful');
            navigate("/playlist");
        } else {
            // Login failed
            console.log('Login failed');
            toast.error('Login failed. Please check your credentials.', {
                position: 'top-right',
                autoClose: 3000, // Close the notification after 5 seconds
            });
        }
    }

    return (

        <div className="auth-form-container">
            <h1 className="page-heading">Emotion echo</h1>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log in</button>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
            <button className="link-btn" onClick={() => navigate("/register")}>Don't have an account? Register here.</button>

        </div>
    )
}

