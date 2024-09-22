
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

  
function App() {
  const [mode , setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout( ()=>{
     setAlert('null')
    },3000

    );
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743'
      showAlert("Enable Dark","success")
    }
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor= 'white'
      showAlert("Enable Light","success")


    }
    
  }
  return (
    <>
    
<Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert}/>

<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/> 



    </>
  );
}

export default App;
