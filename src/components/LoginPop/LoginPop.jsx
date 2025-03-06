import React, { useState, useEffect } from 'react';
import './LoginPop.css';
import { assets } from '../../assets/assets';
import axios from 'axios';

const LoginPop = ({ setshowlogin }) => {
    const [currentstate, setcurrentstate] = useState("Log in");
    const [uname, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedInUser, setLoggedInUser] = useState(null); // Store logged-in user details

    // Check if a user is already logged in (on component mount)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setLoggedInUser(JSON.parse(storedUser)); // Parse JSON user data
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const endpoint = currentstate === "Log in" ? "login" : "Authentification"; 
        const data = currentstate === "Log in" 
            ? { email, password } 
            : { uname, email, password }; 
        
        try {
            const response = await axios.post(`http://localhost:3001/${endpoint}`, data);
            console.log("Response:", response.data);

            if (response.data.status === "Success") {
                alert(`✅ ${currentstate === "Log in" ? "Login" : "Register"} successful!`);
                
                if (currentstate === "Log in") {
                    localStorage.setItem("user", JSON.stringify({ uname: response.data.uname, email }));
                    setLoggedInUser({ uname: response.data.uname, email }); // Update state
                }

                setshowlogin(false);  // Close modal after success
            } else {
                alert(`❌ ${response.data.message || "An error occurred."}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("❌ Server error. Please try again.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedInUser(null);
        alert("✅ Logged out successfully!");
    };

    return (
        <div className='loginpop'>
            <div className="login-pop-container">
                <div className="login-pop-title">
                    <h2>{loggedInUser ? `Welcome, ${loggedInUser.uname}!  😃` : currentstate}</h2>
                    <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="Close" />
                </div>

                {loggedInUser ? (
                    <div className="login-pop-logged-in">
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="login-pop-inputs">
                            {currentstate === "Sign Up" && 
                                <input type="text" placeholder='Enter your name' required onChange={(e) => setName(e.target.value)} />}
                            <input type="email" placeholder='Enter your email' required onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder='Enter your password' required onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <button>{currentstate === "Sign Up" ? "Create Account" : "Log In"}</button>
                        
                        <div className="login-pop-condition">
                            <input type="checkbox" required />
                            <p>By continuing, I agree to the terms and privacy policy</p>
                        </div>

                        {currentstate === "Log in" ? 
                            <p>Create a new account <span onClick={() => setcurrentstate("Sign Up")}>Click here</span></p> 
                            : <p>Already have an account? <span onClick={() => setcurrentstate("Log in")}>Log in here</span></p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPop;
