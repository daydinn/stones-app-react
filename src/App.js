import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Guides from "./pages/Guides";
import About from "./pages/About";
import AllCrystals from "./pages/AllCrystals";
import Properties from "./pages/Properties";
import ChakraStones from "./pages/ChakraStones";
import EditProfile from "./pages/EditProfile";
import Collection from "./pages/Collection";


function App() {
  return (
    <>
    <Router>
    <Header />

     <Routes>
      <Route path="/" element= {<Home/>}/> 
      <Route path="/SignIn" element= {<SignIn/>}/>
      <Route path="/SignUp" element= {<SignUp/>}/>
      <Route path="/ForgotPassword" element= {<ForgotPassword/>}/>
      <Route path="/Profile" element= {<Profile/>}/>
      <Route path="/Guides" element= {<Guides/>}/>
      <Route path="/About" element= {<About/>}/>
      <Route path="/AllCrystals" element= {<AllCrystals/>}/>
      <Route path="/Properties" element= {<Properties/>}/>
      <Route path="/ChakraStones" element= {<ChakraStones/>}/>
      <Route path="/Collection" element= {<Collection/>}/>
      <Route path="/EditProfile" element= {<Collection/>}/>







     </Routes>
    </Router>
    </>
  );
}

export default App;
