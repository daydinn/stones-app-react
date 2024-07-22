import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Characteristics from "./pages/Characteristics";
import Chakras from "./pages/Chakras";
import Elements from './pages/Elements';
import ZodiacSigns from './pages/ZodiacSigns';
import Planets from './pages/Planets';
import Collection from "./pages/Collection";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateStone from "./pages/CreateStone";
import EditStone from './pages/EditStone';
import Stone from './pages/Stone';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Profile" element={<PrivateRoute />}> 
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="/Characteristics" element={<Characteristics />} />
          <Route path="/Chakras" element={<Chakras />} />
          <Route path="/Elements" element={<Elements />} />
          <Route path="/ZodiacSigns" element={<ZodiacSigns />} />
          <Route path="/Planets" element={<Planets />} />


          <Route path="/Collection" element={<Collection />} />
          <Route path="/Collection" element={<PrivateRoute />}> 
            <Route path="/Collection" element={<Collection />} />
          </Route>
          
          <Route path="/:category/:stoneId" element={<Stone />} /> 

          
          <Route path="/CreateStone" element={<PrivateRoute />}> 
            <Route path="/CreateStone" element={<CreateStone />} />
          </Route>

          <Route path="/EditStone/:stoneId" element={<PrivateRoute />}>
            <Route path="" element={<EditStone />} />
          </Route>


        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
