import { useState } from 'react';
import './App.css';
import Navbar from './components/01_Navbar';
import TextForm from './components/02_TextForm';
import Alert from './components/04_Alert';
import About from './components/03_About';
import Signin from './components/Signin';
import Main from './components/Main';
import Learning from './components/Learning';
import Trick from './components/Trips_Trick';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './components/Login';


function App() {
    // let Developer  = "Utkarsh Yadav";

  const [mode, setMode] = useState("dark");

  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("sucess", "Light mode has been enabled");
    }
    else {
      setMode("dark");
      showAlert("sucess ", "Dark mode has been enabled");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => { 
    setAlert(
      {
        msg: message,
        type: type,
      }
    );
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <div>
      <Router>

        <Navbar title="Fast Typing" togglemode={togglemode} mode={mode}/>
        <Alert alert={alert} mode={mode} />
        
        <Routes>
          <Route exact path="/" element={<TextForm formHeading="Hello :) Utkarsh Yadav" mode={mode} showAlert={showAlert}  />} /> 
          <Route exact path="/main" element={<Main formHeading="Hello :) Utkarsh Yadav" mode={mode} showAlert={showAlert}  />} /> 
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/learning" element={<Learning mode={mode} />} />
          <Route exact path="/trips" element={<Trick mode={mode} />} />
          <Route exact path="/signin" element={<Signin mode={mode} showAlert={showAlert} />} />
          <Route exact path="/login" element={<Login mode={mode} showAlert={showAlert} />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;