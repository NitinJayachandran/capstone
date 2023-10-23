// import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
// import { Login } from "./components/login/login";
// import { Register } from "./components/register/register";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import {playlist} from "./components/playlist/playlist"

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );
// }

// export default App;
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Login } from "./components/login/login";
// import { Register } from "./components/register/register";
// import Playlist from "./components/playlist/playlist";

// function App() {
//   return (
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/playlist" element={<Playlist />} />
//         </Routes>
//       </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from "./components/user_auth/components/login/login";
import { Register } from "./components/user_auth/components/register/register";
import { Routes, Route, Link } from "react-router-dom"; // Update imports
import Playlist from "./components/playlist/playlist"; // Import Playlist component
import History from "./components/playlist/history/history";
import Suggested from "./components/playlist/suggested/suggested";
import { Provider } from "react-redux";
//import { store } from "/Users/nitin/Desktop/capstone/front_end_code/capstone_front copy/src/components/user_auth/store/store";
import  store  from "./components/user_auth/store/store";

import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import ToastContainer styles

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Provider store = {store}>
    <div className="App">
      {/* <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav> */}
      
      <Routes>
        <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History/>}/>
        <Route path="/suggested" element={<Suggested/>}/> 

      </Routes>
    </div>
    <ToastContainer 
    toastClassName="custom-toast-container"/> {/* Add ToastContainer here */}
    </Provider>
  );
}

export default App;


